import React from "react";
import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useHistory } from "react-router";
import category from "../../../assets/category.jpg"

const CategoryCard = ({category_name}) => {
    const history = useHistory()
    const MotionFlex = motion(Flex)

  return (
      <MotionFlex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="2.2xs"
        mx="auto"
        mt={5}
        whileHover={{ scale: 1.03 }}
        onClick={() => history.push(`/categories/${category_name}`)}
      >
        <Box
          bg="gray.300"
          h={48}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          bgImage={category}
        ></Box>

        <Box
          w={{ base: 46, md: 56 }}
          bg={useColorModeValue("white", "gray.800")}
        //   bg="#1A202C"
          mt={-10} 
          shadow="lg"
        //   rounded="lg"
        borderBottomRadius="md"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            px={2}
            textAlign="center"
            fontWeight="medium"
            bg="#24A8FF"
            textTransform="capitalize"
            color="white"
            // letterSpacing={1}
            fontFamily="sans-serif"
            textOverflow="ellipsis"
            isTruncated
          >
            {category_name}
          </chakra.h3> 
        </Box>
      </MotionFlex>
  );
};

export default CategoryCard;