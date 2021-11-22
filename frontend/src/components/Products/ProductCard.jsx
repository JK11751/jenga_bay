import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  // Icon,
  // chakra,
  Text,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import Rating from "./Rating";
import { motion } from "framer-motion"
import { Badge } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../redux/appActions/cartActions";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "JengaBay Product",
  price: 4.5,
  rating: 4.2,
  numReviews: 0,
};

function ProductCard(props) {
  const history = useHistory();
  const dispatch = useDispatch()
  // const [showCartIcon, setshowCartIcon] = useState(true)
  const MotionBox = motion(Box)
  return (
    <Flex flexDir="row" p={2}  >
      {/* <Link to={{ pathname: `/product-details/${props.id}`}}> */}
        <MotionBox
          bg={useColorModeValue("white", "gray.800")}
          width="180px"
          height="290px"
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
              bg="#1EE164"
              color="white" 
              rounded="full" 
              px="2"
              fontSize="0.8em"
            >New</Badge>
          )}
          <Image
            sx={{objectFit:"cover"}}
            src={props.photo}
            h="180px"
            w="100%"
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />
          <Box pl="4" pr="6" pt="3">
            <Box onClick={() => history.push(`/sellers/${props.sellerId}/${props.companyName}`)} _hover={{cursor:"pointer"}}  d="flex" alignItems="baseline">
              <HStack>
              <Tooltip
                label="View more products from seller"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <Box fontSize="12px" as="span" textTransform="uppercase" fontWeight="normal">
                  {props.companyName}
                </Box>
                </Tooltip>
                 {data.isNew && (
                    <Circle
                      size="8px"
                      bg="#1EE164"
                    />
                  )}
              </HStack>
            </Box>

            <Text
              mt="1"
              justifyContent="space-between"
              alignContent="center"
              fontSize="md"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated
              textOverflow="ellipsis"
              _hover={{cursor:"pointer", color:"#007ACC"}}
              onClick={() => history.push(`/product-details/${props.id}`)}
            >
              {props.name}
            </Text>
            <Rating rating={data.rating} numReviews={data.numReviews}/>

            <Flex mt="3px" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                color={useColorModeValue("gray.800", "white")}
                alignItems="center"
              >
                <Box as="span" color={"gray.600"} fontSize="md">
                  Ksh.
                </Box>
                {props.price}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <IconButton h={5} w={4} variant="solid" bg="transparent" _hover={{cursor:"pointer"}} onClick={() => {dispatch(handleAddToCart(props.product))}} icon={<Icon as={FiShoppingCart} h={5} w={5}/>} alignSelf={"center"} />
              </Tooltip>
            </Flex>
          </Box>
        </MotionBox>
      {/* </Link> */}
    </Flex>
  );
}

export default ProductCard;
