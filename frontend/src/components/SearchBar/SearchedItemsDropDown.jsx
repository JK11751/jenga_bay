import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";


const SearchedUsersDropdown = ({options}) => {
    const history = useHistory()
    return(
        <Box shadow="lg" borderTopWidth="1.9px" borderTopColor="gray.100" borderBottomRadius="10px" zIndex={1000}  width="43.3vw" bg="white" position="absolute" top="7.7vh" left="29.9vw">
            <List>
            {!options.length && (
                <>
                    <Box as="span">     </Box>
                    <p className='notFound-text'>No matches Found</p>
                </>
            )}
            {options.map((option) =>
                (   
                    <>
                        <Box as="span">     </Box>
                        <ListItem 
                        onClick={() => history.push(`/products/${option.item_name}`)} 
                        padding="5px" key={option.id}>{option.item_name}</ListItem>
                    </>
                )
            )}
            </List>
        </Box>
    )
}

export default SearchedUsersDropdown;

