import React from "react"
import { Box } from "@chakra-ui/layout";
import NavBar from "../../components/PageSections/NavBar";
import ProductContainer from "../../components/Products/ProductContainer"
import CategoryChips from "../../components/Categories/CategoryChips"
import Footer from "../../components/PageSections/Footer";
import AdsCarousel from "./AdsCarousel";
// import ProductList from "../shared/ProductList";

const Home = () => {
    // const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    return(
        <Box bgColor="#fff" flexDir="column" width="100vw" height="100vh">
            <NavBar />
            <Box alignSelf="center" ml="5vw" mt={5}>
                <AdsCarousel alignSelf="center"/>
            </Box>
            
            <CategoryChips />
            <ProductContainer alignSelf="center"/> 
            <Box p={3}>
            <Footer/>
            </Box>
            
        </Box>
    )
}
export default Home;