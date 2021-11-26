import React from "react";
import { Box, Center } from "@chakra-ui/layout";
import SignInContainer from "./subs/SignInContainer";
import { useLocation } from "react-router";

const Login =(props)=>{
    const location = useLocation()
    const value = props.location ? props.location : location.state.from
    return(
        <Box width="100vw" h="100vh" backgroundColor="#F8F8F8">
            <Center pt="5%">
                <SignInContainer location={value} {...props} />
            </Center>
        </Box>
    )
}

export default Login;