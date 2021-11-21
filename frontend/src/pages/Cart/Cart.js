import React from 'react'
import { Box, Divider, HStack, Text, VStack, Flex, Center } from '@chakra-ui/layout'
import NavBar from '../../components/PageSections/NavBar'
import { Icon } from '@chakra-ui/icon'
import { BsArrowDown } from 'react-icons/bs'
import {IoIosArrowBack} from "react-icons/io"
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { handleRemoveFromCart, handleClearCart, handleUpdateQuantity } from '../../redux/actions/appActions'
import CartItem from './CartItem'

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
    const dispatch = useDispatch()
    const cart = useSelector(({ cartReducer }) => cartReducer);
    const history = useHistory()
    const TotalPrice = cart.cartItems.reduce((price, item) => price + item.quantity * item.item_price, 0)
    
    return (
        <Box maxH="100vh">
           <NavBar /> 
           <Flex height="auto">
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
                    overflowY="scroll"
                    onClick={() => history.push(`/`)}
                >
                    <Icon as={IoIosArrowBack}/> 
                    Continue Shopping
                </Box>
                <Divider width="60vw" borderColor="gray.400" />
                <VStack mt={5} mb={10} alignItems="left">
                    <Text fontSize="30px" fontFamily="sans-serif">Shopping Cart</Text>
                    <HStack spacing="37vw">
                        <Text>You have {cart.cartItems.length} item in your cart</Text>
                        <Text>Sort by: price <Icon as={BsArrowDown}/></Text>
                    </HStack>
                </VStack>
                {/* <HStack p={4} pl={10} spacing="8vw">
                    <Text fontWeight="bold" fontFamily="sans-serif">PRODUCT</Text>
                    <Text fontWeight="bold" fontFamily="sans-serif">PRICE</Text>
                    <Text fontWeight="bold" fontFamily="sans-serif">QUANTITY</Text>
                    <Text fontWeight="bold" fontFamily="sans-serif">ITEM TOTAL</Text>
                </HStack> */}
                <Box width="80%">
                    {cart.cartItems.length === 0 && (<Text> There are no items in the cart</Text>)}
                    {cart.cartItems.map((item) => (
                        <CartItem name={item.item_name} unit={item.item_measurement_unit} image={item.item_main_image} price={item.item_price} quantity={item.quantity} item={item} handleUpdateQuantity={handleUpdateQuantity} handleRemoveProduct={handleRemoveFromCart}/>    
                    ))}
                </Box>    
               {cart.cartItems.length !== 0 && ( <Box p={5}>
                    <Text>Add a note</Text>
                    <Input mt={2} height="37px" borderRadius="50px" width="300px" size="sm" placeholder="ädd a note"></Input>
                    <Button ml="31%" onClick={()=> dispatch(handleClearCart())} size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">Clear Cart</Button>
                </Box>)}
           </Box>
           <Box height="100vh" position="absolute" width="35%" bg="#E9F6FF"  right={0}>
           <Box
                w="sm"
                mx="auto"
                mt={10}
                bg={useColorModeValue("white", "gray.800")}
                shadow="lg"
                rounded="lg"
                p={5}
                overflow="hidden"
            >
                <Center>
                <VStack>
                <Text fontWeight="bold" fontFamily="sans-serif">ORDER SUMMARY</Text>
                <Divider width="xs" mb={10} borderWidth="2px" borderColor="black"  />
                <Text {...otherStyles}>ITEMS IN CART: {cart.cartItems.length}</Text>
                <Text {...otherStyles}>ESTIMATED DELIVERY FEE: KSH.0</Text>
                <Text {...otherStyles}>DISCOUNT</Text>
                <Text {...otherStyles}>TOTAL CART AMOUNT:      {TotalPrice}</Text>
                <Button onClick={() => history.push("/checkout")} size="md" fontWeight="normal" fontFamily="sans-serif" color="white" bg="#555" borderRadius="50px">CHECKOUT NOW</Button>
                </VStack>
                </Center>
            </Box>
                <VStack spacing ="30px" p={5}>
                   
                    <VStack>
                       
                        <Text mb={10} {...style}>Shipping and taxes calculated at checkout</Text>
                    </VStack>
                    <HStack>
                        <input type="checkbox"></input>
                        <Text mb={5} {...style}>I agree to Terms & Conditions</Text>
                    </HStack>
                    
                </VStack>   
           </Box>
           </Flex>
        </Box>
    )
}



