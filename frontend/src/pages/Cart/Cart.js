import React from 'react'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/layout'
import NavBar from '../../components/PageSections/NavBar'
import { Icon } from '@chakra-ui/icon'
import { BsArrowLeftShort, BsArrowDown } from 'react-icons/bs'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { CartItem } from './CartItem'

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

export const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, clearCart}) => {

    const TotalPrice = cartItems.reduce((price, item) => price + item.quantity * item.item_price, 0)
    const getItemTotal = ()=> {
        let cartItemTotal = cartItems.reduce(
            (cartItem) => {
              const { price, quantity } = cartItem;
              const itemTotal = price * quantity;
    
            return itemTotal;
        });
        return cartItemTotal
    }  
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
                >
                    <Icon as={BsArrowLeftShort}/> 
                    Continue Shopping
                </Box>
                <Divider width="60vw" borderColor="gray.400" />
                <VStack mt={5} mb={10} alignItems="left">
                    <Text fontSize="30px" fontFamily="sans-serif">Shopping Cart</Text>
                    <HStack spacing="40vw">
                        <Text>You have {cartItems.length} item in your cart</Text>
                        <Text>Sort by: price <Icon as={BsArrowDown}/></Text>
                    </HStack>
                </VStack>
                <Box width="80%">
                    {cartItems.length === 0 && (<Text> There are no items in the cart</Text>)}
                    {cartItems.map((item) => (
                        <CartItem total={() => getItemTotal()} name={item.item_name} unit={item.item_measurement_unit} image={item.item_main_image} price={item.item_price} quantity={item.quantity} item={item} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>   
                    ))}
                </Box>    
               {cartItems.length !== 0 && ( <Box p={5}>
                    <Text>Add a note</Text>
                    <Input mt={2} height="37px" borderRadius="50px" width="300px" size="sm" placeholder="ädd a note"></Input>
                    <Button onClick={()=> clearCart()} size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">Clear Cart</Button>
                </Box>)}
           </Box>
           <Box height="100vh" width="35%" bg="#E9F6FF" position="absolute" right={0}>
                <VStack p={5}>
                    <Divider width="200px" mb={10} borderWidth="2px" borderColor="black"  />
                    <Text {...otherStyles}>TOTAL CART AMOUNT:{TotalPrice}</Text>
                    <Text mb={10} {...style}>Shipping and taxes calculated at checkout</Text>
                    <Text mb={5} {...style}>I agree to Terms & Conditions</Text>
                    <Button size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">CHECKOUT</Button>
                </VStack>   
           </Box>
        </Box>
    )
}



