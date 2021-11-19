import React, { useEffect } from "react"
import { Box, Flex, Center, Spacer, Text, Icon, HStack, Spinner } from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons"
import NavBar from "../../components/PageSections/NavBar";
import ProductCard from "../../components/Products/ProductCard";
import CategoryList from "../../components/Categories/CategoryList";
import CategoryChips from "../../components/Categories/CategoryChips"
import Footer from "../../components/PageSections/Footer";
import AdsCarousel from "./subs/AdsCarousel";
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./subs/CategoryCard";
import { Companies } from "./subs/Companies";
import image from "../../assets/bamburi.jpg"
import CompanyCard from "./subs/CompanyCard";
import RegisterAsASeller from "./subs/RegisterAsASeller";

const Home = ({handleAddProduct, cartItems}) => {

    const [isLoading, setisLoading] = React.useState(true)
    
    const dispatch = useDispatch();
    const productReducer = useSelector(({ productReducer }) => productReducer);// setting the value of product Reducer to the data fetched from the api

    //fetching data from the api
    useEffect(() => {
        dispatch(handleGetProducts())// dispatches the action to get the data from the api  
        setisLoading(false)  
    }, [dispatch]);

    localStorage.setItem("Allproducts", JSON.stringify(productReducer));console.log("Allproducts")
    return(
        <>
        {isLoading ? 
        <Center>
            <Spinner thickness="4px"
                mt="45vh"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"/>
        </Center>
        :
        <Box alignItems="center" bgColor="#fff" flexDir="column" width="full" height="100vh">
            <NavBar cartItems={cartItems} />
            <Center mt={5}>
                <AdsCarousel alignSelf="center"/>
            </Center>
            <Center>
                <CategoryChips />
            </Center>
            <Box mb={10}>
                <Center>
                    <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg" textTransform="uppercase">POPULAR CATEGORIES</Box>
                </Center>
                <Center>
                    <Flex  borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap">  
                        {CategoryList.slice(0, 10).map((category) =>
                            (
                            <CategoryCard category_name={category.value}/>
                            )
                        )}
                    </Flex>
                </Center>
            </Box> 
            <Center> 
                <Flex shadow="lg" height="auto" bg="#fff" borderRadius="10px" width="90vw" flexWrap="wrap" >
                    <Flex p={2} bg="#E9F6FF" borderTopRadius="10px"  width="inherit" color="#000" flexDir="column">
                        <Flex p={2}>
                            <Text p={2} fontWeight="bold">POPULAR PRODUCTS THIS WEEK</Text>
                            <Spacer />
                            <HStack>
                                <Text>See More products</Text>
                                <Icon as={ChevronRightIcon}/>
                            </HStack>
                        </Flex> 
                    </Flex>
                    <Flex pl={8} py={5}>
                    {productReducer.products.slice(0, 6).map((product,key)=>{ 
                        return(
                            <ProductCard sellerId={product.item_seller.id} price={product.item_price} key={key} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
                        )
                    })}</Flex>
                </Flex>  
            </Center>   
            <Box my={10}>
                {/* <Center>
                    <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg" textTransform="uppercase">POPULAR CATEGORIES</Box>
                </Center> */}
                <Center>
                    <RegisterAsASeller/>
                </Center>
            </Box> 
            <Box my={10}>
                <Center>
                        <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg" textTransform="uppercase">BRAND PARTNERS</Box>
                    </Center>
                <Center>
                <Flex px="3" borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap">
                        {Companies.map((company) => {
                            return(
                            <CompanyCard seller_id={1} company_name={company.name} image={image}/>
                        )})}
                    </Flex>
                </Center>  
            </Box>
            <Center>
                <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg" textTransform="uppercase">You May Also Like</Box>
            </Center>
            <Flex ml="5vw" pl={6} borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap">
                {productReducer.products.map((product,key)=>{ 
                    return(
                        <ProductCard price={product.item_price} key={key} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
                    )
                })}
            </Flex>   
            <Box p={3}>
                <Footer/>
            </Box>   
        </Box>}
        </>
    )
}
export default Home;