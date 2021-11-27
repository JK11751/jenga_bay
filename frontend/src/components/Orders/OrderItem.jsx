import React from 'react'
import { chakra, Box, Flex, useColorModeValue, Button, Spacer,Avatar, Center, HStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { handleAddToCancelled, handleRemoveFromCancelled } from '../../redux/appActions/orderActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const OrderItem = (props) => {

  const history = useHistory()
    const dispatch = useDispatch()
    return (
        <Flex
        mt={5}
        // maxW="md"
        // mx="auto"
        width="100%"
        h="180px"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        alignItems="center"
      >
        <Box w={1/4}>
            <Center >
              <Avatar borderWidth="2px" size="2xl" borderRadius="500px" borderColor="#0095F8" objectFit="cover" src={props.sellerProfilePic}/>
            </Center>
        </Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
        <Flex alignItems="baseline">
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
            onClick={() => history.push({pathname:`/orders/order-details/${props.id}`, search:`?seller=${props.seller_id}`})}
            _hover ={{cursor:"pointer", color:"#007acc"}}
          >
            Order #{props.order.id}
          </chakra.h1>
          <Spacer/>
          <HStack>
            <Button _hover={{cursor:"pointer"}} onClick={() => dispatch(handleAddToCancelled(props.order))}  leftIcon={<DeleteIcon/>}>Cancel Order</Button>
            <Button _hover={{cursor:"pointer"}} onClick={() => dispatch(handleRemoveFromCancelled(props.order))}  rightIcon={<DeleteIcon/>}>Undo Cancel Order</Button>
          </HStack>
          </Flex>
          {/* <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              3 beds &bull; 4 baths
            </Box>
          </Box> */}

          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              
            >
              {props.order.ordered_items.length} ordered items
            </Box>
          </Box>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p>
          <Spacer/>
          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1 color="black" fontWeight="bold" fontSize="lg">
            KSH.  {props.order.total_amount_payable}
            </chakra.h1>
          </Flex>
        </Box>
      </Flex>
    )
}
