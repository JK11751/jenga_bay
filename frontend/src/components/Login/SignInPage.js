import React from "react";
import NavBar from "../shared/NavBar";
import { Box } from "@chakra-ui/layout";
import SignIn from "./subs/SignIn";


const SignInPage =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <NavBar/>
            <SignIn/>
           
        </Box>
    )
}

export default SignInPage;