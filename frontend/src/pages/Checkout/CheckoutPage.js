import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import PaymentForm from './PaymentForm';

const CheckoutPage = () => {
  return (
    <Box ml="15vw" mt="40px">
      <Flex width="70vw" boxShadow="lg">
        <Box height="80vh" width="100%" bg="#ffffff" borderRadius="10px 0px 0px 10px">
          <PaymentForm />
        </Box>
      </Flex>
    </Box>
  );
}

export default CheckoutPage;
