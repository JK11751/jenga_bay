import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import {MdDelete} from "react-icons/md"
import Icon from '@chakra-ui/icon'
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/react'



export const CartItem = (props) => {
    console.log(props.key)

    const mystyle = {
        fontFamily:"monospace"
    }    
    
    function NumberStepper({quantity, add, remove}) {
          
        return (
          <HStack maxW="320px">
            <Button variant="unstyled" onClick={remove}>-</Button>
            <span width="50px">{quantity}</span>
            <Button variant="unstyled" onClick={add}>+</Button>
          </HStack>
        )
    }  

    return (
        <Box borderRadius="10px" width="80%" shadow="lg">

            <HStack flexGrow={0} p={4} spacing="9vw">
                <Flex flexShrink={0} alignItems="left">
                    <Image objectFit="cover" borderRadius="5px" width="100px" height="100px" src={props.image} alt="product"/>
                </Flex>
                <Text {...mystyle}>{props.price}</Text>    
                <NumberStepper add={() => props.handleAddProduct(props.item)} remove={() => props.handleUpdateQuantity(props.item)} quantity ={props.quantity} />
                <Text>{props.quantity} * {props.price} </Text>
                <Icon _hover={{cursor:"pointer"}} onClick={() => props.handleRemoveProduct(props.item)} as={MdDelete}/>   
            </HStack>  
            <VStack alignSelf="left" pl={4} pb={2} alignItems="left" spacing="2px">
                    <Text fontWeight="bold" text {...mystyle}>{props.name}</Text>
                    <Text {...mystyle}>{props.unit}</Text>
            </VStack>
 
        </Box>
    )
}
