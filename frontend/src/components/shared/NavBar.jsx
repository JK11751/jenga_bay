import React, {useState} from "react"
import { Divider, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/logo.png"
// import { Button} from "@chakra-ui/button";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {BiMenu, BiMenuAltLeft, BiCartAlt} from "react-icons/bi"
import {IoIosArrowDown} from "react-icons/io"
import {MdOutlineAccountCircle} from "react-icons/md"
import {IoMdNotificationsOutline} from "react-icons/io"
import { Icon } from "@chakra-ui/icon";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(true)
    const handleClick = () => setShowMenu(!showMenu);
    return(
        <Flex height="50px" pl={10} pr={10} alignItems="center" background="#007ACC">
        {showMenu ? <Icon onClick={handleClick} color="#FFFFFF" mr={5} as={BiMenu} h={9} w={9}/>: <Icon onClick={handleClick} color="#FFFFFF" mr={5} as={BiMenuAltLeft} h={9} w={9}/>}
        <Flex flexShrink={0}>
            <Link to="/"><Image src={icon}/></Link>
        </Flex>
            
            <SearchBar />
            <Spacer/>
            {/* <HStack spacing="10px">
                <Link to="/sign-up"><Button h="30px" alignItems="center" fontWeight="500" fontSize="13px" w="130px" textColor="#18A0FB" background="#ffffff" variant="outline">Sign Up</Button></Link>
                <Link to="/sign-in"  ><Button h="30px" w="130px" alignItems="center" fontWeight="500" fontSize="13px" textColor="#ffffff" colorScheme="#18A0FB" background="#18A0FB" variant="solid">Login</Button></Link>
            </HStack>  */}
            <HStack spacing="30px">
                <Icon color="#ffffff" h={7} w={7} as={IoMdNotificationsOutline}/>
                <Icon color="#ffffff" h={7} w={7} as={BiCartAlt}/>
                <Divider variant="solid" size="10px" orientation="vertical" /><HStack>
                <Icon color="#ffffff" h={7} w={7} as={MdOutlineAccountCircle}/>
                <Icon color="#ffffff" h={5} w={4} as={IoIosArrowDown}/></HStack>

            </HStack>
        </Flex>
        
    )
}

export default NavBar;