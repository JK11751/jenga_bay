import { FormControl } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement,InputLeftElement } from "@chakra-ui/input"
import { useState } from "react"
import { Button, IconButton } from "@chakra-ui/button"
import { Box, VStack, Text, HStack, Stack, Divider, Flex } from "@chakra-ui/layout"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosPerson } from "react-icons/io"
import { BiLockAlt } from "react-icons/bi"
import { Image } from "@chakra-ui/image"
import { Checkbox } from "@chakra-ui/checkbox"
import {BiShowAlt, BiHide} from "react-icons/bi"
import facebookIcon from "../../../assets/facebook.png"
import googleIcon from "../../../assets/Google.png"
import linkedInIcon from "../../../assets/linkedin.png"

const SignUpForm = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    // const [checked, setChecked] = useState(false)
    // const handleChecked = ()=>{
    //     setChecked(!checked)
    // }
    
    return(
        <Flex flexDirection="column" >
            <Text align="center" fontSize="4xl" mt={10}>Create an Account</Text>
            <HStack alignSelf="center" mt={3} mb={3}>
                <Image src={facebookIcon} />
                <Image src={googleIcon} />
                <Image src={linkedInIcon} />
            </HStack>
            <Stack direction="row" alignItems="center" pr={4} pl={4}>
                <Divider color="#000000" orientation="horizontal" />
                <Text alignSelf="center" fontWeight="500" p={2}>OR</Text>
                <Divider orientation="horizontal" />
            </Stack>
            <Text align="center" fontSize="md">sign up with your email address</Text>
            <VStack spacing="15px" pl={20} pr={20} pt={4} pb={4}>
                <FormControl id="username" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<IoIosPerson  h={4} w={4} color="gray.300" />}/> 
                        <Input variant="filled" size="md" placeholder="Username" type="text" />
                    </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<HiOutlineMail color="gray.300" />}/> 
                        <Input variant="filled" size="md" placeholder="Enter Email Address" type="email" />
                    </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BiLockAlt color="gray.300" />}/> 
                        <Input variant="filled" pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" size="md"/>
                        <InputRightElement width="4.5rem">
                        {show ? <IconButton as={BiShowAlt} variant="untyled" h={5} w={5} onClick={handleClick}></IconButton>:
                            <IconButton as={BiHide} h={5} w={5} variant="unstyled" onClick={handleClick}></IconButton>}
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </VStack>
            <Flex mb={4} alignContent="center" pl={20} pr={20} >
                <Checkbox isRequired size="lg" colorScheme="green" ><Text mt={1} fontSize="xs" >By creating an account, you agree to the terms of service and conditions, and Privacy Policy</Text></Checkbox>
            </Flex>
            <Button alignSelf='center' padding="10px" background="#007ACC" borderRadius="50px" width="300px" height="35px" color="#ffffff">Sign Up</Button>
            <Text align="center" mt={4} fontSize="xs">Already have an account?<Box as="span" textColor="#007ACC" > Log in</Box></Text>
        </Flex>
    )

   
}

export default SignUpForm;