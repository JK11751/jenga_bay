import React, {useEffect, useState} from 'react'
import NavBar from '../../components/PageSections/NavBar'
import Footer from "../../components/PageSections/Footer"
import ProductCard from '../../components/Products/ProductCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import {MdKeyboardArrowRight} from "react-icons/md"
import { Box, Center, Flex, HStack, Text, Button, Spacer } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllSellers, handleGetSellerProductsFromSearch,handleGetSellerDetails } from "../../redux/appActions/sellerActions";
import { Link } from 'react-router-dom'
import { CategoryFilters } from '../../components/Categories/CategoryFilters'
import { Divider } from '@chakra-ui/react';
// import { Search } from './search';


export const SearchResultsSellers = () => {
    const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    const itemList = useSelector((state) => state.sellerReducer).searchedProducts
    const [searchedItems,setSearchedItems] = useState([])

    // getting the search parameter from the url
    const query_param = new URLSearchParams(window.location.search);
    const searchQuery = query_param.get('search')


    const {sellerId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(handleGetSellerProductsFromSearch(sellerId, searchQuery))
        dispatch(handleGetSellerDetails(sellerId))
    }, [searchQuery, sellerId, dispatch])
    
    useEffect(() => {
        setSearchedItems(itemList)
    }, [itemList])

    useEffect(() => { 
        dispatch(handleGetAllSellers())
    }, [dispatch])


    return (
        <Box>
            <NavBar />
            {sellerReducer.sellerDetails.map((seller)=>{ 
                return(
                    <>
                        <Box>
                            <Box height="300px" width="100%" bg="#000" />
                            <Center>
                                <Box mt={5} mb={5} textAlign="center" pos="absolute" top={40}  color="white" p={4} as="span" fontFamily="sans-serif" textTransform="uppercase" fontSize="4em">{seller.business_name}</Box>
                            </Center>
                        </Box>
                        
                        <Breadcrumb mt="30px" textSize="1.5em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to={{pathname: `/`}}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to={{pathname: `/sellers/${seller.id}/${seller.business_name}`}}>{seller.business_name}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>SearchResults</BreadcrumbLink>
                            </BreadcrumbItem>
                            {/* <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>{searchQuery}</BreadcrumbLink>
                            </BreadcrumbItem> */}
                        </Breadcrumb>    
            <Center>
                <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg">1-{searchedItems.length} of {searchedItems.length} search results for <Box as="span" color="#FFA90A">"{searchQuery}"</Box></Box>
            </Center>
            <Center>
                <HStack spacing="20px" mt={2} alignItems="top">
                    <CategoryFilters sellerReducer={sellerReducer} categoryName={searchQuery}/>
                    <Flex p={4} height="auto" bg="#F5F5F5" borderRadius="10px" width="65vw" flexWrap="wrap" >
                        <Flex flexDir="column">
                            <Flex p={2}>
                                <Text p={2} fontWeight="bold">Search results for "{searchQuery}" in {seller.business_name}</Text>
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
                            <Text p={4} fontWeight="bold">{searchedItems.length} items found</Text>
                            <Divider width="63vw" mb={2} />
                            <Flex flexWrap="wrap">
                            {searchedItems.map((product)=>{ 
                                return(
                                    <ProductCard seller price={product.item_price} sellerId={product.item_seller.id} product={product} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={seller.business_name}/> 
                                )
                            })}</Flex>
                        </Flex>
                        {searchedItems.length === 0 && <Text p={20}>There are no products here</Text> }
                        
                    </Flex>
                </HStack>
            </Center></>)})}
            <Footer/>
        </Box>
    )
}
