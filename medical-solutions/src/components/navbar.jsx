import { Box, Flex, Spacer, Image, ButtonGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Login } from "./loginButton";
import { Signup } from "./signupButton";

export function Navbar() {
  const { isAuth, login, logout } = useContext(AuthContext);

  function handleLogin() {
    console.log("login");
  }

  function handleLogout() {
    console.log("logout");
  }

  return (
    <Box as="navbar" position="relative" zIndex="1">
      <Box
        position="sticky"
        top="0"
        backgroundColor="white"
        pt="1rem"
        pb="1rem"
      >
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          w="90%"
          m="auto"
          // borderRadius="20px"
          // boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          // p="5px 50px 5px 50px"
        >
          <Box>
            <Image src="logo4.png" alt="logo" w="80px" borderRadius="20px" />
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Login />
            <Signup />
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
}
