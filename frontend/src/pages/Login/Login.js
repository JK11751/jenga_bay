import React from "react";
import { Box, Center } from "@chakra-ui/layout";
import SignInContainer from "./subs/SignInContainer";


const Login =(props)=>{
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <Center pt="5%">
                <SignInContainer location={props.location} />
            </Center>
        </Box>
    )
}

export default Login;