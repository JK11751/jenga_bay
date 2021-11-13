import React, {useEffect} from 'react'
import { Flex, VStack, Text, HStack, Box} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
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
} from "@chakra-ui/react";
import Rating from "../../../components/Products/Rating";
import { handleGetProductDetails } from '../../../redux/actions/appActions';
import {useDispatch,useSelector} from "react-redux"
import {useParams} from "react-router";

const data = {
  rating: 4.5,
};

const styling = {
  h: "30px",
  w: "30px",
};

export const ProductDetails = () => {
  let { productId } = useParams()
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.productReducer).productDetails;
  // const productReducer = useSelector(({ productReducer }) => productReducer);

  useEffect(() => {
  
    dispatch(handleGetProductDetails(productId))
  }, [productId,dispatch])

  const [count, setCount] = React.useState(0)
  const [value, setValue] = React.useState(0)

  const handleDecrease = () => {
    if (count>=0){
    setCount(count - 1)
    setValue(count.toString())
    }
  }

  const handleIncrease = () => {
    setCount(count + 1)
    setValue(count.toString())
  }
  
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setCount(value)
  }

  return (
      <VStack width="450px" alignItems="left" mt={4} ml={40}>
      <Box
        as="button"
        variant="link"
        alignSelf="flex-start"
        fontFamily="monospace"
        fontSize="20px"
      >
        {productData.item_seller}
      </Box>
      <Text fontFamily="monospace" fontSize="2em">
      {productData.item_name}
      </Text>
      <Flex>
        <Rating {...styling} rating={data.rating} />
        <Text ml={2}>34 reviews</Text>
      </Flex>
      <Box>
        <Stat>
          
          <StatNumber fontFamily="monospace" fontSize="20px">
            $20.00
          </StatNumber>
        </Stat>
      </Box>
      <Text fontFamily="sans-serif" fontSize="15px">
      {productData.item_description}
      </Text>
      <p>----------------------------------------------------------------</p>
    
      <InputGroup mt={20}>
        <InputLeftAddon onClick={handleDecrease} backgroundColor="transparent">
          <Icon as={FiMinus} />
        </InputLeftAddon>

        <Input onChange={e => handleOnChange(e)} value={value} borderRightColor="transparent" borderLeftColor="transparent" placeholder="1" textAlign="center" width="100px" />
        <InputRightAddon onClick={handleIncrease} backgroundColor="transparent">
          <Icon as={MdAdd} />
        </InputRightAddon>
      </InputGroup>

      <HStack>
        <Button
          fontFamily="monospace"
          borderRadius="0px"
          textColor="white"
          backgroundColor="#1D1C1C"
          width="100%"
          size="lg"
        >
          Add to Cart
        </Button>
        <Button
          fontFamily="monospace"
          textColor="white"
          borderRadius="0px"
          backgroundColor="#1D1C1C"
          width="100%"
          size="lg"
        >
          Buy Now
        </Button>
      </HStack>
    </VStack>
  )
}
