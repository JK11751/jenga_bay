import React from "react";
import { VStack, Flex, HStack, Spacer,Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/logo.png";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { BiMenu, BiMenuAltLeft, BiCartAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Icon } from "@chakra-ui/icon";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import SideBar from "./SideBar";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showMenu, setShowMenu] = React.useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
    onToggle();
  };
  return (
    <>
      <Flex
        pl={10}
        pr={10}
        alignItems="center"
        background="#007ACC"
        flexDir="column"
      >
      
      <Flex alignSelf="flex-start" alignItems="center" height="60px" flexDir="row" ml="2vw">
        
        <Flex alignSelf="center" flexShrink={0}>
          <Link to="/">
            <Image src={icon} />
          </Link>
        </Flex>

        <SearchBar />
        <Spacer />
        <HStack ml="12vw" spacing="20px">
          <Icon color="#ffffff" h={7} w={7} as={IoMdNotificationsOutline} />
          <Icon color="#ffffff" h={7} w={7} as={BiCartAlt} />
          <Popover mr={5} isLazy>
            <PopoverTrigger>
              <Button variant="ghost">
                <HStack>
                  <Icon
                    color="#ffffff"
                    h={7}
                    w={7}
                    as={MdOutlineAccountCircle}
                  />
                  <Icon color="#ffffff" h={5} w={4} as={IoIosArrowDown} />
                </HStack>
              </Button>
            </PopoverTrigger>
            <PopoverContent width="200px">
              <PopoverBody>
                <VStack spacing="10px">
                  <Link to="/sign-up">
                    <Button
                      h="30px"
                      alignItems="center"
                      fontWeight="500"
                      fontSize="13px"
                      w="130px"
                      textColor="#18A0FB"
                      background="#ffffff"
                      variant="outline"
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/sign-in">
                    <Button
                      h="30px"
                      w="130px"
                      alignItems="center"
                      fontWeight="500"
                      fontSize="13px"
                      textColor="#ffffff"
                      colorScheme="#18A0FB"
                      background="#18A0FB"
                      variant="solid"
                    >
                      Login
                    </Button>
                  </Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
        </Flex>
        <Box alignItems="center" height="30px" backgroundColor="#0292f1" width="100vw" as="h6">
           <Box ml="5vw"> 
            {showMenu ? (
          <Icon
            onClick={handleClick}
            color="#fff"
            mr={5}
            as={BiMenu}
            h={7}
            w={7}
          />
        ) : (
          <Icon
            onClick={handleClick}
            color="#fff"
            mr={5}
            as={BiMenuAltLeft}
            h={7}
            w={7}
          />
        )}
        <Button fontWeight="normal" textColor="#fff" textAlign="center" variant="link">Register as a seller</Button></Box>
        </Box>
      </Flex>
      <SideBar isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};

export default NavBar;
