"use client";

import { Heading, Flex, VStack } from "@chakra-ui/react";

import { SmallCard } from "@/components/SmallCard";

export default function Fields() {
  const items: string[][] = [
    ["Physics Element 1"],
    ["Physics Element 2"],
    ["Physics Element 3"],
    ["Physics Element 4"],
  ];

  const heading = "Physics";

  return (
    <Flex justify={"center"} flexDir={"column"}>
      <Heading
        fontSize={"4xl"}
        textAlign={"center"}
        marginTop={10}
        marginBottom={10}
      >
        {heading}
      </Heading>
      <Flex
        py={6}
        wrap={"wrap"}
        justify={"center"}
        marginTop={50}
        marginBottom={100}
      >
        <Flex py={6} wrap={"wrap"} justify={"center"} maxW={1200}>
          <VStack>
            {items.map((title) => (
              <SmallCard title={title[0]} link={title[1]} />
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}