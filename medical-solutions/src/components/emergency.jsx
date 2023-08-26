import {
  Box,
  HStack,
  Flex,
  Center,
  Text,
  Image,
  Button,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export function Emergency() {
  return (
    <Box mb="20" mt="10" color="#013442">
      <Flex>
        {/* left container */}
        <Flex align="center">
          <Flex direction="column" w="65%" gap="5" ml="140">
            <Heading fontSize="4xl">Emergency Contact</Heading>
            <Text fontSize="md" color="gray" mb="5">
              Contact one of the contacts below if you or your family feel
              unwell and have similar symptoms such as Covid-19, make sure you
              also take care of yourself before reporting to us:
            </Text>
            <SimpleGrid columns={2} spacing={10}>
              <Flex
                direction="column"
                gap="7"
                p="5"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                borderRadius="10"
              >
                <HStack gap="5">
                  <Center
                    bg="#ebf6fa"
                    w="12"
                    h="12"
                    borderRadius="10"
                    color="#045870"
                  >
                    <PiPhoneCallFill fontSize="24" />
                  </Center>
                  <Flex direction="column" textAlign="start">
                    <Text fontWeight="medium" fontSize="lg">
                      Call
                    </Text>
                    <Text color="gray" fontSize="sm">
                      021.123.145.14
                    </Text>
                  </Flex>
                </HStack>
                <Button
                  bg="#97E7FE"
                  fontSize="md"
                  fontWeight="semibold"
                  color="#013442"
                >
                  Call Now
                </Button>
              </Flex>

              <Flex
                direction="column"
                gap="7"
                p="5"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                borderRadius="10"
              >
                <HStack gap="5">
                  <Center
                    bg="#ebf6fa"
                    w="12"
                    h="12"
                    borderRadius="10"
                    color="#045870"
                  >
                    <BsChatDotsFill fontSize="22" />
                  </Center>
                  <Flex direction="column" textAlign="start">
                    <Text fontWeight="medium" fontSize="lg">
                      Chat
                    </Text>
                    <Text color="gray" fontSize="sm">
                      021.123.145.14
                    </Text>
                  </Flex>
                </HStack>
                <Button
                  bg="#97E7FE"
                  fontSize="md"
                  fontWeight="semibold"
                  color="#013442"
                >
                  Chat Now
                </Button>
              </Flex>

              <Flex
                direction="column"
                gap="7"
                p="5"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                borderRadius="10"
              >
                <HStack gap="5">
                  <Center
                    bg="#ebf6fa"
                    w="12"
                    h="12"
                    borderRadius="10"
                    color="#045870"
                  >
                    <FaVideo fontSize="23" />
                  </Center>
                  <Flex direction="column" textAlign="start">
                    <Text fontWeight="medium" fontSize="lg">
                      Video Call
                    </Text>
                    <Text color="gray" fontSize="sm">
                      021.123.145.14
                    </Text>
                  </Flex>
                </HStack>
                <Button
                  bg="#97E7FE"
                  fontSize="md"
                  fontWeight="semibold"
                  color="#013442"
                >
                  Video Call Now
                </Button>
              </Flex>

              <Flex
                direction="column"
                gap="7"
                p="5"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                borderRadius="10"
              >
                <HStack gap="5">
                  <Center
                    bg="#ebf6fa"
                    w="12"
                    h="12"
                    borderRadius="10"
                    color="#045870"
                  >
                    <IoMail fontSize="24" />
                  </Center>
                  <Flex direction="column" textAlign="start">
                    <Text fontWeight="medium" fontSize="lg">
                      Message
                    </Text>
                    <Text color="gray" fontSize="sm">
                      021.123.145.14
                    </Text>
                  </Flex>
                </HStack>
                <Button
                  bg="#97E7FE"
                  fontSize="md"
                  fontWeight="semibold"
                  color="#013442"
                >
                  Message Now
                </Button>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>

        {/* right container */}
        {/* <Flex justify="center" align="center"> */}
        <Box boxSize="80%" mt="8" mr="8">
          <Image src="nasal-swab-test.jpg" borderLeftRadius="10" />
        </Box>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
}
