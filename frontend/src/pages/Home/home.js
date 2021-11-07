import React from "react"
import { Box } from "@chakra-ui/layout";
import NavBar from "../../components/shared/NavBar";
import ProductContainer from "../../components/shared/ProductContainer";
import CategoryChips from "../../components/shared/CategoryChips";
import { Image } from "@chakra-ui/image";
// import image from "../../assets/product.jpg"
// import ProductList from "../shared/ProductList";

const Home = () => {
    const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    return(
        <Box flexDir="column" width="100vw" height="100vh">
            <NavBar />
            <Box ml={20} mt={10}>
                <Image height="400px" width="90vw" borderRadius="10px" src={img}></Image>
            </Box>
            <CategoryChips />
            <ProductContainer alignSelf="center"/> 
        </Box>
    )
}
export default Home;