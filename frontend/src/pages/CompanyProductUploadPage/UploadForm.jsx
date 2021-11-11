import React from "react";
import { Flex, Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const UploadForm =() =>{
  return (
    <Flex flexDirection="column">
      <Box alignContent="center" ml="40px">
        <VStack mt="50px" mb="50px" ml="300px">
          <Button  
          borderRadius="10px"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="#007ACC"
          
          > Upload photo(s)</Button>
          <Flex>
          <Text>You may upload upto five photos. Please upload quality photos</Text>
          </Flex>
          </VStack>
      <HStack mb="50px">
          <FormControl id="product-Name" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input variant="filled" width="300px" />
          </FormControl>
          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Input variant="filled" width="300px" />
          </FormControl>
    </HStack>
        <HStack mb="50px">
          <FormControl id="unit" isRequired>
            <FormLabel>Unit</FormLabel>
            <Input variant="filled" width="300px" />
          </FormControl>
          <FormControl id="price" isRequired>
            <FormLabel>Price Range</FormLabel>
              <Input variant="filled" width="300px" />
          </FormControl>
          
        </HStack>
        <HStack mb="20px">
          <FormControl id="product-description" isRequired>
            <FormLabel>Product description</FormLabel>
            <Input variant="filled" width="900px" height="300px"/>
          </FormControl>
        </HStack>
      </Box>
    </Flex>
  );
}

export default UploadForm;
