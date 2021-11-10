import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import { ProductDetails } from "./ProductDetails";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";

const ProductDetailsCard = () => {
  // let {productId} = useParams()

  return (
    <Flex bg={useColorModeValue("white", "gray.800")}
    width="15xl"
    height="2xl"
    borderWidth="1px"
    rounded="lg"
    shadow="lg"
    mt={5}
    ml="5vw"
    mr='3vw'
    mb={20}
    p={10}
    borderRadius="10px"
    alignSelf="center"
    position="relative" flexDir="row">
    
      <Flex
        
        flexShrink={0}
        p={1}
        
      >
        {/* <ImageCarousel /> */}
        <ImageSlider ml={20} />
      </Flex>
      <ProductDetails />
    </Flex>
  );
};

export default ProductDetailsCard;
