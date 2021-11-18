import React from 'react'
import { Box, useColorModeValue, HStack, Text } from '@chakra-ui/react'
import CategoryList from './CategoryList'
import { useHistory } from 'react-router'

export const CategoryFilters = ({categoryName, sellerReducer}) => {
    const history = useHistory()
    return (
        <Box
            w="xs"
            h="auto"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            p={5}
        >
        <Text fontWeight="bold">CATEGORY</Text>
        <Text ml={2} mb={4} textTransform="capitalize">{categoryName}</Text>
        <Text fontWeight="bold">OTHER CATEGORIES</Text>
        <Box overflow="hidden" overflowY="scroll" h="sm">
            { CategoryList && CategoryList.map((category) =>
                (

                    <Text onClick={()=> history.push(`/categories/${category.value}`)} _hover={{cursor:"pointer"}} ml={2} padding="2px" key={category.id}>{category.value}</Text>

                )
            )}
        </Box>
        { sellerReducer &&<Box>
            <Text fontWeight="bold">BRANDS</Text>
            { sellerReducer && sellerReducer.allSellers.map((seller) =>{
                return(
                    <>
                        <HStack>
                            <input type="checkbox"></input>
                            <Text onClick={()=> history.push(`/sellers/${seller.id}/items`)} _hover={{cursor:"pointer"}} ml={2} padding="2px" key={seller.id}>{seller.business_name}</Text>
                        </HStack>
                    </>
                )
            })}</Box>
        }
        <Text fontWeight="bold">FILTERS</Text>
        </Box>
    )
}
