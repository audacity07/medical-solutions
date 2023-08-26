import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export function WhyVaccinate() {
  return (
    <Box mb="20" color="#013442">
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
  );
}
