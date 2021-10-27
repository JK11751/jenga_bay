import React from "react";
import SignUp from "./subs/signUp";
import NavBar from "../shared/NavBar";
import { Box } from "@chakra-ui/layout";

const SignUpPage =()=>{
    return(
        <Box width="100vw" h="100vh">
            <NavBar/>
            <SignUp/>
        </Box>
    )
}

export default SignUpPage;