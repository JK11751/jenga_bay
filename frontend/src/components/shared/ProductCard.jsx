import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";
// import { getDetails } from "../../redux/actions/appActions";
// import { useDispatch } from "react-redux";
// import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
// import img from "../../assets/product.jpg"

const ProductCard = (props)=>{
    // const dispatch = useDispatch()
    return(
        
        <Link to={{pathname:`/product/${props.id}`}}>
        <Box _hover={{ boxShadow: "lg",bg:"#18A0FB" }} _focus={{ boxShadow: "outline" }} borderRadius="5px" ml={10} mb={5} height="300px" width="200px" backgroundColor="#007ACC">
            <Flex flexDir="column">
                <Image borderRadius="5px" height="200px" width="100%" src={props.photo} alt="This is a product"/>
                <VStack alignItems="center" p="5px">
                    <HStack>
                        <Avatar size="sm" src={props.company_image}/>
                        <Text color="#ffffff" fontWeight="501px">{props.description}</Text>
                    </HStack>
                    <Text fontFamily="heading" fontSize="15px" color="#ffffff">{props.category}</Text>
                    <Text fontSize="15px" color="#ffffff">{props.name}</Text>
                    {/* <Button onClick={()=> dispatch(getDetails(props.id))}>>View more</Button> */}
                </VStack>
            </Flex>
        </Box></Link>
    )
}

export default ProductCard;