import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export function Preparation() {
  return (
    <Box mb="20" color="#013442">
      <Flex>
        {/* left container */}
        <Box boxSize="80%">
          <Image src="woman_doc.jpg" borderRightRadius="10" />
        </Box>

        {/* right container */}
        <Flex align="center" justify="center">
          <Flex direction="column" w="60%" gap="5">
            <Heading fontSize="4xl">Preparations Before Vaccine</Heading>
            <Text fontSize="md" color="gray">
              The success of vaccines is strongly influenced by the strength of
              the body's immune system. Therefore, there are several things that
              can be tried to make the COVID-19 vaccine work:
            </Text>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Avoid alcoholic beverages
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Refrain from consuming alcoholic drinks to promote better
                  health and overall well-being.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Avoid stress
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Stress has a profound effect on immune work. Moreover,
                  prolonged stress can increase cortisol production and
                  oxidative stress in the body.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Eat healthy food
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Eat healthy foodMaintain your well-being by consuming
                  nourishing and balanced meals regularly.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Get enough sleep
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Ensure your vitality by prioritizing sufficient and restful
                  sleep each night.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Exercise or physical activity
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Engage in regular exercise to enhance your physical fitness
                  and mental well-being.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
