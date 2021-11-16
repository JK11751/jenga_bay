import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavBar from "../components/PageSections/NavBar";

const NotFound = ({cartItems}) => {
  return (
    <>
      <NavBar cartItems={cartItems} />
      <Center>
        <Box mt="20vh" alignSelf="center" textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          as={Link}
          to="/"
          borderRadius="30px"
          pl={10}
          pr={10}
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid">
          Go to Home
        </Button>
      </Box>  
    </Center>   
    </>
  );
};

export default NotFound;