import { Box } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/PageSections/NavBar";
import ItemDescription from "../../components/Products/ItemDescription";
import ProductDetailsCard from "./subs/ProductDetailsCard";
 

const ProductPage = ()=> {
    return(
        <Box>
            <NavBar />
            <Box mt="2vh" ml="5vw">Home/Products/Cement/Bamburi-Cement/</Box>
            <ProductDetailsCard />
            <ItemDescription/>
        </Box>
        
    )
}

export default ProductPage;