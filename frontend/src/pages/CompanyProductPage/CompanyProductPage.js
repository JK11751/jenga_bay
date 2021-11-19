import React, { useEffect } from 'react';
import NavBar from '../../components/PageSections/NavBar';
import Footer from '../../components/PageSections/Footer';
import { Box, Flex, Center, Text , Divider, HStack , Spacer, Button } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import ProductCard from '../../components/Products/ProductCard';
// import CategoryChips from '../../components/Categories/CategoryChips';
import { CategoryFilters } from "../../components/Categories/CategoryFilters"
import { handleGetSellerItems, handleGetSellerDetails, handleGetAllSellers  } from '../../redux/actions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import {MdKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-router-dom'
import { Search } from './subs/search';

const  CompanyProductPage=({cartItems,handleAddProduct})=> {
    const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    // const allSellers = useSelector((state) => state.sellerReducer).allSellers
    // const [seller_id, setSeller_id] = useState({})
    const {sellerId} = useParams()
    // const {sellerName} = useParams()
    const dispatch = useDispatch()

    // function findArrayElementByTitle(allSellers, business_name) {
    //     return allSellers.find((element) => {
    //       return element.business_name === business_name;
        
    //     })
    // }

    useEffect(() => { 
        dispatch(handleGetAllSellers())
        // console.log("This is the element",findArrayElementByTitle(allSellers, sellerName))
        // console.log("This is the seller name", sellerName)
        // setSeller_id(findArrayElementByTitle(allSellers, sellerName))
        // console.log("this is seller element",seller_id)
        dispatch(handleGetSellerDetails(sellerId))
        dispatch(handleGetSellerItems(sellerId))
    }, [sellerId,dispatch])

    
    return(
        <Box flexDir="column" width="100vw" height="100vh">
            <NavBar cartItems={cartItems} />
            {sellerReducer.sellerDetails.map((seller) => {
                return(
                    <>
                        <Box>
                            <Box height="300px" width="100vw" bg="#000" />
                            <Center>
                                <Box mt={5} mb={5} textAlign="center" pos="absolute" top={40}  color="white" p={4} as="span" fontFamily="sans-serif" textTransform="uppercase" fontSize="4em">{seller.business_name}</Box>
                            </Center>
                        </Box>
                        {/* <CategoryChips /> */}
                        <Breadcrumb p={5} textSize="1.5em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to={{pathname: `/`}}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>{seller.business_name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
            <Center>
                <HStack spacing="20px" mt={2} alignItems="top">
                    <CategoryFilters />
                    <Flex p={4} height="auto" bg="#F5F5F5" borderRadius="10px" width="65vw" flexWrap="wrap" >
                        <Flex flexDir="column">
                            <Flex p={2}>
                                <Text p={2} fontWeight="bold">{seller.business_name}</Text>
                                <Spacer />
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                        Sort by: Popularity
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>A-Z</MenuItem>
                                        <MenuItem>Z-A</MenuItem>
                                        <MenuItem>Price: High To Low</MenuItem>
                                        <MenuItem>Product Rating</MenuItem>
                                        <MenuItem>Price: Low To High</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                            <Divider width="63vw" />
                            <Flex>
                                <Text p={4} fontWeight="bold">{sellerReducer.sellerItems.length} items found</Text>
                                <Spacer />
                                <Search/>
                            </Flex>
                            <Divider width="63vw" mb={2} />
                            <Flex flexWrap="wrap">
                            {sellerReducer.sellerItems.map((product)=>{ 
                                return(
                                    <ProductCard price={product.item_price} sellerId={product.item_seller.id} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={seller.business_name}/> 
                                )
                            })}</Flex>
                        </Flex>
                        {sellerReducer.sellerItems.length === 0 && <Text p={20}>There are no products here</Text> }
                        
                    </Flex>
                </HStack>
            </Center>
            </>
            )})}
            <Footer /> 
        </Box>
    )
}
export default CompanyProductPage;