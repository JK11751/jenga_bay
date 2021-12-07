import React from "react";
import { Flex, Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Avatar,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const RegistrationForm =() =>{


  return (
    <Flex flexDirection="column">
      <Box ml="50px">
        <VStack>
          <Text fontSize="30px" textColor="normal">Company Registration</Text>
          <Text textColor="black" fontSize="30px">Profile Information</Text>
        </VStack>
        <HStack mb="20px">
          <Avatar size="xl" />
          <VStack>
          <Text> Upload Company Logo</Text>
         <FormControl id="input-file" isRequired>
            <FormLabel>Profile pic</FormLabel>
              <input type="file"/>
          </FormControl>
            </VStack>
          <FormControl id="business-name" isRequired>
            <FormLabel>Business Name</FormLabel>
            <Input variant="filled" width="300px" />
          </FormControl>
          <FormControl id="businee-email" isRequired>
            <FormLabel>Business Email Address</FormLabel>
            <Input variant="filled" width="300px"
            />
          </FormControl>
        </HStack>
        <HStack mb="20px">
          <FormControl id="business-registration" isRequired>
            <FormLabel>Business Registration Number</FormLabel>
            <Input variant="filled" width="300px"
             />
          </FormControl>
          <FormControl id="input-file" isRequired>
            <FormLabel>Registration Certificate</FormLabel>
              <input type="file"/>
          </FormControl>
          <FormControl id="phone-number" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input variant="filled" width="300px" 
            />
          </FormControl>
          
        </HStack>
        <HStack mb="20px">
          <FormControl id="county" isRequired>
            <FormLabel>County</FormLabel>
            <Input variant="filled" width="300px" 
            />
          </FormControl>
          <FormControl id="county-code" isRequired>
            <FormLabel>County-Code</FormLabel>
            <Input variant="filled" width="300px"
            />
          </FormControl>
          <FormControl id="subcounty" isRequired>
            <FormLabel>Sub County</FormLabel>
            <Input variant="filled" width="300px"
            />
          </FormControl>
        </HStack>
        <HStack mb="20px">
          
          <FormControl id="local-area" isRequired>
            <FormLabel>Local Area Name</FormLabel>
            <Input variant="filled" width="300px"
            /> 
          </FormControl>
          <FormControl id="street" isRequired>
            <FormLabel>Street Name</FormLabel>
            <Input variant="filled" width="300px"
            />
          </FormControl>
          <FormControl id="town" isRequired>
            <FormLabel>Town</FormLabel>
            <Input variant="filled" width="300px" 
            />
          </FormControl>
        </HStack>
        <HStack mb="20px">
        <FormControl id="building" isRequired>
            <FormLabel>Building</FormLabel>
            <Input variant="filled" width="300px" 
            />
          </FormControl>
<FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input variant="filled" width="300px"/>
          </FormControl>
          <FormControl id="c-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input variant="filled" width="300px" 
            />
          </FormControl>
        </HStack>
        <Flex mb="20px">
          <Text></Text>
          Note that the fields marked with * are required to process your
          registration request
        </Flex>
        <HStack ml="400px">
          <Button
            padding="10px"
            background="#fffffC"
            borderRadius="50px"
            borderWidth="1px"
            borderColor="#007ACC"
            borderStyle="solid "
            width="200px"
            height="40px"
            color="#007ACC"
          >
            Cancel
          </Button>
          <Button
            padding="10px"
            background="#007ACC"
            width="200px"
            height="40px"
            borderRadius="50px"
            borderWidth="1px"
            borderColor="#007ACC"
            borderStyle="solid "
            color="#ffffff"
          >
            Register
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default RegistrationForm;
