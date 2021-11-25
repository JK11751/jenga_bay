import React, {useEffect, useRef} from 'react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import countyData from "../../data/Counties.json"
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateSellerProfile, handleGetSellerProfile } from '../../redux/appActions/sellerActions';
import { useParams } from 'react-router';
import NavBar from '../../components/PageSections/NavBar';
import Footer from '../../components/PageSections/Footer';

export const EditCompanyProfile = () => {

  const seller = useSelector((state) => state.sellerReducer).sellerProfile

  const dispatch = useDispatch();
  const sellerId = useParams()

  React.useEffect(()=>{
    console.log("This is te seller id",sellerId.sellerId);
    dispatch(handleGetSellerProfile(sellerId.sellerId))
  },[sellerId, dispatch])
  
  const inputFile = useRef(null) 
  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
   const [county, setCounty] = React.useState(seller.sub_county.county.county_name);
   const [subCounties, setSubCounties] = React.useState("");
   const [subCounty, setSubCounty] = React.useState("");
   const [countyCode, setCountyCode] = React.useState(seller.sub_county.county.code);
   const [localAreaName, setLocalAreaName] = React.useState(seller.local_area_name);
   const [building, setBuilding] = React.useState(seller.building);
   const [street, setStreet] = React.useState(seller.street);
   const [town, setTown] = React.useState(seller.town);
   const [phoneNumber,setPhoneNumber] = React.useState(seller.phone_number);
   const [website,setWebsite] = React.useState("");
   const [about,setAbout] = React.useState("");
   const [email,setEmail] = React.useState(seller.profile.email);
   const [password,setPassword] = React.useState(seller.profile.password);
   const [coverPhoto,setCoverPhoto] = React.useState("");
   const [profilePic,setprofilePic] = React.useState(seller.profile_pic);

   const handleSubmit = (e) => {
    const data = {
      // "sub_county": {
      //   "county": {
      //     "county_name": county,
      //     "code": countyCode,
      //   },
      //   "subcounty_name": subCounty,
      // },
      profile:{
        username: email,
        email: email,
        // password: password,   
      },
      local_area_name: localAreaName,
      town:town,
      building:building,
      street: street,
      phone_number: phoneNumber,
      // website: website,
      // about: about,
      // coverPhoto:coverPhoto,
      // profile_pic: profilePic,
    }

    console.log("This is the data",data)
  //  dispatch(handleUpdateSellerProfile(sellerId, data))
  }



   /** Function that will set different values to state variable
    * based on which dropdown is selected
    */
   const changeSelectOptionHandler = (event) => {
     setCounty(event.target.value);
   };

   useEffect(() => {
    setSubCounties(findCountyByTitle(countyData,county))
   }, [county])

  //finds county by name from select and returns a list of subcounties
  function findCountyByTitle(countyData, county_name) {

    //looks for the county in the json file
    const existingCounty = countyData.find(
      county => county.name === county_name
    )

    /*
      if the county exists then it returns the values of 
      subcounties from the array of subcounties
    */
    if (existingCounty){
      setCountyCode(existingCounty.code)// sets the county code 
      return existingCounty.sub_counties.map((sub_county, index) => {
        return(
        <option key={index}>{sub_county}</option>)})
    }
  }

  
  return (
    <>
    <NavBar/>
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
    <input type='file' id='file' ref={inputFile} onChange={(e) => {setprofilePic(e.target.files[0].name); console.log(profilePic)}} style={{display: 'none'}}/>
      <Box>
            <chakra.form
              // method="PUT"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
              // onSubmit={handleSubmit}
            >
              <Stack
                px={4}
                py={5}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
                p={{ sm: 6 }}
              >
                {/* <SimpleGrid columns={3} spacing={6}> */}
                <FormControl id="cover_photo">
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Cover photo
                  </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    borderColor={useColorModeValue("gray.300", "gray.500")}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color={useColorModeValue("gray.400", "gray.500")}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                        alignItems="baseline"
                      >
                        <chakra.label
                          htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color={useColorModeValue("brand.600", "brand.200")}
                          pos="relative"
                          _hover={{
                            color: useColorModeValue("brand.400", "brand.300"),
                          }}
                        >
                          <span>Upload a file</span>
                          <VisuallyHidden>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              onChange={(e) => {setCoverPhoto(e.target.files[0]); console.log(coverPhoto)}}
                            />
                          </VisuallyHidden>
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        color={useColorModeValue("gray.500", "gray.50")}
                      >
                        PNG, JPG, GIF up to 10MB
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>
                <FormControl id="profile_pic">
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Company Profile Photo
                  </FormLabel>
                  <Flex alignItems="center" mt={1}>
                    <Avatar
                      boxSize={12}
                      bg={useColorModeValue("gray.100", "gray.800")}
                      // icon={
                      //   <Icon
                      //     as={FaUser}
                      //     boxSize={9}
                      //     mt={3}
                      //     rounded="full"
                      //     color={useColorModeValue("gray.300", "gray.700")}
                      //   />
                      // }
                      src={seller.profile_pic}
                    />
                    <Button
                      type="button"
                      ml={5}
                      variant="outline"
                      size="sm"
                      fontWeight="medium"
                      _focus={{ shadow: "none" }}
                      onClick={onButtonClick}
                    >
                      Change
                    </Button>
                  </Flex>
                </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Website
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        children="http://"
                        bg={useColorModeValue("gray.50", "gray.800")}
                        color={useColorModeValue("gray.500", "gay.50")}
                        rounded="md"
                      />
                      <Input
                        type="tel"
                        placeholder="www.example.com"
                        focusBorderColor="brand.400"
                        rounded="md"
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                {/* </SimpleGrid> */}

                <div>
                  <FormControl id="about" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      placeholder="you@example.com"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: "sm" }}
                      onChange={(e) => setAbout(e.target.value) }
                    />
                    <FormHelperText>
                      Brief description for your profile. URLs are hyperlinked.
                    </FormHelperText>
                  </FormControl>
                </div>

                

                
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  {/* <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="business_name"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Business Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="business_name"
                      id="business_name"
                      autoComplete="business_name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </FormControl> */}

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Business Email
                    </FormLabel>
                    <Input
                      type="email"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={seller.profile.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="phone_number"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Phone Number
                    </FormLabel>
                    <Input
                      type="text"
                      name="phone number"
                      id="phone_number"
                      autoComplete="phone_number"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={seller.phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </FormControl>

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
                      value={seller.sub_county.county.county_name}
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
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
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
                      value={seller.sub_county.subcounty_name}
                      onChange={(e) => setSubCounty(e.target.value)}
                    >
                     {/* This is where we have used our options variable */}
                    {subCounties}
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="password"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={seller.profile.password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="street_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Street Address
                    </FormLabel>
                    <Input
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={seller.street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="building"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
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
                      onChange={(e) => setBuilding(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="localAreaName"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Local Area Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="localAreaName"
                      id="localAreaName"
                      autoComplete="localAreaName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={seller.local_area_name}
                      onChange={(e) => setLocalAreaName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="town"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
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
                      onChange={(e) => setTown(e.target.value)}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="cyan"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
      </Box>   
    </Box>
    <Footer/>
    </>
  );
}


