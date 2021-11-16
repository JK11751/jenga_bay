import React, { useEffect } from 'react';
import NavBar from '../../components/PageSections/NavBar';
import Footer from '../../components/PageSections/Footer';
import { Box, Flex} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ProductCard from '../../components/Products/ProductCard';
import CategoryChips from '../../components/Categories/CategoryChips';
import { handleGetSellerItems } from '../../redux/actions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const  CompanyProductPage=({cartItems,handleAddProduct})=> {
    const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"

    const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    const {sellerId} = useParams()
    const dispatch = useDispatch()

    

    useEffect(() => { 
        dispatch(handleGetSellerItems(sellerId))
    }, [sellerId,dispatch])

    
    return(
        <Box flexDir="column" width="100vw" height="100vh">
            <NavBar cartItems={cartItems} />
            <Box>
                <Image height="300px" width="100vw" src={img} />
            </Box>
            <CategoryChips />
            <Flex ml="5vw" borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap" pl={3} pr={3}>
            {sellerReducer.sellerItems.map((product,key)=>{ 
            return(
                <ProductCard key={key} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
            )
            })}</Flex>
            <Footer /> 
        </Box>
    )
}
export default CompanyProductPage;