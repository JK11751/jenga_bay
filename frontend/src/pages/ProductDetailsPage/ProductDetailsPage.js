import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/PageSections/NavBar";
// import ProductDetailsCard from "./subs/ProductDetailsCard";
import ProductDetails from "./subs/ProductDetails"
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {MdKeyboardArrowRight} from "react-icons/md"
import Footer from "../../components/PageSections/Footer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductDetailsPage = ()=> {
    const productReducer = useSelector(({ productReducer }) => productReducer);

    return(
       
        <Box height="100vh">
            <NavBar />
            <Flex overflowY="hidden" flexDir="row">
                <Flex flexDir="column">
                    {productReducer.productDetails.map((product)=>{
                        return(
                    <Breadcrumb mt={7} textSize="1.5em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={{pathname: `/`}}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Products</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink as={Link} to={{pathname: `/sellers/${product.item_seller.id}/${product.item_seller.business_name}`}}>{product.item_seller.business_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink as={Link} to={{pathname: `/categories/${product.category}`}}>{product.category}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>{product.item_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>)})}
                    <Box p={0}>   
                        <ImageSlider />
                    </Box>
                </Flex>
                <Spacer/>
                <Flex bgColor="#E9F6FF" alignItems="flex-start" width="50%" flexDir="column">
                    <Box ml={5}>
                    <ProductDetails />
                    </Box>
                </Flex>
            </Flex>
            <Footer />
        </Box>
        
    )
}

export default ProductDetailsPage;