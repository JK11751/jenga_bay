import { FormControl } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/input";
import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import {
  Box,
  VStack,
  Text,
  HStack,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/layout";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import { Image } from "@chakra-ui/image";
import { Checkbox } from "@chakra-ui/checkbox";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { FormHelperText } from "@chakra-ui/form-control";
import facebookIcon from "../../../assets/facebook.png";
import googleIcon from "../../../assets/Google.png";
import linkedInIcon from "../../../assets/linkedin.png";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useForm } from "../../../utils/useForm";
import { handleRegisterClient } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const style ={
  color:"red",
}

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //handling form submission
  const { handleSubmit, handleChange, data: user, errors } = useForm({
    validations: {
      username: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
      email:{
        pattern:{
          value: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$',
          message:"Please enter a valid email address"
        }
      },
      phone_number:{
        pattern:{
          value: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$',
          message:"Please enter a valid phone number"
        },
        custom: {
          isValid: (value) => value.length >= 10,
          message: 'The number needs to be at least 10 characters long.',
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at least 6 characters long.',
        },
      },
      
    },

    onSubmit: () => {
      //  await axios
      // .post("https://api.zuri.chat/users", {
      //   first_name,
      //   last_name: other_name,
      //   email,
      //   password
      // })
      // .then(response => {
      //   const { data, message } = response.data;

      //   //Store token in localstorage
      //   sessionStorage.setItem("user_id", data.InsertedId);
      //   localStorage.setItem("newUserEmail", JSON.stringify(email));
      //   localStorage.setItem("userUserPassword", JSON.stringify(password));

      // })
      // .catch(error => {
      //   const { data } = error.response;
      //   setShowDialog(false);

      //   RegExp(/Users with email/).test(data.message) &&
      //     setemailerror("This email is already in use");

      //   !RegExp("Users with email").test(data.message) &&
      //     seterror(data.message);
      // });
      const data = {
        profile:{
          username: user.username,
          email: user.email,
          password: user.password,
        },

        phone_number: user.phone_number,
      }
      dispatch(handleRegisterClient(data));
      // Store token in localstorage
        // sessionStorage.setItem("user_id", data.InsertedId);
        // localStorage.setItem("newUserEmail", JSON.stringify(email));
        // localStorage.setItem("userUserPassword", JSON.stringify(password));

 
      toast.success("Sign up successful", {
        position: "bottom-left",
      });
      history.push("/sign-in");
    }
  });

  
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <form onSubmit={handleSubmit}>
    <Flex flexDirection="column">
      <Text align="center" fontSize="4xl" mt={7}>
        Create an Account
      </Text>
      <HStack alignSelf="center" mt={3} mb={3}>
        <Image src={facebookIcon} />
        <Image src={googleIcon} />
        <Image src={linkedInIcon} />
      </HStack>
      <Stack direction="row" alignItems="center" pr={4} pl={4}>
        <Divider color="#000000" orientation="horizontal" />
        <Text alignSelf="center" fontWeight="500" p={2}>
          OR
        </Text>
        <Divider orientation="horizontal" />
      </Stack>
      <Text align="center" fontSize="md">
        sign up with your email address
      </Text>
      <VStack spacing="15px" pl={20} pr={20} pt={4} pb={4}>
        <FormControl id="username" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IoIosPerson h={4} w={4} color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Username"
              type="text"
              value={user.username || ""}
              onChange={handleChange("username")} 
            />
          </InputGroup>
          {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
        </FormControl>
        <FormControl id="email" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiOutlineMail color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Enter Email Address"
              type="email"
              value={user.email || ""}
              onChange={handleChange("email")}
            />
          </InputGroup>
          {errors.email && <FormHelperText {...style}>{errors.email}</FormHelperText>}
        </FormControl>
        <FormControl id="phone_number" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiPhone color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Enter your phone number"
              type="text"
              value={user.phone_number || ""}
              onChange={handleChange("phone_number")}
            />
          </InputGroup>
          {errors.phone_number && <FormHelperText {...style}>{errors.phone_number}</FormHelperText>}
        </FormControl>
        <FormControl id="password" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiLockAlt color="gray.300" />}
            />
            <Input
              variant="filled"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              size="md"
              value={user.password || ""}
              onChange={handleChange("password")}
            />
            <InputRightElement width="4.5rem">
              {show ? (
                <IconButton
                  as={BiShowAlt}
                  variant="unstyled"
                  h={5}
                  w={5}
                  onClick={handleClick}
                ></IconButton>
              ) : (
                <IconButton
                  as={BiHide}
                  h={5}
                  w={5}
                  variant="unstyled"
                  onClick={handleClick}
                ></IconButton>
              )}
            </InputRightElement>
          </InputGroup>
          {errors.password && <FormHelperText {...style}>{errors.password}</FormHelperText>}
        </FormControl>
        
      </VStack>
      <Flex mb={4} alignContent="center" pl={20} pr={20}>
        <Checkbox isRequired size="lg" colorScheme="green">
          <Text mt={1} fontSize="xs">
            By creating an account, you agree to the terms of service and
            conditions, and Privacy Policy
          </Text>
        </Checkbox>
      </Flex>
      <Button
        type="submit"
        alignSelf="center"
        padding="10px"
        background="#007ACC"
        borderRadius="50px"
        width="300px"
        height="35px"
        color="#ffffff"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      {/* <button type="submit">Submit</button> */}
      <Text align="center" mt={4} fontSize="xs">
        Already have an account?
        <Link to="/sign-in"><Box as="span" textColor="#007ACC">
          {" "}
          Log in
        </Box></Link>
      </Text>
    </Flex>
    </form>
  );
};

export default SignUpForm;
