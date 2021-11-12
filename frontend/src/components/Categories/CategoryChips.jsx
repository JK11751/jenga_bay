import { Button } from "@chakra-ui/button";
import { Flex, Box } from "@chakra-ui/layout";
import CategoryList from "./CategoryList";
import { useRef } from "react";
import { Tag, TagLabel } from "@chakra-ui/tag";


const CategoryChips = () => {

    const contentWrapper = useRef(null);


    const sideScroll = (
        element,
        speed,
        distance,
        step,
      ) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
        }, speed);
        console.log("successful")
      };

    return(
        <Box d="flex" flexDir="row">
            <button onClick={() => {
            sideScroll(contentWrapper.current, 25, 50, -10);
          }}>LEFT</button>
            <Flex ref={contentWrapper} flexDir="row" overflow="hidden" maxWidth="800px"  mt={5} mb={5}>
               
                {CategoryList.map((category) =>
                
                    (<Tag height="44px" size="5xl" borderRadius="full" variant="solid" colorScheme="green" key={category.id} mr={2}><TagLabel>{category.value}</TagLabel></Tag>)
                )}  

            </Flex>
            <button onClick={() => {
            sideScroll(contentWrapper.current, 25, 50, -10);
          }}>RIGHT</button>
        </Box>
    )
}

export default CategoryChips;