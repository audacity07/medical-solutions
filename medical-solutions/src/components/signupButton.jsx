import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function newUser(name, email, password, phone) {
    try {
      await fetch(`https://medical-solutions-server.onrender.com/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          password: password,
          loginStatus: false,
          signupStatus: true,
          dose1: {
            hospital: "",
            date: "",
            vaccineName: "",
            status: false,
          },
          dose2: {
            hospital: "",
            date: "",
            vaccineName: "",
            status: false,
          },
        }),
      });
      toast({
        position: "top",
        title: "Signup Successful",
        // description: "You can book the vaccination slot now",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    newUser(name, email, password, phone);
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
    onClose();
  }

  function handleCancel() {
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
    onClose();
  }

  return (
    <>
      <Button backgroundColor="#97E7FE" color="#B76F49" onClick={onOpen}>
        Sign Up
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
            <ModalHeader color="#013442">Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel color="#013442">Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#013442">Email</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#013442">Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#013442">Phone</FormLabel>
                <Input
                  placeholder="Phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
