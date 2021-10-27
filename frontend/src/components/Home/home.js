import React from "react"
import { Box } from "@chakra-ui/layout";
import NavBar from "../shared/NavBar";
import ProductContainer from "../shared/ProductContainer";
// import ProductList from "../shared/ProductList";

const Home = () => {
    return(
        <Box width="100vw" height="100vh">
            <NavBar />
            <ProductContainer /> 
        </Box>
    )
}
export default Home;