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
} from "@chakra-ui/react";
import { useRef } from "react";

export function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  async function newUser() {
    try {
      await fetch(`http://localhost:3000/users`, {
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
            status: "",
          },
          dose2: {
            hospital: "",
            date: "",
            vaccineName: "",
            status: "",
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
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
          <ModalHeader color="#013442">Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel color="#013442">Name</FormLabel>
              <Input ref={initialRef} placeholder="Name" type="text" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel color="#013442">Email</FormLabel>
              <Input placeholder="Email" type="email" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel color="#013442">Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel color="#013442">Phone</FormLabel>
              <Input placeholder="Phone" type="text" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor="#97E7FE" color="#013442" mr={3}>
              Submit
            </Button>
            <Button backgroundColor="#97E7FE" color="#013442" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
