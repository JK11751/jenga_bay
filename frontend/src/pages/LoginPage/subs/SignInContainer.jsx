import { Box, Text, Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import React from "react"
//import SignUpForm from "../../SignUp/subs/SignUpForm";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import logo from "../../../assets/logo.png"
import SignInForm from "./SignInForm";
const SignInContainer = () => {
    return(  
        <Box ml="15vw" mt="40px">
            <Flex width="70vw" boxShadow="lg">
            <Box height="80vh" width="70%" bg="#ffffff" borderRadius="10px 0px 0px 10px">
                    <SignInForm alignSelf="center"/>
            </Box>
                <Box borderRadius="0px 10px 10px 0px" height="80vh" width="40%" background="#007ACC">
                    <Image ml={5} mt={5} src={logo} alt="logo" />
                    <Box mt="150px">   
                        <VStack spacing="2px" top="20px"> 
                            <Text color="#ffffff" fontSize="5xl">Hello There</Text>
                            <Text color="#ffffff" fontSize="md">Welcome Back </Text>
                            <Text color="#ffffff" fontSize="md">Sign in with your correct credentials</Text>
                            <Text color="#ffffff" fontSize="md"> to continue enjoying our services </Text>
                            <Text color="#ffffff" fontSize="md">as you shop for construction </Text>
                            <Text color="#ffffff" fontSize="md" pb={5}>and building materials with us</Text>
                            <Button variant="link" color="#ffffff" fontSize="xs">Register as a seller instead?</Button>    
                        </VStack>
                    </Box>
                </Box>
                
            </Flex>
        </Box>
 
    )
}
export default SignInContainer;