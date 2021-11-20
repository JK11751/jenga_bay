import React from "react";
import { chakra, Box, useColorModeValue, Link } from "@chakra-ui/react";
import { useHistory } from "react-router";
import seller from "../../../assets/seller2.jpg"

const RegisterAsASeller = () => {
  const history = useHistory()
  return (
      <Box
        // bg={useColorModeValue("white", "gray.800")}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        // maxW={{ lg: "9xl" }}
        w="90vw"
        h="30vw"
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            objectFit="cover"
            bgImage={seller}
            // style={{
            //   backgroundImage:
            //     "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
            // }}
          ></Box>
        </Box>

        <Box py={3} px={8} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            Register as a{" "}
            <chakra.span color={useColorModeValue("brand.600", "brand.400")}>
              Seller
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          Do you have a specific or a variety of products that you sell?
           Do you have a physical store or you only have a storage room you 
           keep them in? How many customers do you reach out to monthly? How
            many sales do you get from the corner of your store? It is time 
            to go bigger and better. The next level of buying and selling is 
            now on the internet, it is so much better and convenient for both 
            sellers and buyers. You only have to find an appropriate channel to 
            get your products connected to the right buyer. That is what JengaBay
             is an expert at. If you need a place that exposes your products to a wide range of customers
               from all across Kenya, you need to sign up now to be a vendor. You get the
                chance to show your products to customers miles away from you without spending
                 an extra cost for advertising, delivery, customer service, or aftersales.
          </chakra.p>

          <Box mt={8}>
            <Link
              
              bg="#007ACC"
              color="gray.100"
              px={10}
              py={3}
              fontFamily="sans-serif"
              fontWeight="semibold"
              // rounded="lg"
              borderRadius="50px"
              _hover={{ bg: "gray.800" }}
              onClick={() => history.push(`/registration`)}
            >
              Register Now
            </Link>
          </Box>
        </Box>
      </Box>
  );
};

export default RegisterAsASeller;
