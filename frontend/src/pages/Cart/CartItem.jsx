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
            <Button variant="unstyled" onClick={add}>+</Button>
            <span width="50px">{quantity}</span>
            <Button variant="unstyled" onClick={remove}>-</Button>
          </HStack>
        )
    }  

    return (
        <Box borderRadius="10px" width="80%" shadow="lg">
            <HStack p={4} spacing="9vw">
                <VStack alignItems="left">
                    <Image objectFit="cover" borderRadius="5px" width="100px" height="100px" src={props.image} alt="product"/>
                    <VStack alignItems="left" spacing="2px">
                        <Text fontWeight="bold" {...mystyle}>{props.name}</Text>
                        <Text {...mystyle}>{props.unit}</Text>
                    </VStack>
                </VStack>
                <Flex alignItems="center">    
                    <VStack mr={12} alignItems="center" spacing="10px" p={5}>
                        <Text {...mystyle}>{props.price}</Text>    
                    </VStack>
                    <VStack mr={12} alignItems="center" spacing="10px" p={5}>
                        <NumberStepper add={() => props.handleAddProduct(props.item)} remove={() => props.handleUpdateQuantity(props.item)} quantity ={props.quantity} />
                    </VStack>
                    <VStack mr={12} alignItems="center" spacing="10px" p={5}>
                        <Text>{props.quantity} * {props.price} </Text>
                    </VStack>
                    <Icon _hover={{cursor:"pointer"}} onClick={() => props.handleRemoveProduct(props.item)} as={MdDelete}/>
                </Flex>    
            </HStack>     
        </Box>
    )
}
