import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
//import logo from "../../../assets/logo.png";
import RegistrationForm from "./RegistrationForm";

const LeftBar=()=> {
  return (
    <Box >
      <Flex width="70vw">
        <Box
          height="100vh"
          width="25%"
          background="#007ACC"
        >
          <Image ml={5} mt={5} src="/assets/logo.png" alt="logo" />
        </Box>
        <Box height="100vh" width="70%" bg="#ffffff" >
                    <RegistrationForm alignSelf="center"/>
            </Box>
      </Flex>
    </Box>
  );
}
export default LeftBar;
