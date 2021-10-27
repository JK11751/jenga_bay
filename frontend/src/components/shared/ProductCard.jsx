import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import img from "../../assets/product.jpg"

const ProductCard = (props)=>{
    return(
        <Box borderRadius={5} ml={10} mb={5} height="300px" width="200px" backgroundColor="#18A0FB">
            <Flex flexDir="column">
                <Image height="200px" width="100%" src={img} alt="This is a product"/>
                <VStack>
                    <Text>Name:{props.name}</Text>
                    <Text>id:{props.id}</Text>
                    <Text>description:{props.description}</Text>
                </VStack>
            </Flex>
        </Box>
    )
}

export default ProductCard;