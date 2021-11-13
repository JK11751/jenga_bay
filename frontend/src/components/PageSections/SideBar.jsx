import React, {useEffect,useState, useRef} from "react";
import logo from "../../assets/JengaBay.png"
import { Box,HStack, VStack, Flex } from "@chakra-ui/layout";
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
} from "@chakra-ui/react"
import CategoryList from "../Categories/CategoryList";


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
      style={{ height: "100vh", width: "300px", zIndex: 100 }}
    >
     <VStack alignItems="flex-start" ref={boxRef} color="black" bg="#F5F5F5" h="100vh" w="250px">
        <VStack spacing="10px" pt={4} pl={4} pr={4} width="100%" color="white">
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
        {/* <Box p={5}  m="5px">
          <Text>Home</Text>
        </Box> */}
        {/* Insert other contents */}
        <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem isDisabled>
            <h2>
              <AccordionButton _expanded={{ bg: "#007acc", color: "white" }} borderRightRadius="50px" width="250px">
                <Box width="100%" textAlign="left">
                  Home
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#007acc", color: "white" }} borderRightRadius="50px" width="250px">
                <Box width="100%" textAlign="left">
                  Categories
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {CategoryList.map((category) =>
              (<p key={category.id}>{category.value}</p>)
            )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Slide>}</>
  );
};
export default SideBar;
