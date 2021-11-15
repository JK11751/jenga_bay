import React from "react";
import NavBar from "../../components/PageSections/NavBar";
import { Box } from "@chakra-ui/layout";
import SignInContainer from "./subs/SignInContainer";


const SignInPage =({cartItems})=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <NavBar cartItems={cartItems} />
            <SignInContainer />
           
        </Box>
    )
}

export default SignInPage;