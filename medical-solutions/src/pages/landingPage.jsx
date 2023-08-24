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
  SimpleGrid,
} from "@chakra-ui/react";
import { FaStar, FaShield, FaList } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { HiPresentationChartBar } from "react-icons/hi";

export default function LandingPage() {
  return (
    <>
      {/* navigation */}
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
              <Button>Log in</Button>
              <Button>Sign Up</Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Box>

      {/* end of navigation  */}

      {/* hero section */}
      <Box mb="20">
        <Flex>
          {/* left container */}
          <Flex align="center">
            <Flex direction="column" w="60%" gap="5" ml="140">
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
              <Spacer />
              <Spacer />
              <Button>Schedule your vaccinations</Button>
            </Flex>
          </Flex>

          {/* right container */}
          <Box boxSize="60%">
            <Image
              src="https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1692774962~exp=1692775562~hmac=d419ee2d849d35c73aa8816eba4a3d049ea559567452d32937c47ea3b7be9ab8"
              borderLeftRadius="10"
            />
          </Box>
        </Flex>
      </Box>
      {/* end of hero section */}

      {/* logo section */}
      {/* yet to implement */}
      {/* end of logo section */}

      {/* why to vaccinate section */}
      <Box mb="20">
        <Flex direction="column" w="35%" ml="140">
          <Heading fontSize="4xl" mb="30">
            Why should I Vaccinate?
          </Heading>
          <Text fontSize="lg" color="gray">
            In order to avoid any doubts about getting the COVID-19 vaccine,
            identify the following 4 benefits of COVID-19 vaccination:
          </Text>
        </Flex>
      </Box>
      {/* end of why to vaccinate section */}

      {/* reasons for why to vaccinate */}
      <Box mb="20">
        <SimpleGrid ml="140" mr="140" columns={4} spacing={10}>
          <Flex
            direction="column"
            gap="7"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            p="5"
            borderRadius="10"
          >
            <Center bg="#E2E8F0" w="10" h="10" borderRadius="10">
              <FaList />
            </Center>
            <Heading fontSize="2xl">Minimize the spread of viruses</Heading>
            <Text fontSize="sm" color="gray">
              Vaccine has been proven effective to prevent someone from getting
              infected with Coronavirus
            </Text>
          </Flex>
          <Flex
            direction="column"
            gap="7"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            p="5"
            borderRadius="10"
          >
            <Center bg="#E2E8F0" w="10" h="10" borderRadius="10">
              <FaShield />
            </Center>
            <Heading fontSize="2xl">Forming antibodies</Heading>
            <Text fontSize="sm" color="gray">
              COVID-19 vaccine proven to help shape antibody response for immune
              system
            </Text>
          </Flex>
          <Flex
            direction="column"
            gap="7"
            p="5"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            borderRadius="10"
          >
            <Center bg="#E2E8F0" w="10" h="10" borderRadius="10">
              <MdPeopleAlt />
            </Center>
            <Heading fontSize="2xl">Protecting people nearby</Heading>
            <Text fontSize="sm" color="gray">
              The benefits of COVID-19 vaccination are the vaccine that we get
              can also help protect people around us
            </Text>
          </Flex>
          <Flex
            direction="column"
            gap="7"
            borderRadius="10"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            p="5"
          >
            <Center bg="#E2E8F0" w="10" h="10" borderRadius="10">
              <HiPresentationChartBar />
            </Center>
            <Heading fontSize="2xl">Creating group immunity</Heading>
            <Text fontSize="sm" color="gray">
              COVID-19 vaccination is also beneficial for creating group
              immunity or herd immunity.
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      {/* end of reasons for why to vaccinate */}
    </>
  );
}
