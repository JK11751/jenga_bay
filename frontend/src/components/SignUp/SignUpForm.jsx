import { FormControl } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement,InputLeftElement } from "@chakra-ui/input"
import { useState } from "react"
import { Button } from "@chakra-ui/button"
import { Box, VStack, Text, HStack, Stack, Divider } from "@chakra-ui/layout"
import { HiOutlineMail } from "react-icons/hi"
import {IoIosPerson} from "react-icons/io"
import {BiLockAlt} from "react-icons/bi"
import { Image } from "@chakra-ui/image"
import facebookIcon from "../../assets/facebook.png"
import googleIcon from "../../assets/Google.png"
import linkedInIcon from "../../assets/linkedin.png"

const SignUpForm = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Box>
            <Text fontSize="4xl">Create an Account</Text>
            <HStack>
                <Image src={facebookIcon} />
                <Image src={googleIcon} />
                <Image src={linkedInIcon} />
            </HStack>
            <Stack direction="row" h="100px" p={4}>
                <Divider orientation="horizontal" />
                <Text>OR</Text>
                <Divider orientation="horizontal" />
            </Stack>
            <Text fontSize="md">sign up with your email address</Text>
            <VStack spacing="10px">
                <FormControl id="username" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<IoIosPerson color="gray.300" />}/> 
                        <Input _placeholder={{ color: 'gray.500' }} variant="filled" size="lg" placeholder="Username" type="text" />
                    </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<HiOutlineMail color="gray.300" />}/> 
                        <Input variant="filled" size="lg" placeholder="Enter Email Address" type="email" />
                    </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BiLockAlt color="gray.300" />}/> 
                        <Input variant="filled" pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" size="lg"/>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}> {show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </VStack>
            <Text fontSize="sm">By creating an account, you agree to the terms of service and conditions, and Privacy Policy</Text>
            <Button padding="10px"background="#007ACC" borderRadius="50px" width="300px" height="40px">SignUp</Button>
            <Text fontSize="xs">Already have an account? Log in</Text>
        </Box>
    )
}
export default SignUpForm;