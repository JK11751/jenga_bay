import { Box, Modal,ModalBody,ModalContent,ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";

const SearchedUsersDropdown = ({onOpen}) => {
    const {isOpen, onClose} =useDisclosure()
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                <ModalBody>
                    <Box width="600px" bg="white" position="absolute" top="5vh" left="27.9vw">
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                        <li>This is a search item</li>
                    </Box>
                    </ModalBody>
                </ModalContent>
        </Modal>
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
