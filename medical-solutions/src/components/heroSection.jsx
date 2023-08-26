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
} from "@chakra-ui/react";
import { FaStar, FaShield, FaList, FaVideo } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";

export function HeroSection() {
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
            <Button backgroundColor="#97E7FE" h="50" w="30">
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
