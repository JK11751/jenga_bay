import { Box, List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";

const SearchedUsersDropdown = ({options, categories, brands}) => {
    const history = useHistory()
    return(
        <Box shadow="lg" overflowY="scroll" maxH="lg" borderTopWidth="1.9px" borderTopColor="gray.100" borderTopRadius="2px" borderBottomRadius="10px" zIndex={1000}  width="43.3vw" bg="white" position="absolute" top="8.25vh" left="29.4vw">
            <List px={6} py={4}>
            {(!options.length && !categories.length && !brands.length) && (
                <>
                    <Box as="span">{"   "}</Box>
                    <p className='notFound-text'>No matches Found</p>
                </>
            )}
            {options.map((option) =>
                (   
                    <>
                        <Box as="span">{"   "}</Box>
                        <ListItem  _hover={{cursor:"pointer", bg:"#24A8FF", borderRadius:"5px", color:"white"}} _focus={{bg:"#24A8FF", borderRadius:"5px", color:"white"}}
                        onClick={() => history.push(`/product-details/${option.id}`)} 
                        padding="5px" key={option.id}>
                        <HStack>
                            <Text>{option.item_name}</Text>
                            <Text color="#c4c4c4">Product</Text>
                        </HStack>
                        </ListItem>
                    </>
                )
            )}
            {categories.map((category) =>
                (   
                    <>
                        <Box as="span">     </Box>
                        <ListItem  _hover={{cursor:"pointer", bg:"#24A8FF", borderRadius:"5px", color:"white"}} _focus={{bg:"#24A8FF", borderRadius:"5px", color:"white"}}
                        onClick={() => history.push(`/categories/${category.value}`)} 
                        padding="5px" key={category.id}>
                        <HStack>
                            <Text>{category.name}</Text>
                            <Text color="#c4c4c4">Category</Text>
                        </HStack>
                        </ListItem>
                    </>
                )
            )}
            {brands.map((brand) =>
                (   
                    <>
                        <Box as="span">{"   "}</Box>
                        <ListItem  _hover={{cursor:"pointer", bg:"#24A8FF", borderRadius:"5px", color:"white"}} _focus={{bg:"#24A8FF", borderRadius:"5px", color:"white"}}
                        onClick={() => history.push(`/sellers/${brand.id}/${brand.business_name}`)} 
                        padding="5px" key={brand.id}>
                        <HStack>
                            <Image objectFit="cover" borderRadius="5px" h="30px" w="30px" src={brand.profile_pic}/>
                            <Text>{brand.business_name} <Text color="#c4c4c4">Brand Store</Text></Text>
                        </HStack>
                        </ListItem>
                    </>
                )
            )}
            </List>
        </Box>
    )
}

export default SearchedUsersDropdown;

