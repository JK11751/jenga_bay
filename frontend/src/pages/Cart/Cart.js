import React from 'react'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/layout'
import NavBar from '../../components/PageSections/NavBar'
import { CartItem } from './CartItem'
import { Icon } from '@chakra-ui/icon'
import { BsArrowLeftShort, BsArrowDown } from 'react-icons/bs'
// import { Textarea } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const style ={
    color:"#C4C4C4",
    fontSize:"10px",
    fontFamily:"monospace",
}

const otherStyles = {
    color:"#C4C4C4",
    fontSize:"15px",
    fontFamily:"monospace"
}

export const Cart = () => {
    return (
        <Box>
           <NavBar /> 
           <Box p={5} width="100%" position="absolute" left={0}>
                <Box
                    p={2}
                    as="button"
                    variant="link"
                    alignSelf="flex-start"
                    fontFamily="sans-serif"
                    fontSize="15px"
                    color="#555"
                    mb={3}
                >
                    <Icon as={BsArrowLeftShort}/> 
                    Continue Shopping
                </Box>
                <Divider width="60vw" borderColor="gray.400" />
                <VStack mt={5} mb={10} alignItems="left">
                    <Text fontSize="30px" fontFamily="sans-serif">Shopping Cart</Text>
                    <HStack spacing="40vw">
                        <Text>You have 1 item in your cart</Text>
                        <Text>Sort by: price <Icon as={BsArrowDown}/></Text>
                    </HStack>
                </VStack>
                <Box width="80%">
                    <CartItem />
                </Box>    
                <Box p={5}>
                    <Text>Add a note</Text>
                    <Input mt={2} height="37px" borderRadius="50px" width="300px" size="sm" placeholder="ädd a note"></Input>
                </Box>
           </Box>
           <Box height="100vh" width="35%" bg="#E9F6FF" position="absolute" right={0}>
                <VStack p={5}>
                    <Divider width="200px" mb={10} borderWidth="2px" borderColor="black"  />
                    <Text {...otherStyles}>TOTAL CART AMOUNT:Ksh.20000.00</Text>
                    <Text mb={10} {...style}>Shipping and taxes calculated at checkout</Text>
                    <Text mb={5} {...style}>I agree to Terms & Conditions</Text>
                    <Button size="lg" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">CHECKOUT</Button>
                </VStack>   
           </Box>
        </Box>
    )
}

