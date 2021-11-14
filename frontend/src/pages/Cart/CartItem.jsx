import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import product from "../../assets/product.jpg"
import {MdDelete} from "react-icons/md"
import Icon from '@chakra-ui/icon'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { useNumberInput } from '@chakra-ui/number-input'

const style = {
    fontFamily:"monospace"
}

function NumberStepper() {
    const {
      getInputProps,
      getIncrementButtonProps,
      getDecrementButtonProps,
    } = useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5000,
      precision: 0,
    })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })
  
    return (
      <HStack maxW="320px">
        <Button {...inc}>+</Button>
        <Input textAlign="center" width="50px" {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    )
  }

export const CartItem = () => {
    return (
        <Box borderRadius="10px" width="80%" shadow="lg">
            <HStack p={4} spacing="2vw">
                <HStack>
                    <Image objectFit="cover" borderRadius="10px" width="70px" height="70px" src={product} alt="product"/>
                    <VStack alignItems="left" spacing="2px">
                        <Text {...style}>Cement</Text>
                        <Text {...style}>kilograms</Text>
                    </VStack>
                </HStack>    
                <VStack alignItems="center" spacing="10px" p={5}>
                    <Text {...style}>Item Price: Ksh.5,000</Text>    
                </VStack>
                <VStack alignItems="center" spacing="10px" p={5}>
                    <NumberStepper />
                </VStack>
                <VStack alignItems="left" spacing="10px" p={5}>
                    <Text {...style}>Total: Ksh.10,000</Text>
                </VStack>
                <Icon as={MdDelete}/>
            </HStack>    
        </Box>
    )
}
