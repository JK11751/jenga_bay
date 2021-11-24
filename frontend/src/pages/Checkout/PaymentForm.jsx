import { VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Divider, Text } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { BiLockAlt } from "react-icons/bi";
import { FaCalendar, FaRegWindowMaximize } from "react-icons/fa";
import {
  Visa,
  Discover,
  Western,
  Mastercard,
  Amex,
  Worldpay,
} from "react-pay-icons";
import { BsArrowRightShort } from "react-icons/bs";
import { Icon } from "@chakra-ui/icon";

const PaymentForm = () => {
  return (
    <Box>
      <VStack mt="5px">
        <HStack>
          <Text color="black">Credited Payment Methods</Text>
        </HStack>
        <Divider />
        <VStack mb="100px">
          <Button
            borderColor="#007AC"
            borderWidth="1px"
            width="200px"
            borderStyle="solid"
            mb="5px"
          >
            Mpesa
          </Button>
          <HStack mb="30px">
            <img
              height="40"
              alt="paypal"
              src="https://shoplineimg.com/assets/footer/card_paypal.png"
            />
          </HStack>
          <Text>Pay by Card</Text>
          <HStack>
            <Visa style={{ margin: 10, width: 100 }} />;
            <Discover style={{ margin: 10, width: 100 }} />;
            <Western style={{ margin: 10, width: 100 }} />;
            <Mastercard style={{ margin: 10, width: 100 }} />;
            <Amex style={{ margin: 10, width: 100 }} />;
            <Worldpay style={{ margin: 10, width: 100 }} />;
          </HStack>
        </VStack>
        <Box alignSelf="center">
          <FormControl id="card-no" isRequired>
            <FormLabel>Card Number</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaRegWindowMaximize color="gray.300" />}
              />
              <Input
                variant="filled"
                width="400px"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </InputGroup>
          </FormControl>
        </Box>
        <HStack>
          <FormControl id="expirydate" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaCalendar color="gray.300" />}
              />
              <Input
                type="text"
                variant="filled"
                width="200px"
                placeholder="mm/dd/yy"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="cvc" isRequired>
            <FormLabel>CVC/CVV</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiLockAlt color="gray.300" />}
              />
              <Input
                variant="filled"
                width="200px"
                placeholder="..."
                type="text"
              />
            </InputGroup>
          </FormControl>
        </HStack>
        <HStack>
          <BiLockAlt color="gray.300" />
          <Text>Your transaction is secured with SSL encryption</Text>
        </HStack>
        <HStack>
          <Button
            mr="30px"
            type="submit"
            alignSelf="center"
            padding="10px"
            background="#007ACC"
            borderRadius="50px"
            width="300px"
            height="35px"
            color="#ffffff"
          >
            Pay Now
          </Button>
          <Link color="#007ACC"> Continue Shopping </Link>
          <Icon as={BsArrowRightShort} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default PaymentForm;
