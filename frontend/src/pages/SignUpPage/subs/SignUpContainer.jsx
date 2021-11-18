import { Box, Text, Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import React from "react"
import SignUpForm from "./SignUpForm";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import logo from "../../../assets/JengaBay.png"
import shopping from "../../../assets/shopping.gif"
import { useHistory } from 'react-router-dom';

const SignUpContainer = () => {
    const history = useHistory();
    return( 
        <Box>
            <Flex width="70vw" boxShadow="lg">
                <Box borderLeftRadius="10px" height="90vh" width="40%" background="#007ACC">
                    <VStack p={2} mx="auto" borderRadius="10px 10px 10px 10px" height="80vh"  background="#007ACC">
                        <Image mt={20} src={logo} _hover={{cursor:"pointer"}} onClick={() => history.push("/")}  alt="logo" /> 
                        <Image h="300px" src={shopping} alt="logo" />
                        <Text color="#ffffff" fontSize="2em">Hello There!</Text>
                        <Button variant="link" _hover={{cursor:"pointer"}} onClick={() => history.push("/registration")} fontWeight="bold" color="#0BC5EA" fontSize='xs'>Register as a seller instead?</Button>  
                    </VStack>
                </Box>
                <Box height="90vh" width="70%" bg="#ffffff" borderRightRadius="10px">
                    <SignUpForm alignSelf="center"/>
                </Box>
            </Flex>
        </Box>
 
    )
}
export default SignUpContainer;