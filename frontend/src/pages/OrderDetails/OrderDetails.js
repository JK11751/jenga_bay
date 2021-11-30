import React, { useEffect } from 'react'
import NavBar from '../../components/PageSections/NavBar'
import Footer from '../../components/PageSections/Footer'
import { Box, Text, Divider, Flex, VStack, HStack, SimpleGrid, Circle } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import product from "../../assets/product.jpg"
import { Tag } from '@chakra-ui/tag'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetOrderDetails } from '../../redux/appActions/orderActions'
import moment from "moment"

export const OrderDetails = () => {
    const dispatch = useDispatch()
    const {orderId} =  useParams()

    const orderReducer = useSelector(({ orderReducer }) => orderReducer);

    // getting the search parameter from the url
    const query = new URLSearchParams(window.location.search);
    const seller_id = query.get('seller')

    useEffect(() => {
       dispatch(handleGetOrderDetails(seller_id,orderId))
    }, [dispatch, orderId, seller_id])

    return (
       <>
       <NavBar />
       {orderReducer.orderDetails.map((order) => {
           return(
        <Box h="100%">
            <VStack p={10} alignItems="left">
                <VStack width="100%" p={2} alignItems="left">
                    <HStack>
                        <Text fontSize="1.5em" fontWeight="bold">Order </Text>
                        <Text fontSize="1.5em">#{order.id}</Text>
                        <Tag colorScheme="whatsapp">Paid</Tag>
                        <Tag colorScheme="red">not delivered</Tag>
                    </HStack>
                    <Text color="#C4C4C4"> {moment (order.payment_transaction.date_placed).format('MMMM Do YYYY [at] h:mm:ss a')}</Text>
                </VStack>
                <HStack>
                <Flex p={4} height="auto" bg="#E9F6FF" borderRadius="10px" width="65vw" flexWrap="wrap" >
                    <Flex flexDir="column">
                        <Flex p={2}>
                            <Text p={2} fontWeight="bold">Customer's Cart</Text>   
                        </Flex>
                        <Divider width="63vw" />
                        <Text p={4} fontWeight="bold">{orderReducer.orderDetails.length} ordered items</Text>
                        <Divider width="63vw" mb={2} />
                        { order.ordered_items.map((item, index) => {
                            return(
                                <Flex key={index} mb={5} justifyContent="space-between" w="100%" h="5vw" bg="white" shadow="lg" rounded="lg" p={5} flexDir="row" alignItems="center">
                                    <Avatar src={product}/>
                                    <Text>{item}</Text>
                                    <Text>Name of the product</Text>
                                    <Text>Price</Text>
                                    <Text>Quantity</Text>
                                    <Text>Total item amount</Text>
                                </Flex>
                            )})
                        }
                        </Flex>                         
                </Flex>
                <Box ml={5} w="xs" alignSelf="auto" h="inherit" bg="white" shadow="lg" rounded="lg">
                    <Text p={4} fontWeight="bold">Customer details</Text>
                    <Divider width="inherit" /> 
                    <HStack p={5}> 
                        <Avatar size="lg" src={product}/>
                        <VStack spacing="1px" alignItems="left"> 
                            <Text fontFamily="sans-serif">John Doe</Text>
                            <Text fontFamily="sans-serif" color="#c4c4c4">customer@gmail.com</Text>
                        </VStack>
                    </HStack>
                    <Text p={4} fontWeight="bold">Customer Order Note</Text>
                    <Divider width="inherit" />
                    <Text p={5}>Lorem Ipsum</Text>
                </Box>
            </HStack>
                <SimpleGrid columns={2} spacing="2vw">
                    <Box h="45vh" bg="white" shadow="lg" rounded="lg" p={5}>
                        <Text p={4} fontWeight="bold">Order Summary</Text>
                        <Divider width="100%" /> 
                        <VStack alignItems="left" p={7} spacing={5}> 
                            <Text fontFamily="sans-serif" textTransform="capitalize">Total Amount Payable: KSH.{order.total_amount_payable}</Text>
                            <Text fontFamily="sans-serif" textTransform="capitalize">Discount: KSH. 0</Text>
                            <Text fontFamily="sans-serif" textTransform="capitalize">VAT: KSH.{0.16 * order.total_amount_payable}</Text>
                        </VStack>    
                        <Divider mb="5" width="100%" />
                        <Text px={5} textTransform="capitalize">SubTotal: KSH. {order.payment_transaction.amount}</Text>
                    </Box>
                    <Box ml={5} h="45vh" bg="white" shadow="lg" rounded="lg" p={5}>
                        <Text p={4} fontWeight="bold">Activity</Text>
                        <Divider width="inherit" /> 
                        <VStack p={7} alignItems="left">
                            <HStack alignItems="center">
                                <Circle size="10px" bg="#555"></Circle> 
                                <Text ml={2} fontWeight="medium" textAlign="center">{moment(order.payment_transaction.date_placed).format('MMMM Do YYYY')}</Text>
                            </HStack>
                            <HStack spacing="2vw">
                                <Divider ml={1} borderLeftWidth="3px" height="7vh" borderColor="#c4c4c4" orientation='vertical' />
                                <Text>{moment(order.payment_transaction.date_placed).format("h:mm a")}    Order was made by Customer</Text>
                            </HStack>
                        </VStack> 
                    </Box>
                </SimpleGrid>   
            </VStack>
        </Box>
        )})}
         <Footer />
       </>
    )
}
