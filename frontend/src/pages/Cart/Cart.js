import React from 'react'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/layout'
import NavBar from '../../components/PageSections/NavBar'
import { Icon } from '@chakra-ui/icon'
import { BsArrowDown } from 'react-icons/bs'
import {IoIosArrowBack} from "react-icons/io"
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { CartItem } from './CartItem'
import {
    Table,
    Thead,
    Tr,
    Th,
} from "@chakra-ui/react"
import { useHistory } from 'react-router'

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

export const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleUpdateQuantity, clearCart}) => {

    const history = useHistory()
    const TotalPrice = cartItems.reduce((price, item) => price + item.quantity * item.item_price, 0)
    
    return (
        <Box>
           <NavBar cartItems={cartItems} /> 
           <Box p={10} width="100%" position="absolute" left={0}>
                <Box
                    p={2}
                    as="button"
                    variant="link"
                    alignSelf="flex-start"
                    fontFamily="sans-serif"
                    fontSize="15px"
                    color="#555"
                    mb={3}
                    onClick={() => history.push(`/`)}
                >
                    <Icon as={IoIosArrowBack}/> 
                    Continue Shopping
                </Box>
                <Divider width="60vw" borderColor="gray.400" />
                <VStack mt={5} mb={10} alignItems="left">
                    <Text fontSize="30px" fontFamily="sans-serif">Shopping Cart</Text>
                    <HStack spacing="37vw">
                        <Text>You have {cartItems.length} item in your cart</Text>
                        <Text>Sort by: price <Icon as={BsArrowDown}/></Text>
                    </HStack>
                </VStack>
                <Table width="60%" variant="simple">
                    <Thead>
                        <Tr>
                        <Th mr="2px">PRODUCT</Th>
                        <Th>PRICE</Th>
                        <Th>QUANTITY</Th>
                        <Th>ITEM TOTAL</Th>
                        </Tr>
                    </Thead>
                </Table>
                <Box width="80%">
                    {cartItems.length === 0 && (<Text> There are no items in the cart</Text>)}
                    {cartItems.map((item) => (
                        <CartItem name={item.item_name} unit={item.item_measurement_unit} image={item.item_main_image} price={item.item_price} quantity={item.quantity} item={item} handleUpdateQuantity={handleUpdateQuantity} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>   
                    ))}
                </Box>    
               {cartItems.length !== 0 && ( <Box p={5}>
                    <Text>Add a note</Text>
                    <Input mt={2} height="37px" borderRadius="50px" width="300px" size="sm" placeholder="ädd a note"></Input>
                    <Button ml="31%" onClick={()=> clearCart()} size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">Clear Cart</Button>
                </Box>)}
           </Box>
           <Box height="100vh" width="35%" bg="#E9F6FF" position="absolute" right={0}>
                <VStack spacing ="30px" p={5}>
                    <Divider width="200px" mb={10} borderWidth="2px" borderColor="black"  />
                    <VStack>
                        <Text {...otherStyles}>TOTAL CART AMOUNT:{TotalPrice}</Text>
                        <Text mb={10} {...style}>Shipping and taxes calculated at checkout</Text>
                    </VStack>
                    <HStack>
                        <input type="checkbox"></input>
                        <Text mb={5} {...style}>I agree to Terms & Conditions</Text>
                    </HStack>
                    <Button size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">CHECKOUT</Button>
                </VStack>   
           </Box>
        </Box>
    )
}



