import React from "react";
import { VStack, Flex, HStack, Spacer, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import icon from "../../assets/JengaBay.png";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { FiMenu } from "react-icons/fi"
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
import SideBar from "./SideBar";
import { useHistory } from "react-router";
import CartIcon from "../Products/cartIcon";

const NavBar = ({cartItems}) => {
  const history= useHistory()
  const [show, setShow] = React.useState(false)
  const handleToggle = (setting) => setShow(setting)

  const handleOpenCart = () => {
    history.push("/cart")
  }

  return (
    <>
      <Flex
        position="fixed"
        top={0}
        zIndex="1000"
        pl={3}
        pr={3}
        shadow="lg"
        alignItems="center"
        background="#007ACC"
        flexDir="column"
      >
      <Flex alignSelf="flex-start" alignItems="center" height="60px" flexDir="row" mr="2.5vw" ml="2.5vw">
        <Box > 
          <Icon
            onClick={() => handleToggle(true)}
            color="#fff"
            _hover={{cursor:"pointer"}}
            as={FiMenu}
            h={10}
            w={7}
            mr={6}
            mb={1}
          />
        </Box>
        <Flex alignSelf="center" flexShrink={0}>
          <Link to="/">
            <Image src={icon} />
          </Link>
        </Flex>

        <SearchBar />
        <Spacer />
        <HStack ml="12vw" spacing="20px">
          <Icon color="#fff" h={7} w={7} as={IoMdNotificationsOutline} />
          <Box>
          <CartIcon handleOpenCart={() => handleOpenCart()} number={cartItems.length} />   
          </Box>
          <Popover mr={5} isLazy>
            <PopoverTrigger>
              <Button variant="ghost">
                <HStack>
                  <Icon
                    color="#fff"
                    h={7}
                    w={7}
                    as={MdOutlineAccountCircle}
                  />
                  <Icon color="#fff" h={5} w={4} as={IoIosArrowDown} />
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
                      background="#fff"
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
                      textColor="#000"
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
      </Flex>
      <SideBar show={show} handleToggle={handleToggle} />
    </>
  );
};

export default NavBar;
