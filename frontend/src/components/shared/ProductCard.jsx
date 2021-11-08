import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";
import { getDetails } from "../../redux/actions/appActions";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
// import img from "../../assets/product.jpg"

const ProductCard = (props)=>{
    const dispatch = useDispatch()
    return(
        <Box _hover={{ boxShadow: "lg",bg:"#18A0FB" }} _focus={{ boxShadow: "outline" }} borderRadius="5px" ml={10} mb={5} height="300px" width="200px" backgroundColor="#007ACC">
            <Flex flexDir="column">
                <Image borderRadius="5px" height="200px" width="100%" src={props.photo} alt="This is a product"/>
                <VStack alignItems="flex-start" p="5px">
                    <HStack>
                        <Avatar size="sm" src={props.company_image}/>
                        <Text color="#ffffff" fontWeight="501px">seller: {props.description}</Text>
                    </HStack>
                    {/* <Text fontSize="10px" color="#ffffff">category {props.category}</Text>
                    <Text fontSize="10px" color="#ffffff">Name: {props.name}</Text> */}
                    <Button onClick={()=> dispatch(getDetails(props.id))}><Link to={{pathname:`/product/${props.id}`}}>View more</Link></Button>
                </VStack>
            </Flex>
        </Box>
    )
}

export default ProductCard;