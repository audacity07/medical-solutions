import {
  Box,
  HStack,
  Flex,
  Spacer,
  Center,
  Text,
  Image,
  ButtonGroup,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { FaStar, FaShield } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <>
      {/* navigation */}
      <Box as="navbar" position="relative" zIndex="1">
        <Box position="sticky" top="0">
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="2"
            w="90%"
            m="auto"
            mt="1rem"
            mb="1rem"
            // borderRadius="20px"
            // boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            // p="5px 50px 5px 50px"
          >
            <Box>
              <Image src="logo4.png" alt="logo" w="80px" borderRadius="20px" />
            </Box>
            <Spacer />
            <ButtonGroup gap="2">
              <Button>Log in</Button>
              <Button>Sign Up</Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Box>

      {/* end of navigation  */}

      {/* hero section */}
      <Box>
        <Flex>
          {/* left container */}
          <Flex justify="center" align="center">
            <Flex direction="column" w="60%" gap="5">
              <Heading fontSize="6xl">Fight Virus With Vaccines</Heading>
              <Text fontSize="xl" color="gray">
                Let's stop this pandemic by killing the virus with a vaccine,
                don't let yourself and your family get infected
              </Text>
              <Flex>
                <HStack>
                  <Center bg="#FFF9E2" w="10" h="10" borderRadius="10">
                    <FaShield color="#FFD012" />
                  </Center>
                  <Text>Best Protection</Text>
                </HStack>
                <Spacer />
                <HStack>
                  <Center bg="#FFF9E2" w="10" h="10" borderRadius="10">
                    <FaStar color="#FFD012" />
                  </Center>
                  <Text>Selected Vaccines</Text>
                </HStack>
              </Flex>
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Button>Schedule your vaccinations</Button>
            </Flex>
          </Flex>

          {/* right container */}
          <Box boxSize="60%">
            <Image src="https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1692774962~exp=1692775562~hmac=d419ee2d849d35c73aa8816eba4a3d049ea559567452d32937c47ea3b7be9ab8" />
          </Box>
        </Flex>
      </Box>
      {/* end of hero section */}
    </>
  );
}
