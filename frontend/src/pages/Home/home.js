import React, {useEffect, useState } from "react"
import { Box } from "@chakra-ui/layout";
import NavBar from "../../components/PageSections/NavBar";
import ProductContainer from "../../components/Products/ProductContainer"
import CategoryChips from "../../components/Categories/CategoryChips"
import Footer from "../../components/PageSections/Footer";
import AdsCarousel from "./AdsCarousel";
// import ProductList from "../shared/ProductList";
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";

const Home = ({handleAddProduct, cartItems}) => {

    const [productList, setProductList] = useState([])

    //fetching data from the api
    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.productReducer).products
    // setting the value of product Reducer to the data fetched from the api
    useEffect(() => {
        dispatch(handleGetProducts())// dispatches the action to get the data from the api
        setProductList(productReducer)
    }, [dispatch,productReducer]);

    return(
        <Box bgColor="#fff" flexDir="column" width="100vw" height="100vh">
            <NavBar cartItems={cartItems} />
            <Box alignSelf="center" ml="5vw" mt={5}>
                <AdsCarousel alignSelf="center"/>
            </Box>
            
            <CategoryChips />
            <ProductContainer productList={productList} handleAddProduct={handleAddProduct} alignSelf="center"/> 
            <Box p={3}>
            <Footer/>
            </Box>
            
        </Box>
    )
}
export default Home;