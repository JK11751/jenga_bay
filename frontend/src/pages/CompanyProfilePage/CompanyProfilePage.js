import React from 'react'
import NavBar from '../../components/PageSections/NavBar';
import logo from "../../assets/product.jpg"
import { Box, Flex, HStack, VStack, Text, Center, Divider} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ProductCard from '../../components/Products/ProductCard';
import {Avatar} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icon';
import {MdCheckCircle, MdLocationOn} from "react-icons/md"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export const CompanyProfilePage = ({cartItems}) => {
    const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    return (
        <>
            <NavBar cartItems={cartItems} />
            <Flex flexDir="column">
                <Center>
                    <Image mt={1} borderRadius="10px" height="300px" width="70vw" src={img} />
                </Center>
                <Box position="absolute" top="45vh" left="17vw">
                    <Avatar borderColor="green" borderWidth="5px" height="180px" width="180px" name="Seun Adebayo" src={logo}></Avatar>
                </Box>
                <Box mt="5vh" ml="32vw">
                    <HStack spacing="23vw">
                        <VStack alignItems="left">
                            <HStack>
                                <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">Company Name</Text>
                                <Icon color="green" as={MdCheckCircle}/>
                            </HStack>
                            {/* <Text>Company Email</Text>
                            <Text>Company Phone Number</Text> */}
                            <HStack>
                                <Icon as={MdLocationOn}/>
                                <Text>Nairobi, Kenya</Text>
                            </HStack>
                            
                        </VStack>
                        {/* <HStack>
                            <button>follow</button>
                            <button>followers</button>
                        </HStack> */}
                        <HStack spacing="20px" alignItems="left">
                            <VStack>
                                <Text>13k</Text>
                                <Text>Followers</Text>
                            </VStack>
                            <VStack>
                                <Text>13k</Text>
                                <Text>Products</Text>
                            </VStack>
                            <VStack>
                                <Text>13k</Text>
                                <Text>Reviews</Text>
                            </VStack>
                        </HStack>  
                    </HStack>
                </Box>
                <Center>
                    <Divider borderColor="#c4c4c4" pos="absolute" top="73vh" width="70vw" />
                </Center>
            </Flex>
            <Center  alignItems="left">  
            <Box width="70vw"> 
                <Tabs mt="10vh" variant="soft-rounded" colorScheme="green">
                    <TabList>
                        <Tab _focus={{borderColor:"none"}}>Home</Tab>
                        <Tab _focus={{borderColor:"none"}}>About</Tab>
                        <Tab _focus={{borderColor:"none"}}>Reviews</Tab>
                        <Tab _focus={{borderColor:"none"}}>Products</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </Box>
            </Center> 
        </>
    )
}
