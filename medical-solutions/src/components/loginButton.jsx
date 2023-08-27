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

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Button backgroundColor="#97E7FE" color="#B76F49" onClick={onOpen}>
        Login
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#013442">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel color="#013442">Email</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Email"
                type="email"
                // _focus={{
                //   outline: "none",
                //   borderColor: "#97E7FE",
                //   borderWidth: "2px",
                // }}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel color="#013442">Password</FormLabel>
              <Input placeholder="Password" type="password" />
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
