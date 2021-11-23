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
import { useDispatch, useSelector } from "react-redux";
import { handleGetProductsFromSearch} from "../../redux/appActions/productActions";
import { handleGetAllSellers} from "../../redux/appActions/sellerActions";
import { Link } from 'react-router-dom'
import { CategoryFilters } from '../../components/Categories/CategoryFilters'
import { Divider } from '@chakra-ui/react';

export const SearchResultsProducts = () => {
    // const productReducer = useSelector(({ productReducer }) => productReducer);
    const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    const itemList = useSelector((state) => state.productReducer).searchedItems
    const [searchedItems,setSearchedItems] = useState([])
    // getting the search parameter from the url
    const query = new URLSearchParams(window.location.search);
    const search = query.get('search')

    // const {searchQuery} = useParams()
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(handleGetProductsFromSearch(search))
    }, [search,dispatch])
    
    useEffect(() => {
        setSearchedItems(itemList)
    }, [itemList])

    useEffect(() => { 
        dispatch(handleGetAllSellers())
    }, [dispatch])

    

    return (
        <Box>
            <NavBar />
            <Breadcrumb mt="30px" textSize="1.5em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={{pathname: `/`}}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink>All Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>{search}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Center>
                <Box mt={5} mb={5} textAlign="center" w="90vw" bg="#E9F6FF" p={4} as="span" fontSize="lg">1-{searchedItems.length} of {searchedItems.length} search results for <Box as="span" color="#FFA90A">"{search}"</Box></Box>
            </Center>
            <Center>
                <HStack spacing="20px" mt={2} alignItems="top">
                    <CategoryFilters sellerReducer={sellerReducer} categoryName={search}/>
                    <Flex p={4} height="auto" bg="#F5F5F5" borderRadius="10px" width="65vw" flexWrap="wrap" >
                        <Flex flexDir="column">
                            <Flex p={2}>
                                <Text p={2} fontWeight="bold">Search results for "{search}"</Text>
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
                                    <ProductCard price={product.item_price} sellerId={product.item_seller.id} product={product} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
                                )
                            })}</Flex>
                        </Flex>
                        {searchedItems.length === 0 && <Text p={20}>There are no products here</Text> }
                        
                    </Flex>
                </HStack>
            </Center>
            <Footer/>
        </Box>
    )
}
