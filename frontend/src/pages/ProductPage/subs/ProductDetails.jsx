import React from "react";
import { Flex, VStack, Text, HStack, Box, Divider } from "@chakra-ui/layout";
// import img from "../../../assets/product.jpg";
import ImageCarousel from "../../../components/Products/ImageCarousel";
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
  useColorModeValue,
} from "@chakra-ui/react";
import Rating from "../../../components/Products/Rating";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";

const ProductDetail = () => {
  // let {productId} = useParams()
  const data = {
    rating: 4.5,
  };
  const styling = {
    h: "30px",
    w: "30px",
  };

  return (
    <Flex p={10} rounded="lg"
    shadow="lg" flexDir="row">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        width="xl"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        flexShrink={0}
        p={1}
        ml="2vw"
      >
        <ImageCarousel />
      </Flex>
      <VStack width="450px" alignItems="left" mt={3} pl={20}>
        <Box
          as="button"
          variant="link"
          alignSelf="flex-start"
          fontFamily="monospace"
          fontSize="20px"
        >
          Bamburi Cement
        </Box>
        <Text fontFamily="monospace" fontSize="40px">
          50 meter roofing ironsheets 55"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a neque
          orci. Vivamus nisl tortor, sollicitudin in augue vitae, dictum
          imperdiet orci. Vestibulum ut ligula nulla. Nam id tortor vel risus
          dapibus viverra
        </Text>
        <Divider orientation="horizontal"/>

        <InputGroup>
          <InputLeftAddon backgroundColor="transparent">
            <Icon as={FiMinus} />
          </InputLeftAddon>

          <Input borderRightColor="transparent" borderLeftColor="transparent" placeholder="1" textAlign="center" width="100px" />
          <InputRightAddon  backgroundColor="transparent">
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
    </Flex>
  );
};

export default ProductDetail;
