import { Box, Text, Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import React from "react"
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import logo from "../../../assets/JengaBay.png"
import shopping from "../../../assets/shopping.gif"
import SignInForm from "./SignInForm";
import { useHistory } from "react-router";

const SignInContainer = (props) => {
    const history= useHistory()

    return(  
        <Flex my="auto" width="70vw" boxShadow="lg">
            <Box height="80vh" width="70%" bg="#ffffff" borderRadius="10px 0px 0px 10px">
                <SignInForm location={props.location} {...props}/>
            </Box>
            <VStack p={2} mx="auto" borderRadius="0px 10px 10px 0px" height="80vh" width="40%" background="#007ACC">
                <Image mt={10} src={logo} _hover={{cursor:"pointer"}} onClick={() => history.push("/")} alt="logo" /> 
                <Image h="300px" src={shopping} alt="logo" />
                <Text color="#ffffff"  fontSize="2em">Welcome Back!</Text>
                <Button variant="link" _hover={{cursor:"pointer"}} onClick={() => history.push("/registration")} fontWeight="bold" color="#0BC5EA" fontSize='xs'>Register as a seller instead?</Button>  
            </VStack>   
        </Flex>
    )
}
export default SignInContainer;