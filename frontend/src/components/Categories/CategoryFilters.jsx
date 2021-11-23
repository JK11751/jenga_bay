import React from 'react'
import { Box, useColorModeValue, VStack, HStack, Text, InputGroup, Input, Button, Spacer } from '@chakra-ui/react'
import {MdGraphicEq} from "react-icons/md"
import Rating from '../Products/Rating'
import { useHistory } from 'react-router'
import { Radio, RadioGroup } from "@chakra-ui/react"
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from "@chakra-ui/react"

const ratingData = [
    { key:1, rating: 4 },
    { key:2, rating: 3 },
    { key:3, rating: 2 },
    { key:4, rating: 1 },
]

export const CategoryFilters = ({ CategoryList, categoryName, sellerReducer, categoriesList, seller_name }) => {
    const history = useHistory()
    const [value, setValue] = React.useState("")
    const [priceRange, setPriceRange] = React.useState([0, 500])

    return (
        <Box
            w="xs"
            h="auto"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            p={5}
        >
        {CategoryList && categoryName && <><Text fontWeight="bold">CATEGORY</Text>
        <Text ml={2} mb={4} textTransform="capitalize">{categoryName}</Text>
        <Text fontWeight="bold">OTHER CATEGORIES</Text>
        <Box overflow="hidden" overflowY="scroll" h="sm">
            { CategoryList.map((category) =>
                (

                    <Text _hover={{cursor:"pointer", bg:"#24A8FF", borderRadius:"5px", color:"white"}} _focus={{bg:"#24A8FF", borderRadius:"5px", color:"white"}} onClick={()=> history.push(`/categories/${category.value}`)} ml={2} padding="2px" key={category.id}>{category.name}</Text>

                )
            )}
        </Box></>}
        { sellerReducer && <Box>
            <Text mt={2} fontWeight="bold">FEATURED BRANDS</Text>
            { sellerReducer && sellerReducer.allSellers.map((seller) =>{
                return(
                    <>
                        <HStack>
                            <input type="checkbox"></input>
                            <Text onClick={()=> history.push(`/sellers/${seller.id}/${seller.business_name}`)} _hover={{cursor:"pointer"}} ml={2} padding="2px" key={seller.id}>{seller.business_name}</Text>
                        </HStack>
                    </>
                )
            })}</Box>
        }
        {categoriesList && <><Text fontWeight="bold">CATEGORIES</Text>
        <Box overflow="hidden" overflowY="scroll" mb={4} h="auto">
            {categoriesList.map((product) =>
                (

                    <Text _hover={{cursor:"pointer", bg:"#24A8FF", borderRadius:"5px", color:"white"}} _focus={{bg:"#24A8FF", borderRadius:"5px", color:"white"}} onClick={()=> history.push(`/sellers/${product.item_seller}/${seller_name}/${product.category}`)} ml={2} padding="2px" key={product.id}>{product.category}</Text>

                )
            )}
        </Box></>}
        <Text fontWeight="bold">PRODUCT RATING</Text>
        <VStack mb={4} p={2} alignItems="left" spacing="10px">
            {ratingData.map((rating, index) =>{
            return(
                <RadioGroup onChange={() => setValue(index)} value={value}>
                    <HStack>
                        <Radio key={index} value={index}>
                            <HStack direction="row">
                                <Rating rating={rating.rating} />
                                <Text> & above</Text>
                            </HStack>    
                        </Radio>
                    </HStack>
                </RadioGroup>    
            )})}
        </VStack>
        <HStack width="100%">
            <Text fontWeight="bold">PRICE</Text>
            <Spacer/>
            <Button variant="outline" colorScheme="cyan">Apply Filter</Button>
        </HStack>    
        <RangeSlider my={4} aria-label="range Slider" onChangeEnd={(val) => setPriceRange(val)} min={0} max={5000} defaultValue={[30, 500]}>
            <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0}>
                <Box color="tomato" as={MdGraphicEq} />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={6} index={1}>
                <Box color="tomato" as={MdGraphicEq} />
            </RangeSliderThumb>
        </RangeSlider>
        {/* {priceRange.map((price) => { */}
            {/* return( */}
        <InputGroup>
            <HStack my={2} width="100%" alignItems="center" spacing="5px">
                <Input isReadOnly width="8vw" value={priceRange[0]}/>
                <Spacer/>
                <Text textAlign="match-parent">{"  "}to{"  "}</Text>
                <Spacer/>
                <Input isReadOnly width="8vw" value={priceRange[1]}/>
            </HStack>    
        </InputGroup>
        {/* )})} */}
        {/* <Text fontWeight="bold">FILTERS</Text> */}
        </Box>
    )
}
