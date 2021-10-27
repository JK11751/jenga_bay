import React from "react"
import { Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/logo.png"
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <Flex height="50px" p={15} alignItems="center" background="#007ACC">
            <Link to="/"><Image src={icon}/></Link>
            <Spacer/>
            <HStack spacing="50px">
                <Text textColor="#ffffff">Features</Text>
                <Text textColor="#ffffff">Pricing</Text>
                <Text textColor="#ffffff">Community</Text>
                <Text textColor="#ffffff">Support</Text>
            </HStack>
            <Spacer/>
            <HStack spacing="10px">
                <Button h="30px" alignItems="center" fontWeight="500" fontSize="13px" w="130px" textColor="#ffffff" colorScheme="#007ACC" variant="outline">Sign Up</Button>
                <Button h="30px" w="130px" textColor="#ffffff" colorScheme="#18A0FB" background="#18A0FB" variant="solid">Login</Button>
            </HStack> 
        </Flex>
        
    )
}

export default NavBar;