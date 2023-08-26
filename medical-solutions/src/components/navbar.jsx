import {
  Box,
  Flex,
  Spacer,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export function Navbar() {
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
            <Button backgroundColor="#97E7FE" color="#B76F49">
              Log in
            </Button>
            <Button backgroundColor="#97E7FE" color="#B76F49">
              Sign Up
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
}
