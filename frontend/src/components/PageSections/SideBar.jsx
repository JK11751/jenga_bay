import React, {useEffect,useState, useRef} from "react";
import logo from "../../assets/JengaBay.png"
import { Box,HStack, VStack, Flex, Text } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { BiMenu } from "react-icons/bi";
import { Icon } from "@chakra-ui/icon";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import {BiCategory} from "react-icons/bi"

import CategoryList from "../Categories/CategoryList";
import { useHistory } from "react-router";

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

const SidebarContent = ({ onClose, handleToggle,ref, ...rest }) => {

  const history = useHistory()

  return (
    <Box
      // forwardRef={ref}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      overflowY="scroll">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <VStack spacing="10px" width="100%" color="white">
          <HStack spacing="10px">
            <Icon
              onClick={() => handleToggle(false)}
              color="#000"
              as={BiMenu}
              h={7}
              w={7}
              alignSelf="flex-start"
              />
            <Flex flexShrink={0}>
              <Link to="/"><Image src={logo}/></Link>
            </Flex>
          </HStack>
          {/* <Divider colorScheme="black" size="100%" orientation="horizontal" /> */}
        </VStack>
      </Flex>
      <Accordion allowToggle>
          <AccordionItem borderRadius="lg" width="85%" borderColor="white">
            <h2>
              <AccordionButton _hover={{ bg: 'cyan.400', color: "white", borderRadius:"lg" }} mx="4" p={4} _expanded={{ bg: 'cyan.400', color: "white",borderRadius:"lg" }} _focus={{borderRadius:"none"}}>
                <Icon mr={4} as={BiCategory}/>
                <Box textAlign="left">
                  Categories
                </Box>
                <AccordionIcon ml={3} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {CategoryList.map((category) =>
              (<Text fontSize="1em" p={2} _hover={{cursor:"pointer"}} onClick={() => history.push(`/categories/${category.value}`)} key={category.id}>{category.name}</Text>)
            )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const SideBar = ({ show, handleToggle }) => {
  
  //handles closing of the sidebar when someone clicks outside
  function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(true);
          handleToggle(false)
        } else {
          setIsClicked(false);
          // onToggle()
        }
      }
    
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
      return isClicked;
  }

  const boxRef = useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef); 

  return (
    <>
    {!boxOutsideClick && 
    <Slide
      direction="left"
      in={show}
      ref={boxRef}
      style={{ height: "100vh", width: "300px", zIndex: 10000 }}
    >
      <SidebarContent handleToggle={handleToggle}/>
    </Slide>}</>
  );
};
export default SideBar;
