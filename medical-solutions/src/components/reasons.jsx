import { Box, Flex, Center, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaShield, FaList } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { HiPresentationChartBar } from "react-icons/hi";

export function Reasons() {
  return (
    <Box mb="20" color="#013442">
      <SimpleGrid ml="140" mr="140" columns={4} spacing={10}>
        <Flex
          direction="column"
          gap="7"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          p="5"
          borderRadius="10"
        >
          <Center bg="#ebf6fa" w="10" h="10" borderRadius="10" color="#045870">
            <FaList fontSize="19" />
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
          <Center bg="#ebf6fa" w="10" h="10" borderRadius="10" color="#045870">
            <FaShield fontSize="18" />
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
          <Center bg="#ebf6fa" w="10" h="10" borderRadius="10" color="#045870">
            <MdPeopleAlt fontSize="21" />
          </Center>
          <Heading fontSize="2xl">Protecting people nearby</Heading>
          <Text fontSize="sm" color="gray">
            The benefits of COVID-19 vaccination are the vaccine that we get can
            also help protect people around us
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="7"
          borderRadius="10"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          p="5"
        >
          <Center bg="#ebf6fa" w="10" h="10" borderRadius="10" color="#045870">
            <HiPresentationChartBar fontSize="21" />
          </Center>
          <Heading fontSize="2xl">Creating group immunity</Heading>
          <Text fontSize="sm" color="gray">
            COVID-19 vaccination is also beneficial for creating group immunity
            or herd immunity.
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
