import React, { useEffect } from "react"
import { Box, Flex, Center } from "@chakra-ui/react";
import NavBar from "../../components/PageSections/NavBar";
import ProductCard from "../../components/Products/ProductCard";
import CategoryChips from "../../components/Categories/CategoryChips"
import Footer from "../../components/PageSections/Footer";
import AdsCarousel from "./AdsCarousel";
// import ProductList from "../shared/ProductList";
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";

const Home = ({handleAddProduct, cartItems}) => {

    // const [productList, setProductList] = useState([])

    //fetching data from the api
    const dispatch = useDispatch();
    const productReducer = useSelector(({ productReducer }) => productReducer);
    // setting the value of product Reducer to the data fetched from the api

    useEffect(() => {
        dispatch(handleGetProducts())// dispatches the action to get the data from the api    
    }, [dispatch]);

    // setProductList(productReducer.products)
    localStorage.setItem("Allproducts", JSON.stringify(productReducer));console.log("Allproducts")
    return(
        <Box alignItems="center" bgColor="#fff" flexDir="column" width="100vw" height="100vh">
            <NavBar cartItems={cartItems} />
            <Box alignSelf="center" ml="5vw" mt={5}>
                <AdsCarousel alignSelf="center"/>
            </Box>
            <Center>
                <CategoryChips />
            </Center>
            <Flex ml="5vw" borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap" pl={3} pr={3}>
            {productReducer.products.map((product,key)=>{ 
            return(
                <ProductCard price={product.item_price} key={key} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
            )
            })}</Flex>
            <Box p={3}>
            <Footer/>
            </Box>
            
        </Box>
    )
}
export default Home;