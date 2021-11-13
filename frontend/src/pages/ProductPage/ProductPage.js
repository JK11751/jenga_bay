import { Box } from "@chakra-ui/layout";
import React from "react"
import NavBar from "../../components/PageSections/NavBar";
import ItemDescription from "../../components/Products/ItemDescription";
import ProductDetailsCard from "./subs/ProductDetailsCard";
import {MdKeyboardArrowRight} from "react-icons/md"
import Footer from "../../components/PageSections/Footer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { useSelector } from "react-redux";

const ProductPage = ()=> {
    const productData = useSelector((state) => state.productReducer).productDetails;
    return(
        <Box>
            <NavBar />
            <Breadcrumb textSize="1.5em" fontFamily="monospace" textTransform="uppercase" mt="2vh" ml="5vw" spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href="#">Bamburi Cement</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href="#">{productData.category}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{productData.item_name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ProductDetailsCard />
            <ItemDescription/>
            <Footer />
        </Box>
        
    )
}

export default ProductPage;