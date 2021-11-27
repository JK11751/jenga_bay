import React from "react";
import CartIcon from "../Products/cartIcon";
import { FiMenu, FiHelpCircle } from "react-icons/fi"
import icon from "../../assets/JengaBay.png";
import { Image } from "@chakra-ui/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/icon";
import SideBar from "./SideBar";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  VStack,
  IconButton,
  CloseButton,
//   Avatar,
  Center,
} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
  } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { LogoutDialogue } from "../LogoutDialogue";
import { useDisclosure } from "@chakra-ui/hooks";
// import { useLocation } from "react-router";

const NavBar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const history= useHistory()
  const [show, setShow] = React.useState(false)
  const handleToggle = (setting) => setShow(setting)
  const cart = useSelector(({ cartReducer }) => cartReducer);
  const {isOpen, onOpen, onClose} = useDisclosure()
  // const location = useLocation()
  // const value = location.state.from

  const handleOpenCart = () => {
    history.push("/cart")
  }

  return (
    <React.Fragment>
      <chakra.header
        background="#007ACC"
        w="100%"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        top={0}
        zIndex="200"
        position="sticky"
      >
        <Flex alignItems="center" justifyContent="space-between" >
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
              </VStack>
            </Box>

              <Icon
                  onClick={() => handleToggle(true)}
                  color="#fff"
                  _hover={{cursor:"pointer"}}
                  as={FiMenu}
                  h={10}
                  w={7}
                  // mr={6}
                  // mb={1}
              />
              <VisuallyHidden>Menu</VisuallyHidden>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>    
              <Flex w="full" alignSelf="center" flexShrink={0}>
                  <Link to="/">
                      <Image src={icon} />
                  </Link>
              </Flex>
            </HStack>
          </HStack>
          <Center>
            <SearchBar/>
          </Center>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
            pr={4}
          >

            <chakra.a
              pl={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <Icon color="#fff" h={6} w={6} as={FiHelpCircle} />
              <VisuallyHidden>Shopping Cart</VisuallyHidden>
            </chakra.a>
            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <CartIcon handleOpenCart={() => handleOpenCart()} number={cart.cartItems.length}
               />
              <VisuallyHidden>Shopping Cart</VisuallyHidden>
            </chakra.a>
            <Menu isLazy>
            <MenuButton p={0} bg="transparent">
              <Icon
                color="#fff"
                h={7}
                w={7}
                as={MdOutlineAccountCircle}
              />
              <Icon color="#fff" h={5} w={4} as={IoIosArrowDown} />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Edit Profile</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
              <MenuItem alignItems="center">
                  <Button
                    h="30px"
                    alignItems="center"
                    fontWeight="500"
                    fontSize="13px"
                    w="130px"
                    textColor="#18A0FB"
                    background="#fff"
                    variant="outline"
                    onClick={()=>history.push({pathname:"/signup"
                    // , state:{from: location.pathname}
                    })}
                  >
                    Sign Up
                  </Button>
              </MenuItem>
                <MenuItem alignItems="center">
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
                      onClick={()=>history.push({pathname:"/login"
                      // , state:{from: location.pathname}
                      })}
                    >
                      Login
                    </Button>
                </MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => onOpen()}>LOG OUT</MenuItem>
            </MenuList>
          </Menu>
            {/* <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            /> */}
          </HStack>
        </Flex>
      </chakra.header>
      <SideBar show={show} handleToggle={handleToggle} />
      <LogoutDialogue isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
}

export default NavBar;