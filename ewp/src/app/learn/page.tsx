"use client";

import {
  Heading,
  Avatar,
  Box,
  Flex,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { RiApps2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5"
import { BsPencilFill } from "react-icons/bs"
import { FaMap } from "react-icons/fa"

export default function SocialProfileSimple() {
  return (
    <Flex gap={10} justifyContent={"center"} margin={200} flexWrap={"wrap"} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxW={"320px"}
        minW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems="center"
        padding={20}
        gap={10}
      >
        <Icon display="flex" justifyContent="center"
        as={RiApps2Fill} boxSize={20} />

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Applications
        </Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxW={"320px"}
        minW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems="center"
        padding={20}
        gap={10}
      >
        <Icon display="flex" justifyContent="center"
        as={IoBookSharp} boxSize={20} />

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Topics
        </Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxW={"320px"}
        minW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems="center"
        padding={20}
        gap={10}
      >
        <Icon display="flex" justifyContent="center"
        as={BsPencilFill} boxSize={20} />

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Exercises
        </Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxW={"320px"}
        minW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems="center"
        padding={20}
        gap={10}
      >
        <Icon display="flex" justifyContent="center"
        as={FaMap} boxSize={20} />

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Map
        </Heading>
      </Box>

    </Flex>
  );
}
