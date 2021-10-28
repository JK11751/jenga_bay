import React from "react"
import { Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/logo.png"
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <Flex height="50px" pl={10} pr={10} alignItems="center" background="#007ACC">
            <Link to="/"><Image src={icon}/></Link>
            <Spacer/>
            <HStack spacing="100px">
                <Text textColor="#ffffff">Features</Text>
                <Text textColor="#ffffff">Pricing</Text>
                <Text textColor="#ffffff">Community</Text>
                <Text textColor="#ffffff">Support</Text>
            </HStack>
            <Spacer/>
            <HStack spacing="10px">
                <Link to="/sign-up"><Button h="30px" alignItems="center" fontWeight="500" fontSize="13px" w="130px" textColor="#18A0FB" background="#ffffff" variant="outline">Sign Up</Button></Link>
                <Button h="30px" w="130px" alignItems="center" fontWeight="500" fontSize="13px" textColor="#ffffff" colorScheme="#18A0FB" background="#18A0FB" variant="solid">Login</Button>
            </HStack> 
        </Flex>
        
    )
}

export default NavBar;