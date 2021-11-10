// import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
// import React from "react";
// import { Image } from "@chakra-ui/image";
// import { Avatar } from "@chakra-ui/avatar";
// // import { getDetails } from "../../redux/actions/appActions";
// // import { useDispatch } from "react-redux";
// // import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
// // import img from "../../assets/product.jpg"

// const ProductCard = (props)=>{
//     // const dispatch = useDispatch()
//     return(

//         <Link to={{pathname:`/product/${props.id}`}}>
//         <Box _hover={{ boxShadow: "lg",bg:"#18A0FB" }} _focus={{ boxShadow: "outline" }} borderRadius="5px" ml={10} mb={5} height="300px" width="200px" backgroundColor="#007ACC">
//             <Flex flexDir="column">
//                 <Image borderRadius="5px" height="200px" width="100%" src={props.photo} alt="This is a product"/>
//                 <VStack alignItems="center" p="5px">
//                     <HStack>
//                         <Avatar size="sm" src={props.company_image}/>
//                         <Text color="#ffffff" fontWeight="501px">{props.description}</Text>
//                     </HStack>
//                     <Text fontFamily="heading" fontSize="15px" color="#ffffff">{props.category}</Text>
//                     <Text fontSize="15px" color="#ffffff">{props.name}</Text>
//                     {/* <Button onClick={()=> dispatch(getDetails(props.id))}>>View more</Button> */}
//                 </VStack>
//             </Flex>
//         </Box></Link>
//     )
// }

// export default ProductCard;
import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import Rating from "./Rating";
import {motion} from "framer-motion"

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function ProductCard(props) {
    const MotionBox = motion(Box)
  return (
    <Flex flexDir="row" p={2}  mr={4} >
      <Link to={{ pathname: `/product/${props.id}` }}>
        <MotionBox
          bg={useColorModeValue("white", "gray.800")}
          width="3xs"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          className="my-box"
          whileHover={{ scale: 1.1 }}
        >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            sx={{objectFit:"cover"}}
            src={props.photo}
            h="200px"
            w="100%"
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {/* {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )} */}
              <HStack>
                {/* <Avatar size="sm" src={props.company_image}/> */}
                <Box as="span" textTransform="uppercase" fontWeight="light">
                  {props.description}
                </Box>
              </HStack>
            </Box>

            <Box
              mt="1"
              justifyContent="space-between"
              alignContent="center"
              fontSize="xl"
              fontWeight="semibold"
              as="h5"
              lineHeight="tight"
              isTruncated
            >
              {props.name}
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}

              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {data.price.toFixed(2)}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Rating rating={data.rating} />
          </Box>
        </MotionBox>
      </Link>
    </Flex>
  );
}

export default ProductCard;
