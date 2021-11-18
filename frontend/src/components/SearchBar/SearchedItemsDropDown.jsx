import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";


const SearchedUsersDropdown = ({options}) => {

    return(
        <Box shadow="lg" borderTopWidth="1.9px" borderTopColor="gray.100" borderBottomRadius="10px" zIndex={1000}  width="43.3vw" bg="white" position="absolute" top="7.7vh" left="29.9vw">
            <List>
            {!options.length && (
                <>
                    <Box as="span">     </Box>
                    <p className='notFound-text'>No matches Found</p>
                </>
            )}
            {options.map((category) =>
                (   <>
                        <Box as="span">     </Box>
                        <ListItem padding="5px" key={category.id}>{category.value}</ListItem>
                    </>
                )
            )}
            </List>
        </Box>
    )
}

export default SearchedUsersDropdown;

