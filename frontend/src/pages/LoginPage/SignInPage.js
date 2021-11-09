import React from "react";
import NavBar from "../../components/PageSections/NavBar";
import { Box } from "@chakra-ui/layout";
import SignInContainer from "./subs/SignInContainer";


const SignInPage =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <NavBar />
            <SignInContainer />
           
        </Box>
    )
}

export default SignInPage;