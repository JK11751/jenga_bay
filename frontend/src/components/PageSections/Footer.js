import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
import logo from "../../assets/JengaBay.png"
import NewsLetter from './Newsletter';
import { Link } from 'react-router-dom';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg="#232F3E"
        w="100%"
        mt={20}
        // bg={useColorModeValue('gray.50', 'gray.900')}
        // color={useColorModeValue('gray.700', 'gray.200')}
        >
        <Box  w="100%">
          <NewsLetter/>
        </Box>

        <Container color="white" as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product</ListHeader>
              <Link to="/">Overview</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link to="/">Features</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link to="/">Pricing</Link>
              <Link to="/">Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link to="/">About Us</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Founders</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link to="/">Cookies Policy</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            {/* <Logo /> */}
            <Link to="/">
            <Image src={logo}/></Link>
          </Flex>
          <Text color="white" pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2021 JengaBay. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }