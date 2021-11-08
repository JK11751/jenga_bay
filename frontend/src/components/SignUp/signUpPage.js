import React from "react";
import SignUp from "./subs/SignUp";
import NavBar from "../shared/NavBar";
import { Box } from "@chakra-ui/layout";

const SignUpPage =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <NavBar/>
            <SignUp />
        </Box>
    )
}

export default SignUpPage;