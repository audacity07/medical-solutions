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
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/authContext";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const toast = useToast();

  const { login, setUserInfo } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function newUser(email, password) {
    try {
      let response = await fetch(
        `https://medical-solutions-server.onrender.com/users`
      );
      let data = await response.json();
      for (let val of data) {
        if (val.email === email && val.password === password) {
          // if (val.email === "admin@gmail.com") {
          //   localStorage.setItem("adminData", JSON.stringify(val));
          // } else {
          //   localStorage.setItem("userData", JSON.stringify(val));
          // }
          setUserInfo(val);
          login();
          if (val.name !== "admin") {
            toast({
              position: "top",
              title: "Login Successful",
              description: "You can book the vaccination slot now",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            toast({
              position: "top",
              title: "Login Successful",
              // description: "You can book the vaccination slot now",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }

          console.log("login successful");
          return;
        }
      }
      toast({
        position: "top",
        title: "Wrong credentials",
        description: "Please enter correct email and password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // async function updateStatus(id) {
  //   try {
  //     await fetch(`http://localhost:3000/users/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         loginStatus: true,
  //       }),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    newUser(email, password);
    setEmail("");
    setPassword("");
    onClose();
  }

  function handleCancel() {
    setEmail("");
    setPassword("");
    onClose();
  }

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
          <form onSubmit={handleSubmit}>
            <ModalHeader color="#013442">Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel color="#013442">Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // _focus={{
                  //   outline: "none",
                  //   borderColor: "#97E7FE",
                  //   borderWidth: "2px",
                  // }}
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
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor="#97E7FE"
                color="#013442"
                mr={3}
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
