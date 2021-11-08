import { Box } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/Sections/NavBar";
import ItemDescription from "../../components/Products/ItemDescription";
import ProductDetail from "./subs/ProductDetails";
 

const ProductPage = ()=> {
    return(
        <Box>
            <NavBar />
            <ProductDetail />
            <ItemDescription />
        </Box>
        
    )
}

export default ProductPage;