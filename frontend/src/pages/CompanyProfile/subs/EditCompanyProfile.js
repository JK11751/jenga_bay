import React, {useEffect, useState} from 'react'
import {
  Box,
  SimpleGrid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { FaUser } from "react-icons/fa";
// import countyData from "../../data/Counties.json"
import { Loading } from '../../../components/Loading';
import { handleUpdateSellerProfile, handleGetSellerProfile } from '../../../redux/appActions/sellerActions';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  profile:{
    username: "",
    email: "",   
  },
  local_area_name: "",
  town:"",
  building:"",
  street:"",
  phone_number: "",
  profile_pic:"",
}

export const EditCompanyProfile = (props) => {
  const [seller, setSeller] = useState(initialState)
  
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const sellerDetails = useSelector((state) => state.sellerReducer).sellerProfile
  const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
  useEffect(() => {
    (async () => {
      dispatch(handleGetSellerProfile(props.sellerId))
      setIsLoading(false)
    })()
   
  }, [dispatch, props.sellerId, sellerReducer.sellerDetails])
  
 useEffect(() => {
  if (sellerReducer.sellerDetails){
    setSeller(sellerDetails)
    console.log("seller",seller)}
 }, [seller, sellerReducer.sellerDetails,sellerDetails])
  

  /** "county" here is state variable which will hold the
   * value of currently selected county from the dropdown.
   */
  //  const [county, setCounty] = React.useState("Nairobi");
  //  const [subCounties, setSubCounties] = React.useState("");
  //  const [subCounty, setSubCounty] = React.useState("");
  //  const [countyCode, setCountyCode] = React.useState("");
  

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    console.log("This is the data",seller)
   dispatch(handleUpdateSellerProfile(props.sellerId, seller))
  }

  /** Function that will set different values to state variable
  * based on which dropdown is selected
  */
  //  const changeSelectCountyHandler = (event) => {
  //    setCounty(event.target.value);
  //  };

  //  useEffect(() => {
  //   setSubCounties(findCountyByTitle(countyData,county))
  //  }, [county])

  //finds county by name from select and returns a list of subcounties
  // function findCountyByTitle(countyData, county_name) {

  //   //looks for the county in the json file
  //   const existingCounty = countyData.find(
  //     county => county.name === county_name
  //   )

  //   /*
  //     if the county exists then it returns the values of 
  //     subcounties from the array of subcounties
  //   */
  //   if (existingCounty){
  //     setCountyCode(existingCounty.code)// sets the county code 
  //     return existingCounty.sub_counties.map((sub_county, index) => {
  //       return(
  //       <option key={index}>{sub_county}</option>)})
  //   }
  // }

  return (
    <>
    {isLoading ? <Loading/> :
    <Modal shadow="base"
                rounded={[null, "md"]}
                overflow={{ sm: "hidden" }} isOpen={props.isOpen} onClose={props.onClose} isCentered motionPreset="slideInBottom" scrollBehavior="inside" size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
  <Box>
           
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Business Email
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        // value={seller ? seller.profile.email : ""}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="phone_number"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Phone Number
                      </FormLabel>
                      <Input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        autoComplete="phone_number"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        value={(seller.phone_number)}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>
  {/* 
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="county"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        County
                      </FormLabel>
                      <Select
                        id="county"
                        name="county"
                        autoComplete="county"
                        placeholder="Select County"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={changeSelectOptionHandler}
                      >
                      {
                        countyData.map((county) => {
                          return(
                            
                            <option key={county.code}>{county.name}</option>
                          )
                        })
                      }
                      </Select>
                    </FormControl> */}
                    {/* <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="sub_county"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        sub_county
                      </FormLabel>
                      <Select
                        id="sub_county"
                        name="sub_county"
                        autoComplete="sub_county"
                        placeholder="Select Sub County"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={(e) => setSubCounty(e.target.value)}
                      > */}
                      {/* This is where we have used our options variable */}
                      {/* {subCounties}
                      </Select>
                    </FormControl> */}

                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Street Address
                      </FormLabel>
                      <Input
                        type="text"
                        name="street"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        value={seller.street}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                      <FormLabel
                        htmlFor="building"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Building
                      </FormLabel>
                      <Input
                        type="text"
                        name="building"
                        id="building"
                        autoComplete="building"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        value={seller.building}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="localAreaName"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Local Area Name
                      </FormLabel>
                      <Input
                        type="text"
                        name="local_area_name"
                        id="localAreaName"
                        autoComplete="localAreaName"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        value={seller.local_area_name}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="town"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Town
                      </FormLabel>
                      <Input
                        type="text"
                        name="town"
                        id="town"
                        autoComplete="town"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        value={seller.town}
                        onChange={(e) => handleInput(e)}
                      />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
        </Box>
      </ModalBody>
      <ModalFooter  
        px={{ base: 4, sm: 6 }}
        py={3}
        bg="gray.50"
        textAlign="right">
        <Button variant="ghost" onClick={props.onClose}>Cancel</Button>
        <Button
          type="submit"
          colorScheme="cyan"
          _focus={{ shadow: "" }}
          fontWeight="md"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </ModalFooter>
      </ModalContent>
    </Modal>}</>
  );
}


