// import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import CategoryList from "../../data/CategoryList";
import { Tag, TagLabel } from "@chakra-ui/tag";
import "./CategoryChips.css"
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md"
import { Icon } from "@chakra-ui/icon";
import { useHistory } from "react-router";

const CategoryChips = () => {

  const history = useHistory()

  //for smooth scrolling of category chips
  function sideScroll(element,direction,speed,distance,step){
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
      if(direction === 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  const slideLeft =()=>{
    var slider = document.getElementById("category-slider");
    sideScroll(slider,'left',25,100,30);
  }

  const slideRight =()=>{
    var slider = document.getElementById("category-slider");
    sideScroll(slider,'right',25,100,30);
  }


  return(
      <Box ml="3%" d="flex" flexDir="row">
          <button id="category-button left" onClick={slideLeft}>
            <Icon h={9} w={9} as={MdOutlineKeyboardArrowLeft}></Icon>
          </button>
          <div id="category-slider">  
            {CategoryList.map((category) =>
            
              (<Tag _hover={{cursor:"pointer"}} onClick={() => history.push(`/categories/${category.value}`)} pl={4} pr={4} height="30px" width="auto" borderRadius="full" variant="solid" backgroundColor="#24A8FF" key={category.id} mr={4}><TagLabel>{category.name}</TagLabel></Tag>)
            )}  
          </div>
          <button id="category-button right" onClick={slideRight}>
            <Icon h={9} w={9} as={MdOutlineKeyboardArrowRight}></Icon>
          </button>
      </Box>
  )
}

export default CategoryChips;