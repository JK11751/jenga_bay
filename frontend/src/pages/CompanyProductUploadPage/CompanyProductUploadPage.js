import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import UploadForm from "./UploadForm";
import logo from "../../assets/logo.png"
const CompanyProductUploadPage=()=> {
  return (
    <Box >
      <Flex width="70vw">
        <Box
          height="100vh"
          width="25%"
          background="#007ACC"
        >
          <Image ml={5} mt={5} src={logo} alt="logo" />
        </Box>
        <Box height="100vh" width="70%" bg="#ffffff" >
                    <UploadForm alignSelf="center"/>
            </Box>
      </Flex>
    </Box>
  );
}
export default CompanyProductUploadPage;
