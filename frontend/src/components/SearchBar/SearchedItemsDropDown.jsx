import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";


const SearchedUsersDropdown = ({options}) => {

    return(
        <Box shadow="lg" borderTopWidth="1.9px" borderTopColor="gray.100" borderBottomRadius="10px" zIndex={1000}  width="600px" bg="white" position="absolute" top="6.6vh" left="27.9vw">
            <List>
            {!options.length && (
                <p className='notFound-text'>No matches Found</p>
            )}
                {options.map((category) =>
                (<ListItem padding="5px" key={category.id}>{category.value}</ListItem>)
                )}
            </List>
        </Box>
    )
}

export default SearchedUsersDropdown;

// const dispatch = useDispatch();

//     const filterUser = (searchInput, allUsers) => {
//         const newFilteredUsers = allUsers.filter(
//             (user) =>
//                 user.user_name
//                     .toLowerCase()
//                     .includes(searchInput.toLowerCase()) ||
//                 user.first_name
//                     .toLowerCase()
//                     .concat(` ${user.last_name.toLowerCase()}`)
//                     .includes(searchInput.toLowerCase()) ||
//                 user.email.toLowerCase().includes(searchInput.toLowerCase())
//         );

//         setFilteredUsers(newFilteredUsers);
//     };

//     const searchUser = (e) => {
//         const searchInput = e.target.value;
//         setSearchInputValue(searchInput);
//         if (searchInput) {
//             setSearchModalOpen(true);
//         } else {
//             setSearchModalOpen(false);
//         }

//         filterUser(searchInput, orgUsers || []);
//     };
