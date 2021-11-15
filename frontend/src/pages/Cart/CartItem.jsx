import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import {MdDelete} from "react-icons/md"
import Icon from '@chakra-ui/icon'
import { Button } from '@chakra-ui/button'



export const CartItem = (props) => {
    console.log(props.key)

    const mystyle = {
        fontFamily:"monospace"
    }    
    
    function NumberStepper({quantity, add, remove}) {
          
        return (
          <HStack maxW="320px">
            <Button onClick={add}>+</Button>
            <span className="btn btn-info">{quantity}</span>
            <Button onClick={remove}>-</Button>
          </HStack>
        )
    }  

    return (
        <Box borderRadius="10px" width="80%" shadow="lg">
            <HStack p={4} spacing="5vw">
                <HStack>
                    <Image objectFit="cover" borderRadius="10px" width="70px" height="70px" src={props.image} alt="product"/>
                    <VStack alignItems="left" spacing="2px">
                        <Text {...mystyle}>{props.name}</Text>
                        <Text {...mystyle}>{props.unit}</Text>
                    </VStack>
                </HStack>    
                <VStack alignItems="center" spacing="10px" p={5}>
                    <Text {...mystyle}>Item Price: {props.price}</Text>    
                </VStack>
                <VStack alignItems="center" spacing="10px" p={5}>
                    <NumberStepper add={() => props.handleAddProduct(props.item)} remove={() => props.handleRemoveProduct(props.item)} quantity ={props.quantity} />
                </VStack>
                <VStack alignItems="center" spacing="10px" p={5}>
                   <Text>{props.quantity} * {props.price} </Text>
                </VStack>
                <Icon _hover={{cursor:"pointer"}} onClick={() => props.handleRemoveProduct(props.item)} as={MdDelete}/>
            </HStack>     
        </Box>
    )
}
