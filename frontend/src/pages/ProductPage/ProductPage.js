import { Box } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/PageSections/NavBar";
import ItemDescription from "../../components/Products/ItemDescription";
import ProductDetailsCard from "./subs/ProductDetailsCard";
import {MdKeyboardArrowRight} from "react-icons/md"
import { Icon } from "@chakra-ui/icon";
 

const ProductPage = ()=> {
    return(
        <Box>
            <NavBar />
            <Box textSize="1.5em" fontFamily="monospace" textTransform="uppercase" mt="2vh" ml="5vw">
            Home
            <Icon as={MdKeyboardArrowRight}/>
            Products
            <Icon as={MdKeyboardArrowRight}/>  
            Cement 
            <Icon as={MdKeyboardArrowRight}/>
            Bamburi-Cement
            </Box>
            <ProductDetailsCard />
            <ItemDescription/>
        </Box>
        
    )
}

export default ProductPage;