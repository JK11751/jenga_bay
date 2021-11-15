import React from "react";
import SignUpContainer from "./subs/SignUpContainer";
import NavBar from "../../components/PageSections/NavBar";
import { Box } from "@chakra-ui/layout";

const SignUpPage =({cartItems})=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <NavBar cartItems={cartItems}/>
            <SignUpContainer />
        </Box>
    )
}

export default SignUpPage;