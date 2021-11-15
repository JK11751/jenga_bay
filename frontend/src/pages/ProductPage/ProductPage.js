import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/PageSections/NavBar";
// import ProductDetailsCard from "./subs/ProductDetailsCard";
import ProductDetails from "../ProductPage/subs/ProductDetails"
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {MdKeyboardArrowRight} from "react-icons/md"
// import Footer from "../../components/PageSections/Footer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { useSelector } from "react-redux";

const ProductPage = ({handleAddProduct,cartItems})=> {
    const productReducer = useSelector(({ productReducer }) => productReducer);

    return(
        <>
        {productReducer.productDetails.map((product) => {
            return(
        <Box height="100vh">
            <NavBar cartItems={cartItems}/>
            <Flex overflowY="hidden" flexDir="row">
                <Flex flexDir="column">
                    <Breadcrumb mt={7} textSize="1.5em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Products</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="#">{product.item_seller.business_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="#">{product.category}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">{product.item_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Box p={0}>   
                        <ImageSlider />
                    </Box>
                </Flex>
                <Spacer/>
                <Flex bgColor="#E9F6FF" alignItems="flex-start" width="50%" flexDir="column">
                    <Box ml={5}>
                    <ProductDetails handleAddProduct={handleAddProduct} />
                    </Box>
                </Flex>
            </Flex>
        </Box>)})}
        </>
    )
}

export default ProductPage;