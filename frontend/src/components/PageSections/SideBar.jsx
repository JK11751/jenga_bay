import React, {useEffect,useState, useRef} from "react";
import logo from "../../assets/JengaBay.png"
import { Box,HStack, VStack, Text, Divider, Flex } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { BiMenu } from "react-icons/bi";
import { Icon } from "@chakra-ui/icon";


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
     <VStack ref={boxRef} color="black" bg="#F5F5F5" h="100vh" w="250px">
        <VStack spacing="10px" p={5} width="100%" color="white">
        <HStack spacing="50px">
        <Icon
          onClick={() => handleToggle(false)}
          color="#fff"
          mr={5}
          as={BiMenu}
          h={7}
          w={7}
          alignSelf="flex-start"
            />
        <Flex flexShrink={0}>
            <Link to="/"><Image src={logo}/></Link>
        </Flex>
          </HStack>
          <Divider colorScheme="black" size="100%" orientation="horizontal" />
        </VStack>
        <Box p={5}  m="5px">
          <Text></Text>
          <Text>Home</Text>
        </Box>
        {/* Insert other contents */}
      </VStack>
    </Slide>}</>
  );
};
export default SideBar;
