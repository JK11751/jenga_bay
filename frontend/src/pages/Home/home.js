import React from "react"
import { Box } from "@chakra-ui/layout";
import NavBar from "../../components/shared/NavBar";
import ProductContainer from "../../components/shared/ProductContainer";
import CategoryChips from "../../components/shared/CategoryChips";
// import ProductList from "../shared/ProductList";

const Home = () => {
    return(
        <Box width="100vw" height="100vh">
            <NavBar />
            <CategoryChips />
            <ProductContainer alignSelf="center"/> 
        </Box>
    )
}
export default Home;