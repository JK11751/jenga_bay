import React from "react"
import { Flex, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/facebook.png"

const NavBar = () => {
    return(
        <Flex>
            <Image src={icon}/>
            <Spacer/>
            <div>hello nav bar</div>
        </Flex>
        
    )
}

export default NavBar;