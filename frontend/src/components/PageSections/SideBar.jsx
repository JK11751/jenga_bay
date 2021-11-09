import React from "react";
import logo from "../../assets/logo.png"
import { Box,HStack, VStack, Text, Divider, Flex } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { IconButton } from "@chakra-ui/button";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";

const SideBar = ({ isOpen, handleClick }) => {
  return (
    <Slide
      direction="left"
      in={isOpen}
      style={{ height: "100vh", width: "300px", zIndex: 100 }}
    >
      <VStack color="black" bg="#F5F5F5" h="100vh" w="250px">
        <VStack spacing="10px" p={5} width="100%" color="white">
        <HStack spacing="50px">
        <Flex flexShrink={0}>
            <Link to="/"><Image src={logo}/></Link>
        </Flex>
          <IconButton
            w="20px"
            alignSelf="flex-end"
            aria-label="Close Control Panel"
            icon={<IoMdClose />}
            onClick={handleClick}
            color="black"
          /></HStack>
          <Divider colorScheme="black" size="100%" orientation="horizontal" />
        </VStack>
        <Box p={5}  m="5px">
          <Text>Home</Text>
        </Box>
        {/* Insert other contents */}
      </VStack>
    </Slide>
  );
};
export default SideBar;
