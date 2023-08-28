import { Box, Flex, Spacer, Image, ButtonGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Login } from "./loginButton";
import { Signup } from "./signupButton";
import { Logout } from "./logoutButton";
import { Status } from "./status";

export function Navbar() {
  const { isAuth, userInfo } = useContext(AuthContext);

  let val = "";
  if (isAuth === true) {
    let temp = userInfo.name.split(" ");
    temp = temp[0][0].toUpperCase() + temp[0].slice(1).toLowerCase();
    val += `Hi, ${temp}`;
    console.log(val);
  }

  return (
    <Box as="nav" position="relative" zIndex="1">
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
            <Image src="logo.png" alt="logo" w="80px" borderRadius="20px" />
          </Box>
          <Spacer />
          {isAuth === false ? (
            <ButtonGroup gap="2">
              <Login />
              <Signup />
            </ButtonGroup>
          ) : (
            <>
              <Status val="Vaccine Status" />
              <Logout val={val} />
            </>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
