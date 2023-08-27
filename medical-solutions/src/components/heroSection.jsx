import {
  Box,
  HStack,
  Flex,
  Spacer,
  Center,
  Text,
  Image,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { FaStar, FaShield } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function HeroSection() {
  const { isAuth } = useContext(AuthContext);
  const toast = useToast();

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
    }
  }

  return (
    <Box mb="20" mt="10" color="#013442">
      <Flex>
        {/* left container */}
        <Flex align="center">
          <Flex direction="column" w="55%" gap="7" ml="140">
            <Heading fontSize="6xl" color="#013442">
              Fight Virus With Vaccines
            </Heading>
            <Text fontSize="xl" color="gray">
              Let's stop this pandemic by killing the virus with a vaccine,
              don't let yourself and your family get infected
            </Text>
            <Flex>
              <HStack>
                <Center bg="#FFF9E2" w="10" h="10" borderRadius="10">
                  <FaShield color="#FFD012" />
                </Center>
                <Text fontWeight="medium">Best Protection</Text>
              </HStack>
              <Spacer />
              <HStack>
                <Center bg="#FFF9E2" w="10" h="10" borderRadius="10">
                  <FaStar color="#FFD012" />
                </Center>
                <Text fontWeight="medium">Selected Vaccines</Text>
              </HStack>
            </Flex>
            <Spacer />
            <Spacer />
            <Button
              backgroundColor="#97E7FE"
              h="50"
              w="30"
              onClick={handleClick}
            >
              <Flex gap="3">
                <BiSolidTimeFive fontSize="22" />
                <Text>Schedule your vaccinations</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>

        {/* right container */}
        <Box boxSize="60%">
          <Image src="couple_doc.png" borderLeftRadius="10" />
        </Box>
      </Flex>
    </Box>
  );
}
