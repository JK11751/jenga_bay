import React from "react";
import SignUpContainer from "./subs/SignUpContainer";
import { Box, Center } from "@chakra-ui/layout";

const SignUp =()=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <Center pt="3%">
                <SignUpContainer />
            </Center>
        </Box>
    )
}

export default SignUp;