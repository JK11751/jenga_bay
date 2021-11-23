import { Box, Heading, Text, Button, Center, Image } from '@chakra-ui/react';
import error from "../../assets/404Error.png"
import { Link } from 'react-router-dom';
import NavBar from "../../components/PageSections/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <Center>
        <Box mt="60px" alignSelf="center" textAlign="center"  px={6}>
        {/* <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text> */}
        <Image height="400px" src={error} />
        <Heading
          display="inline-block"
          as="h2"
          size="lg"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text">
          404 Page Not found
        </Heading>
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