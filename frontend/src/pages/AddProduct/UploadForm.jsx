import React from "react";
import { useState } from "react";
import { Textarea } from "@chakra-ui/react"
import { Flex, Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import Categories from "../../data/CategoryList"
import { useDispatch } from 'react-redux';
import { handleAddProductSeller } from "../../redux/appActions/productActions";
import { useHistory, useParams } from "react-router-dom";

const UploadForm =() => {

  const dispatch = useDispatch()
  const history = useHistory()
  const seller_id = useParams()

  const [itemName, setItemName] = useState("")
  const [category, setCategory] = useState("metal and steel work")
  const [description, setDescription] = useState("")
  const [pricePerUnit, setPricePerUnit] = useState(null)
  const [unit, setUnit] = useState("")
  const [mainImage, setMainImage] = useState(null)
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

  const data = {
    "item_name": itemName,
    "item_description": description,
    "item_price": pricePerUnit,
    "item_measurement_unit": unit,
    "item_main_image": mainImage,
    "item_extra_image1": image1,
    "item_extra_image2": image2,
    "item_extra_image3": image3,
    "item_extra_image4": image4,
    "category": category
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(seller_id.SellerId)
    let form_data = new FormData();
    form_data.append("item_name", itemName)
    form_data.append("item_description", description);
    form_data.append("item_price", pricePerUnit);
    form_data.append("item_measurement_unit", unit);
    form_data.append("item_main_image", mainImage, mainImage.name);
    form_data.append("item_extra_image1", image1, image1?.name);
    form_data.append("item_extra_image2", image2, image2?.name);
    form_data.append("item_extra_image3", image3, image3?.name);
    form_data.append("item_extra_image3", image4, image4?.name);
    form_data.append("category", category);

    dispatch(handleAddProductSeller(seller_id.SellerId, form_data))
    history.push("/")
  }

  const handleCancel = () => {
    history.push(`/seller/${seller_id.SellerId}/profile`)
  }

  return (
    <Flex flexDirection="column">
      <Box alignContent="center" ml="40px">
      <Text fontSize={20} m={10}>Add Product</Text>
      <VStack mb="100px">
          <FormControl id="product-Name" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input onChange={e=>setItemName(e.target.value)} variant="filled" width="100%" />
          </FormControl>
          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Select onChange={e=>{setCategory(e.target.value)}}>
                {
                  Categories.map((category) => 
                    {
                      return(<option>{category.value}</option>)
                    }
                  )
                }
            </Select>
            {/* <Input variant="filled" width="100%" /> */}
          </FormControl>
          <FormControl id="product-description" isRequired>
            <FormLabel>Product description</FormLabel>
            <Textarea onChange={e=>setDescription(e.target.value)} variant="filled" width="100%" height="220px"/>
          </FormControl>
    
          <HStack alignItems="left">
            <FormControl id="price" isRequired>
              <FormLabel>Price per Unit</FormLabel>
              <Input onChange={e=>setPricePerUnit(e.target.value)} variant="filled" width="100%" />
            </FormControl>
            <FormControl id="unit" isRequired>
              <FormLabel>Unit</FormLabel>
              <Input onChange={e=>setUnit(e.target.value)} variant="filled" width="100%" />
            </FormControl>
          </HStack> 
          <Box as="span" alignSelf="left" fontSize={20} m={10}>Product Images</Box>
          <Text fontSize={10} m={10}>You may upload up to 5 photos. Please upload good quality photos</Text>   
          <FormControl id="price" isRequired>
            <FormLabel>Item Main Image</FormLabel>
            <input type="file" accept="image/png, image/jpeg image/jpg" onChange={e=>{setMainImage(e.target.files[0])}} variant="filled" width="100%" />
          </FormControl> 
          <HStack alignItems="left">
            <FormControl id="price" >
              <FormLabel>Item Extra Image 1</FormLabel>
              <input type="file" accept="image/png, image/jpeg" onChange={e=>{setImage1(e.target.files[0])}} variant="filled" width="100%" />
            </FormControl>
            <FormControl id="unit" >
              <FormLabel>Item Extra Image 2</FormLabel>
              <input type="file" accept="image/png, image/jpeg" onChange={e=>{setImage2(e.target.files[0])}} variant="filled" width="100%" />
            </FormControl>
          </HStack> 
          <HStack alignItems="left">
            <FormControl id="price">
              <FormLabel>Item Extra Image 3</FormLabel>
              <input type="file" accept="image/png, image/jpeg" onChange={e=>{setImage3(e.target.files[0])}}  variant="filled" width="100%" />
            </FormControl>
            <FormControl id="unit">
              <FormLabel>Item Extra Image 4</FormLabel>
              <input type="file" accept="image/png, image/jpeg" onChange={e=>{setImage4(e.target.files[0])}}  variant="filled" width="100%" />
            </FormControl>
          </HStack> 
        </VStack>
        <HStack ml="400px">
        <Button
            padding="10px"
            background="#fffffC"
            borderRadius="50px"
            borderWidth="1px"
            borderColor="#007ACC"
            borderStyle="solid "
            width="200px"
            height="40px"
            color="#007ACC"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        <Button
            padding="10px"
            background="#007ACC"
            width="200px"
            height="40px"
            borderRadius="50px"
            borderWidth="1px"
            borderColor="#007ACC"
            borderStyle="solid "
            color="#ffffff"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </HStack>
      </Box>
    </Flex>
  );
}

export default UploadForm;
