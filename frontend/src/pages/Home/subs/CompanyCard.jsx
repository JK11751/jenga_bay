import React from "react";
import { 
    // chakra,
     Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const CompanyCard = ({company_name, image, seller_id}) => {
    const history = useHistory()
    const MotionBox = motion(Box)
  return (
      <MotionBox
        w="3xs"
        mx="4"
        my="2"
        // bg={useColorModeValue("white", "gray.800")}
        bg="transparent"
        shadow="lg"
        rounded="lg"
        whileHover={{ scale: 1.03 }}
        onClick={() => history.push(`/sellers/${seller_id}/${company_name}`)}
      >
        {/* <Box px={4} py={2}>
          <chakra.h1
            color="white"
            fontWeight="bold"
            fontSize="lg"
            // bg="#1A202C"
            textAlign="center"
            textTransform="capitalize"
            isTruncated
          >
           {company_name}
          </chakra.h1>
        </Box> */}

        <Image
          h={48}
          w="full"
          objectFit="cover"
          mt={2}
          borderBottomRadius="lg"
          src={image}
          alt={company_name}
        />
      </MotionBox>
  );
};

export default CompanyCard;