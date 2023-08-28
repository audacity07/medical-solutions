import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box bg="#ebf6fa" pt="12" pb="5">
      <Flex direction="column" w="80%" m="auto" gap="20">
        {/* upper container */}
        <Flex justify="space-between">
          {/* left conatiner */}
          <Flex direction="column" w="20%" gap="4">
            <Heading fontSize="3xl" color="#013442">
              Medical Solutions
            </Heading>
            <Text color="gray">
              Our goal is to help the world free from the ongoing pandemic
            </Text>
          </Flex>

          {/* right container */}
          <Flex
            width="45%"
            color="gray"
            justify="space-between"
            wrap={{ base: "wrap", md: "wrap" }}
          >
            <Flex gap="4" direction="column" flex={{ base: 1, md: "auto" }}>
              <Heading fontSize="3xl" color="#013442">
                About
              </Heading>
              <Text>About Us</Text>
              <Text>Features</Text>
              <Text>News & Blog</Text>
            </Flex>
            <Flex gap="4" direction="column" flex={{ base: 1, md: "auto" }}>
              <Heading fontSize="3xl" color="#013442">
                Company
              </Heading>
              <Text>How We Work?</Text>
              <Text>Capital</Text>
              <Text>Security</Text>
            </Flex>
            <Flex gap="4" direction="column" flex={{ base: 1, md: "auto" }}>
              <Heading fontSize="3xl" color="#013442">
                Support
              </Heading>
              <Text>FAQ's</Text>
              <Text>Support Center</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* lower container */}
        <Flex justify="space-between" color="gray">
          <Text>@2021 Vaccination. All rights reserved</Text>
          <Flex gap="5">
            <Text>Terms & Agreements</Text>
            <Text>Privacy Policy</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
