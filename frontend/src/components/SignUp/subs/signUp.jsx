import { Box, Text, Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import React from "react"
import SignUpForm from "./SignUpForm";
// import NavBar from "../shared/NavBar";

const SignUp = () => {
    return( 
        <Box ml="220px" mt="50px">
            <Flex width="70vw" boxShadow="lg">
                <Box borderRadius="10px 0px 0px 10px" height="80vh" width="40%" background="#007ACC">
                    <Text>Jenga Bay</Text>
                    <Box mt="150px">   
                        <VStack spacing="2px" top="20px"> 
                            <Text color="#ffffff" fontSize="4xl">Hello There</Text>
                            <Text color="#ffffff" fontSize="sm">Enter your details and start your </Text>
                            <Text color="#ffffff" fontSize="sm">journey shopping for construction </Text>
                            <Text color="#ffffff" fontSize="sm" pb={5}>and building materials with us</Text>
                            <Text color="#ffffff" fontSize="xs">Register as a seller instead?</Text>    
                        </VStack>
                    </Box>
                </Box>
                <Box alignSelf="center" width="70%" bg="#ffffff" borderRadius="0px 10px 10px 0px">
                    <SignUpForm />
                </Box>
            </Flex>
        </Box>
 
    )
}
export default SignUp;