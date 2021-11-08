import { Box, Flex, VStack, Text, HStack } from "@chakra-ui/layout";
// import { Image } from "@chakra-ui/image";
import img from "../../assets/product.jpg"
import ImageCarousel from "../../components/Products/ImageCarousel";
import React from "react"
import NavBar from "../../components/shared/NavBar";
import ItemDescription from "../../components/Products/ItemDescription";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import {MdOutlineAddBox} from "react-icons/md"
import {FiMinusSquare} from "react-icons/fi"
import { Input } from "@chakra-ui/input";
import { Avatar } from "@chakra-ui/avatar";
 

const ProductPage = ()=> {
    return(
        <Box>
            <NavBar />
            <Flex p={10} flexDir="row">
                <Flex flexShrink={0} p={1}>
                    <ImageCarousel />
                </Flex>
                <VStack alignItems="left" mt={5} p={10}>
                    <HStack>
                        <Avatar size="sm" name="Dan Abrahmov" src={img} />
                        <Text fontSize="20px">COMPANY NAME</Text>
                    </HStack>
                    
                    <Text fontSize="40px">THIS IS THE ITEM NAME. THIS IS THE ITEM NAME</Text>
                    <Text fontSize="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce a neque orci. Vivamus nisl tortor, sollicitudin in augue vitae, dictum 
                    imperdiet orci. Vestibulum ut ligula nulla. Nam id tortor vel risus dapibus viverra</Text>
                    <Text  fontSize="20" color="red" textAlign="left">Price: $20.00</Text>
                   <HStack> 
                        <HStack>
                            <Icon h={9} w={9} as={MdOutlineAddBox}/>
                            <Input placeholder="1" textAlign="center" width="100px" size="sm"/>
                            <Icon h={9} w={9} as={FiMinusSquare}/>
                        </HStack>
                        <Button width="100%" size="lg">Add to Cart</Button>
                    </HStack>
                </VStack>
            </Flex>
            <ItemDescription />
        </Box>
        
    )
}

export default ProductPage;