import React, {useEffect} from 'react'
import { VStack, Text, HStack, Box, Divider, ListIcon, ListItem, List } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { MdCheckCircle } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import {
Stat,
StatNumber,
StatLabel,
} from "@chakra-ui/react";
import { Tag, TagLabel } from '@chakra-ui/tag';
import {IoIosArrowBack} from "react-icons/io"
import Rating from "../../../components/Products/Rating";
import { handleGetProductDetails } from '../../../redux/appActions/productActions';
import { handleAddToCart, handleBuyProductNow } from '../../../redux/appActions/cartActions';
import {useDispatch,useSelector} from "react-redux"
import {useParams} from "react-router";
import { useHistory } from 'react-router';

const data = {
  rating: 4.5,
  numReviews: 34,
};


function ProductDetails({handleAddProduct}) {
  let { productId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const productReducer = useSelector(({ productReducer }) => productReducer);

  console.log("ProductReducer", productReducer.productDetails)
  
  //getting product details
  useEffect(() => {
    dispatch(handleGetProductDetails(productId))
  }, [dispatch, productId])



  const [count, setCount] = React.useState(1)
  const [value, setValue] = React.useState(0)

  const handleDecrease = () => {
    if (count>=0){
    setCount(count - 1)
    setValue(count)
    }
  }

  const handleIncrease = () => {
    setCount(count + 1)
    setValue(count)
  }
  
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setCount(value)
  }

  return (
    <>
    {productReducer.productDetails.map((product)=> {
      return (
      <VStack mt={2} p={4} alignItems="left">
      <Box
        as="button"
        variant="link"
        alignSelf="flex-start"
        fontFamily="sans-serif"
        fontSize="15px"
        textTransform="uppercase"
        color="#555"
        onClick={() => history.push("/")}
        mb={2}
        alignItems="center"
      >
      <Icon as={IoIosArrowBack}/> Back to Home
      </Box>
      <Box
        as="button"
        variant="link"
        alignSelf="flex-start"
        fontFamily="sans-serif"
        fontSize="15px"
        textTransform="uppercase"
        color="#C4C4C4"
        onClick={() => history.push(`/categories/${product.category}`)}
      >
        {product.category}
      </Box>
      <Text fontFamily="sans-serif" fontSize="2em">
        {product.item_name}
      </Text>
        <Rating rating={data.rating} numReviews={data.numReviews} />
      <HStack>
        <Text _hover={{cursor:"pointer", color:"#077ACC", textDecoration:"ActiveBorder"}} onClick={() => history.push(`/seller/${product.item_seller.id}/profile`)} fontFamily="sans-serif" color="#555" fontSize="12px">
          Brand: {product.item_seller.business_name}
        </Text>
        <Text _hover={{cursor:"pointer", color:"#077ACC"}} onClick={() => history.push(`/sellers/${product.item_seller.id}/${product.item_seller.business_name}`)} fontFamily="sans-serif" color="#555" fontSize="12px">
          Visit Brand Store
        </Text>
      </HStack>
      <VStack alignItems="flex-start" spacing="10px">
        <Stat> 
          <StatNumber fontFamily="monospace" fontSize="20px">
            Ksh.{product.item_price}
          </StatNumber>
        </Stat>
        <Stat> 
          <StatLabel  fontFamily="sans-serif"
        fontSize="13px"
        textTransform="uppercase"
        color="#555">
          Size
          </StatLabel>
        </Stat>
        <Tag  colorScheme="cyan" size="lg">
        <TagLabel>{product.item_measurement_unit}</TagLabel>
        </Tag>
      </VStack>
      <Box mt={5} mb={20}>
        <Divider mt={5} mb={5} borderColor="#C4C4C4" orientation="horizontal" />
      </Box>  
      <Box mt={30}>
        <Stat> 
          <StatLabel fontFamily="monospace" fontSize="14px">
           Quantity
          </StatLabel>
        </Stat> 
      <InputGroup>
        <InputLeftAddon onClick={handleDecrease} backgroundColor="transparent">
          <Icon as={FiMinus} />
        </InputLeftAddon>

        <Input onChange={e => handleOnChange(e)} value={value} borderRightColor="transparent" borderLeftColor="transparent" placeholder="1" textAlign="center" width="40px" />
        <InputRightAddon onClick={handleIncrease} backgroundColor="transparent">
          <Icon as={MdAdd} />
        </InputRightAddon>
      </InputGroup></Box>

      <HStack mb={10} mt={10}>
        <Button
          fontFamily="sans-serif"
          borderRadius="50px"
          textColor="white"
          backgroundColor="#1D1C1C"
          width="200px"
          height="38px"
          onClick={() => { dispatch(handleBuyProductNow(product, count)); history.push("/checkout")}}
        >
          Buy Now
        </Button>
        <Button
          fontFamily="sans-serif"
          textColor="#FFA90A"
          borderRadius="50px"
          borderColor="#FFA90A"
          borderWidth="2px"
          backgroundColor="transparent"
          width="200px"
          height="38px"
          onClick={() => dispatch(handleAddToCart(product))}
        >
         Add to Cart 
        </Button>
      </HStack>
      <Box borderColor="#f3f3f3" borderWidth="1px" mt={10} borderRadius="10px">
        <Text p={3} fontSize='20px'>Product Description</Text>
        <Divider color="#000000"/>
        <Text p={2} fontFamily="sans-serif" fontSize="15px" lineHeight="25px">
          {product.item_description} 
        </Text>
      </Box>
      <Box borderColor="#f3f3f3" borderWidth="1px" mt={10} borderRadius="10px">
        <Text p={3} fontSize='20px'>Specifications</Text>
        <Divider color="#000000"/>
        <List p={2}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Units of measurement: {product.item_measurement_unit} 
          </ListItem>
          <ListItem> 
            <ListIcon as={MdCheckCircle} color="green.500" />
            Price: {product.item_price} 
          </ListItem>
          <ListItem> 
            <ListIcon as={MdCheckCircle} color="green.500" />
            Category: {product.category} 
          </ListItem>
          </List>
      </Box>
    </VStack>)})}
    </>
  )
}



export default ProductDetails