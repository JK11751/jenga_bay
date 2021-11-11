import React from "react";
import { Link } from "react-router-dom";
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
import { Badge } from "@chakra-ui/layout";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "JengaBay Product",
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
          whileHover={{ scale: 1.08 }}
        >
          {data.isNew && (
            <Badge
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
              colorScheme="red" 
              rounded="full" 
              px="2"
              fontSize="0.8em"
            >New</Badge>
          )}

          <Image
            sx={{objectFit:"cover"}}
            src={props.photo}
            h="200px"
            w="100%"
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <HStack>
                {/* <Avatar size="sm" src={props.company_image}/> */}
                <Box as="span" textTransform="uppercase" fontWeight="light">
                  {props.companyName}
                </Box>
                 {data.isNew && (
                      <Circle
                        size="10px"
                        bg="red.200"
                      />
                  )}
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
