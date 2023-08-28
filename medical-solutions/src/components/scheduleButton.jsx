import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Button,
  FormLabel,
  FormControl,
  Input,
  useDisclosure,
  Select,
  useToast,
} from "@chakra-ui/react";
import { BiSolidTimeFive } from "react-icons/bi";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/authContext";

export function Schedule() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const { userInfo, isAuth, setUserInfo } = useContext(AuthContext);

  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");
  const [vaccine, setVaccine] = useState("");

  let whichDose = "";
  if (isAuth === true && userInfo.dose1.status === false) {
    whichDose = "Dose 1";
  } else {
    whichDose = "Dose 2";
  }

  async function newUser(id, vaccine, hospital, date) {
    let dose = "";
    if (userInfo.dose1.status === false) {
      dose = "dose1";
    } else {
      dose = "dose2";
    }

    let obj = {
      [dose]: {
        hospital: hospital,
        date: vaccine,
        vaccineName: date,
        status: false,
      },
    };

    try {
      await fetch(`https://medical-solutions-server.onrender.com/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      setUserInfo({
        ...userInfo,
        [dose]: {
          hospital: hospital,
          date: vaccine,
          vaccineName: date,
          status: false,
        },
      });
      toast({
        position: "top",
        title: `${whichDose} vaccine scheduled`,
        // description: "Create an account before scheduling",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    if (isAuth === false) {
      toast({
        position: "top",
        title: "Account not found.",
        description: "Create an account before scheduling",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (
      userInfo.dose1.status === true &&
      userInfo.dose2.status === true
    ) {
      toast({
        position: "top",
        title: "You are fully vaccinated!",
        // description: "You are fully vaccinated",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else if (isAuth === true && userInfo.dose1.hospital === "") {
      onOpen();
    } else if (
      isAuth === true &&
      userInfo.dose1.hospital !== "" &&
      userInfo.dose1.status === false
    ) {
      toast({
        position: "top",
        title: "Dose 1 scheduled",
        description: "Visit the hospital",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else if (
      isAuth === true &&
      userInfo.dose2.hospital !== "" &&
      userInfo.dose1.status === true
    ) {
      toast({
        position: "top",
        title: "Dose 2 scheduled",
        description: "Visit the hospital",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else if (
      isAuth === true &&
      userInfo.dose2.hospital === "" &&
      userInfo.dose1.status === true
    ) {
      onOpen();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    newUser(userInfo.id, vaccine, hospital, date);
    setHospital("");
    setVaccine("");
    setDate("");
    onClose();
  }

  function handleCancel() {
    setHospital("");
    setVaccine("");
    setDate("");
    onClose();
  }

  return (
    <>
      <Button backgroundColor="#97E7FE" h="50" w="30" onClick={handleClick}>
        <Flex gap="3">
          <BiSolidTimeFive fontSize="22" />
          <Text>Schedule your vaccinations</Text>
        </Flex>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader color="#013442">Schedule: {whichDose}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel color="#013442">Vaccine</FormLabel>
                <Select
                  ref={initialRef}
                  placeholder="Select vaccine"
                  value={vaccine}
                  onChange={(e) => setVaccine(e.target.value)}
                >
                  <option value="covishield">Covishield</option>
                  <option value="covaxin">Covaxin</option>
                  <option value="pfizer">Pfizer</option>
                  <option value="moderna">Moderna</option>
                </Select>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#013442">Hospital</FormLabel>
                <Select
                  placeholder="Select hospital"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                >
                  <option value="aiims">AIIMS</option>
                  <option value="apollo">Apollo Hospital</option>
                  <option value="tata">Tata Memorial Hospital</option>
                  <option value="fortis">Fortis Healthcare</option>
                  <option value="narayana">Narayana Health</option>
                </Select>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#013442">Date</FormLabel>
                <Input
                  placeholder="Select Date"
                  size="md"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor="#97E7FE"
                color="#013442"
                mr={3}
                // onClick={handleSubmit}
                type="submit"
              >
                Submit
              </Button>
              <Button
                backgroundColor="#97E7FE"
                color="#013442"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
