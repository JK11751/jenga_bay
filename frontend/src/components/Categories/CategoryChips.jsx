// import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import CategoryList from "./CategoryList";
import { Tag, TagLabel } from "@chakra-ui/tag";
import "./CategoryChips.css"
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md"
import { Icon } from "@chakra-ui/icon";

const CategoryChips = () => {

  const slideLeft =()=>{
    var slider = document.getElementById("category-slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const slideRight =()=>{
    var slider = document.getElementById("category-slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }


  return(
      <Box ml="7%" d="flex" flexDir="row">
          <button id="category-button" onClick={slideLeft}>
            <Icon h={9} w={9} as={MdOutlineKeyboardArrowLeft}></Icon>
          </button>
          <div id="category-slider">  
            {CategoryList.map((category) =>
            
              (<Tag pl={4} pr={4} height="30px" width="auto" borderRadius="full" variant="solid" colorScheme="green" key={category.id} mr={2}><TagLabel>{category.value}</TagLabel></Tag>)
            )}  
          </div>
          <button id="category-button" onClick={slideRight}>
            <Icon h={9} w={9} as={MdOutlineKeyboardArrowRight}></Icon>
          </button>
      </Box>
  )
}

export default CategoryChips;