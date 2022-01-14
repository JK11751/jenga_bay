import React,{useState} from "react";
import  {useDispatch} from "react-redux"
import { Flex, Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Avatar,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { handleRegisterSeller } from "../../redux/appActions/userActions";
import { useHistory } from "react-router-dom";

const RegistrationForm =() =>{

  const history = useHistory()

  const[street,setStreet]=useState("")
  const[password,setPassword]=useState("")
  const [profile_pic,setProfile_pic]=useState("")
  const[regdoc,setRegdoc]=useState("")
  const [subcounty,setSubcounty]=useState("")
  const[county,setCounty]=useState("")
  const[email,setEmail]=useState("")
  const[regno,setRegno]=useState("")
  const[phone,setPhone]=useState("")
  const[countycode,setCountycode]=useState("")
  const[localAreaName,setLocalAreaName]=useState("")
  const[building,setBuilding]=useState("")
  const[town,setTown]=useState("")
  const[businessname,setBusinessname]=useState("")
  const dispatch = useDispatch()
  const data={
    sub_county: {
        county: {
            county_name: county,
            code: countycode,
        },
        subcounty_name: subcounty,
    },
    profile: {
        username: email,
        password: password,
        email: email
    },
    business_name: businessname,
    business_reg_no: regno,
    phone_number: phone,
    town: town,
    local_area_name: localAreaName,
    street: street,
    building: building,
    business_reg_doc: regdoc?.name,
    profile_pic: profile_pic?.name,
  }
  
const onSubmit=(e)=>{
 /*e.preventDefault();
    console.log(data);
    let form_data = new FormData();
    form_data.append("sub_county[county][county_name]",county);
    form_data.append("sub_county[county][code]", countycode);
    form_data.append("sub_county[subcounty_name]", subcounty);
    form_data.append("profile[username]", email);
    form_data.append("profile[password]", password);
    form_data.append("profile[email]", email);

    
    form_data.append("business_name", businessname);
    form_data.append("business_reg_no", regno,);
    form_data.append("phone_number", phone);
    form_data.append("town",town);
    form_data.append("local_area_name",localAreaName,);
    form_data.append("street", street);
    form_data.append("building",building);
    form_data.append("business_reg_doc", regdoc, regdoc?.name);
    form_data.append("profile_pic", profile_pic, profile_pic?.name);
    console.log(form_data);

*/

  dispatch(handleRegisterSeller(data))
  history.push("/")

}

  return (
    <Flex flexDirection="column">
      <Box ml="50px">
        <VStack>
          <Text fontSize="30px" textColor="normal">Company Registration</Text>
          <Text textColor="black" fontSize="30px">Profile Information</Text>
        </VStack>
        <HStack mb="20px">
          <Avatar size="xl" />
          <VStack>
          <Text> Upload Company Logo</Text>
         <FormControl id="input-file" isRequired>
            <FormLabel>Profile pic</FormLabel>
             <input type="file" onChange={(e)=> { 
              setProfile_pic(e.target.files[0]);
              console.log(e.target.files[0]);
              }}/>
          </FormControl>
            </VStack>
          <FormControl id="business-name" isRequired>
            <FormLabel>Business Name</FormLabel>
             <Input variant="filled" width="300px" onChange={(e)=> { 
              setBusinessname(e.target.value);
              console.log(e.target.value);
              }} />
          </FormControl>
          <FormControl id="businee-email" isRequired>
            <FormLabel>Business Email Address</FormLabel>
            <Input variant="filled" width="300px"
            onChange={(e)=> { 
              setEmail(e.target.value);
              console.log(e.target.value);
              }} />
          </FormControl>
        </HStack>
        <HStack mb="20px">
          <FormControl id="business-registration" isRequired>
            <FormLabel>Business Registration Number</FormLabel>
            <Input variant="filled" width="300px"
              onChange={(e)=> { 
              setRegno(e.target.value);
              console.log(e.target.value);
              }}
             />
          </FormControl>
          <FormControl id="input-file" isRequired>
            <FormLabel>Registration Certificate</FormLabel>
            <input type="file" onChange={(e)=> { 
              setRegdoc(e.target.files[0]);
              console.log(e.target.files[0]);
              }}/>
          </FormControl>
          <FormControl id="phone-number" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input variant="filled" width="300px" 
             onChange={(e)=> { 
              setPhone(e.target.value);
              console.log(e.target.value);
              }}
            />
          </FormControl>
          
        </HStack>
        <HStack mb="20px">
          <FormControl id="county" isRequired>
            <FormLabel>County</FormLabel>
            <Input variant="filled" width="300px" 
             onChange={(e)=> { 
              setCounty(e.target.value);
              console.log(e.target.value);
              }} 
            />
          </FormControl>
          <FormControl id="county-code" isRequired>
            <FormLabel>County-Code</FormLabel>
            <Input variant="filled" width="300px"
             onChange={(e)=> { 
              setCountycode(e.target.value);
              console.log(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="subcounty" isRequired>
            <FormLabel>Sub County</FormLabel>
            <Input variant="filled" width="300px"
            onChange={(e)=> { 
              setSubcounty(e.target.value);
              console.log(e.target.value);
              }}/>
          </FormControl>
        </HStack>
        <HStack mb="20px">
          
          <FormControl id="local-area" isRequired>
            <FormLabel>Local Area Name</FormLabel>
            <Input variant="filled" width="300px"
            onChange={(e)=> { 
              setLocalAreaName(e.target.value);
              console.log(e.target.value);
              }}
            /> 
          </FormControl>
          <FormControl id="street" isRequired>
            <FormLabel>Street Name</FormLabel>
            <Input variant="filled" width="300px"
            onChange={(e)=> { 
              setStreet(e.target.value);
              console.log(e.target.value);
              }}/>
          </FormControl>
          <FormControl id="town" isRequired>
            <FormLabel>Town</FormLabel>
            <Input variant="filled" width="300px" 
              onChange={(e)=> { 
              setTown(e.target.value);
              console.log(e.target.value);
              }}/>
          </FormControl>
        </HStack>
        <HStack mb="20px">
        <FormControl id="building" isRequired>
            <FormLabel>Building</FormLabel>
            <Input variant="filled" width="300px" 
             onChange={(e)=> { 
              setBuilding(e.target.value);
              console.log(e.target.value);
              }}/>
          </FormControl>
<FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input variant="filled" width="300px"
             onChange={(e)=> { 
              setPassword(e.target.value);
              console.log(e.target.value);
              }}/>
          </FormControl>
          <FormControl id="c-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input variant="filled" width="300px" 
             />
          </FormControl>
        </HStack>
        <Flex mb="20px">
          <Text></Text>
          Note that the fields marked with * are required to process your
          registration request
        </Flex>
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
            onClick={onSubmit}
          >
            Register
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default RegistrationForm;
