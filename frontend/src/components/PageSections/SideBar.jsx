import React from "react";
import logo from "../../assets/logo.png"
import { Box,HStack, VStack, Text, Divider, Flex } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { IconButton } from "@chakra-ui/button";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";

 // //function to set visibility of the search drop down and close it on click outside of the page
// function useComponentVisible(initialIsVisible) {

//     const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
//     const ref = useRef(null);

//    //function to hide dropdown
//     const handleHideDropdown = (event) => {
//       if (event.key === "Escape") {
//         setIsComponentVisible(false);
//       }
//     };
//     //function to close dropdown on outside click
//     const handleClickOutside = event => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setIsComponentVisible(false);
//       }
//     };
  
//     //useEffect to listen to any click or keyboard press event
//     useEffect(() => {
//       document.addEventListener("keydown", handleHideDropdown, true);
//       document.addEventListener("click", handleClickOutside, true);
//       return () => {
//         document.removeEventListener("keydown", handleHideDropdown, true);
//         document.removeEventListener("click", handleClickOutside, true);
//       };
//     });
  
//     return { ref, isComponentVisible, setIsComponentVisible };
// }

const SideBar = ({ isOpen, handleClick }) => {

// const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  return (
    <Slide
      direction="left"
      in={isOpen}
      style={{ height: "100vh", width: "300px", zIndex: 100 }}
    >
      <VStack color="black" bg="#007ACC" h="100vh" w="250px">
        <VStack spacing="10px" p={5} width="100%" color="white">
        <HStack spacing="50px">
        <Flex flexShrink={0}>
            <Link to="/"><Image src={logo}/></Link>
        </Flex>
          <IconButton
            w="20px"
            alignSelf="flex-end"
            aria-label="Close Control Panel"
            icon={<IoMdClose />}
            onClick={handleClick}
            color="black"
          /></HStack>
          <Divider colorScheme="black" size="100%" orientation="horizontal" />
        </VStack>
        <Box p={5}  m="5px">
          <Text>Home</Text>
        </Box>
        {/* Insert other contents */}
      </VStack>
    </Slide>
  );
};
export default SideBar;
