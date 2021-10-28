import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import img from "../../assets/product.jpg"

const ProductCard = (props)=>{
    return(
        <Box _hover={{ boxShadow: "lg",bg:"#18A0FB" }} _focus={{ boxShadow: "outline" }} borderRadius="5px" ml={10} mb={5} height="300px" width="200px" backgroundColor="#007ACC">
            <Flex flexDir="column">
                <Image borderRadius="5px" height="200px" width="100%" src={img} alt="This is a product"/>
                <VStack alignItems="flex-start" p="5px">
                    <Text color="#ffffff">id: {props.id}</Text>
                    <Text color="#ffffff">Name: {props.name}</Text>
                    <Text color="#ffffff" fontWeight="501px">description: {props.description}</Text>
                </VStack>
            </Flex>
        </Box>
    )
}

export default ProductCard;