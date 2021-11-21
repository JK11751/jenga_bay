import React from "react";
import { chakra, Box, Flex, useColorModeValue, HStack, Icon, Spacer, Button, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { handleAddToCart, handleRemoveFromCart } from '../../redux/actions/appActions'


function NumberStepper({quantity, add, remove}) {
          
    return (
      <HStack >
        <Button variant="unstyled" onClick={remove}>-</Button>
        <Box as="span" height="30px" borderRadius="5px" textAlign="center" borderWidth="1px" borderColor="#c4c4c4" width="50px">{quantity}</Box> 
        <Button variant="unstyled" onClick={add}>+</Button>
      </HStack>
    )
}  

const CartItem = (props) => {

    const dispatch = useDispatch()
  return (
      <Flex
        mt={5}
        // maxW="md"
        // mx="auto"
        width="80%"
        h="180px"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
        //   w={1 / 3}
        w="200px"
        //   h="100%"
          // bgSize="cover"
          // objectFit="cover"
        //  bgImage={props.image}
        ><Image objectFit="cover" h="100%" src={props.image}/></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
        <Flex alignItems="baseline">
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {props.name}
          </chakra.h1>
          <Spacer/>
          <Icon _hover={{cursor:"pointer"}} onClick={() => dispatch(handleRemoveFromCart(props.item))} as={DeleteIcon}/>
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
              ml="2"
            >
              &bull; SIZE &bull; {props.unit}
            </Box>
          </Box>

          {/* <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p> */}
          <Spacer/>
          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1 color="black" fontWeight="bold" fontSize="lg">
            Ksh. {props.price}
            </chakra.h1>
            <NumberStepper add={() => dispatch(handleAddToCart(props.item))} remove={() => dispatch(handleRemoveFromCart(props.item))} quantity ={props.quantity} />

            <chakra.h1
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Item Total: Ksh. {props.quantity * props.price}
            </chakra.h1>
          </Flex>
        </Box>
      </Flex>
  );
};

export default CartItem;