import React, { useEffect } from "react";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import UploadForm from "./UploadForm";
import logo from "../../assets/JengaBay.png"
import { useDispatch, useSelector } from 'react-redux';
import { handleGetSellerDetails } from "../../redux/appActions/sellerActions";
import { useParams } from "react-router-dom";



const AddProduct=()=> {

  const dispatch = useDispatch()
  const seller_id = useParams()
  const sellerDetails = useSelector((state) => state.sellerReducer).sellerDetails;

  useEffect(() => {
   dispatch(handleGetSellerDetails(seller_id.SellerId))
  }, [dispatch,seller_id.SellerId])

  return (
    <Box >
      <Flex width="70vw">
        <Box
          height="150vh"
          width="25%"
          background="#007ACC"
        >
          <Image ml={5} mt={5} mb={10} src={logo} alt="logo" />
          {
            sellerDetails.map((sellerDetails)=>{
            return(
              <>
                <Avatar ml={10} mb={10} borderColor="#0095F8" borderWidth="5px" height="180px" width="180px" name={sellerDetails.business_name} src={sellerDetails.profile_pic}/>
                <Text ml={10}>{sellerDetails.business_name}</Text>
              </>
            )})
          }
        </Box>
        <Box height="100vh" width="70%" bg="#ffffff" >
            <UploadForm alignSelf="center"/>
        </Box>
      </Flex>
    </Box>
  );
}
export default AddProduct;
