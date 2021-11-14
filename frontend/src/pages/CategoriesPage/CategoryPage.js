import React from 'react'
import NavBar from '../../components/PageSections/NavBar'
import Footer from "../../components/PageSections/Footer"
import CategoryChips from "../../components/Categories/CategoryChips"
import ProductsContainer from "./subs/ProductsContainer"
// import logo from "../../assets/JengaBay.png"
import { Box, Flex} from '@chakra-ui/layout'
// import { Image } from '@chakra-ui/image'

export const CategoryPage = () => {
    return (
        <Box>
            <NavBar/>
            <Flex flexDir="row">
                <Box
                    height="auto"
                    width="20%"
                    background="#F8f8f8"
                >
                <p>Categories go here</p>
                    {/* <Image ml={5} mt={5} src={logo} alt="logo" /> */}
                </Box>
                <Flex width="83vw" alignItems="center" flexDir="column">
                    <CategoryChips/>
                    <Box as="span" fontSize="lg">Category Name</Box>
                    <ProductsContainer />
                </Flex>
            </Flex>
            <Footer/>
        </Box>
    )
}
