import { Box, Text, Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import React from "react"
import SignUpForm from "./SignUpForm";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import logo from "../../../assets/logo.png"

const SignUp = () => {
    return( 
        <Box ml="15vw" mt="40px">
            <Flex width="70vw" boxShadow="lg">
                <Box borderRadius="10px 0px 0px 10px" height="80vh" width="40%" background="#007ACC">
                    <Image ml={5} mt={5} src={logo} alt="logo" />
                    <Box mt="150px">   
                        <VStack spacing="2px" top="20px"> 
                            <Text color="#ffffff" fontSize="5xl">Hello There</Text>
                            <Text color="#ffffff" fontSize="md">Enter your details and start your </Text>
                            <Text color="#ffffff" fontSize="md">journey shopping for construction </Text>
                            <Text color="#ffffff" fontSize="md" pb={5}>and building materials with us</Text>
                            <Button variant="link" color="#ffffff" fontSize="xs">Register as a seller instead?</Button>    
                        </VStack>
                    </Box>
                </Box>
                <Box height="80vh" width="70%" bg="#ffffff" borderRadius="0px 10px 10px 0px">
                    <SignUpForm alignSelf="center"/>
                </Box>
            </Flex>
        </Box>
 
    )
}
export default SignUp;