import React from "react";
import SignUpContainer from "./subs/SignUpContainer";
import { Box } from "@chakra-ui/layout";

const SignUpPage =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <SignUpContainer />
        </Box>
    )
}

export default SignUpPage;