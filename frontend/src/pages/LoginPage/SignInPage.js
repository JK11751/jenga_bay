import React from "react";
import { Box, Center } from "@chakra-ui/layout";
import SignInContainer from "./subs/SignInContainer";


const SignInPage =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <Center pt="5%">
                <SignInContainer  />
            </Center>
        </Box>
    )
}

export default SignInPage;