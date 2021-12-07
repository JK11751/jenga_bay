import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { handleResetPassword } from '../../redux/appActions/authActions';
// import { useLocation } from 'react-router';
  
  export const ForgotPassword = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    // const location = useLocation()
    // const value = location.state.from

    const handleSubmit = (e) => {

      const data = {
        email: email,
      }

      dispatch(handleResetPassword(data))
      history.push({pathname:`/reset-password`
      // , state:{from: `${value}`}
    })
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            Enter the email address you used to register with <br/>
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={handleSubmit}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
