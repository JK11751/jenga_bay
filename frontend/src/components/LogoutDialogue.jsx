import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { handleLogoutUser } from '../redux/appActions/authActions';

export const LogoutDialogue = (props) => {
    const cancelRef = React.useRef()
    const dispatch = useDispatch()
  
    return (
        <AlertDialog
          isOpen={props.isOpen}
          leastDestructiveRef={cancelRef}
          onClose={props.onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Log Out
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure you would like to log out? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button colorScheme="green" ref={cancelRef} onClick={props.onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() => {dispatch(handleLogoutUser());
              // history.push({pathname:"/login"
              // , state:{from: location.pathname}
              // })
              }} ml={3}>
                  Proceed to Log Out
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    )
}
