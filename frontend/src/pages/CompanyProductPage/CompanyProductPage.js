import React, { useState, useEffect } from 'react';
import NavBar from '../../components/PageSections/NavBar';
import { Box,} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ProductContainer from '../../components/Products/ProductContainer';
import CategoryChips from '../../components/Categories/CategoryChips';
import { handleGetSellerItems } from '../../redux/actions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const  CompanyProductPage=({cartItems})=> {
    const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    const itemList = useSelector((state) => state.sellerReducer).sellerItems
    const [sellerProductList, setSellerProductList] = useState([])

    const {sellerId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(handleGetSellerItems(sellerId))
        setSellerProductList(itemList)
    }, [sellerId,dispatch,itemList])

    
    return(
        <Box flexDir="column" width="100vw" height="100vh">
            <NavBar cartItems={cartItems} />
            <Box>
                <Image height="300px" width="100vw" src={img} />
            </Box>
            <CategoryChips />
            <ProductContainer productList={sellerProductList} alignSelf="center"/> 
        </Box>
    )
}
export default CompanyProductPage;