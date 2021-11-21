import React, { useEffect,useRef, useState } from 'react'
import NavBar from '../../components/PageSections/NavBar';
import Footer from '../../components/PageSections/Footer';
import { Box, Flex, HStack, VStack, Text, Center, Divider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ProductCard from '../../components/Products/ProductCard';
import { Avatar,AvatarBadge, IconButton } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icon';
import {MdCheckCircle, MdLocationOn} from "react-icons/md"
import { BiImageAdd } from 'react-icons/bi';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { handleGetSellerItems, handleGetSellerProfile } from '../../redux/actions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Reviews from './subs/Reviews';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
    Circle,
} from "@chakra-ui/react"
import {ChevronDownIcon } from "@chakra-ui/icons"
import { Button } from '@chakra-ui/button';
import Stats from './subs/Stats';

export const CompanyProfilePage = ({cartItems, handleAddProduct}) => {
    const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"

    const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    const seller = useSelector((state) => state.sellerReducer).sellerProfile
    
    const {sellerId} = useParams()
    
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    const [followers, setFollowers] = useState(13)
    const inputFile = useRef(null) 

    useEffect(() => { 
        dispatch(handleGetSellerItems(sellerId))
        dispatch(handleGetSellerProfile(sellerId))
    }, [sellerId,dispatch])

    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };

    function setColor(e) {
        var target = e.target,
        count = +target.dataset.count;
      
        target.style.backgroundColor = count === 1 ? "#c4c4c4" : '#FFA90A';
        target.style.color = count === 1 ? "#000000" : '#FFFFFF';
        target.dataset.count = count === 1 ? 0 : 1;
        if (count === 1) {
            setFollowers(13)
        }else{
            setFollowers(14)
        }
        /* 
      
         () : ? - this is conditional (ternary) operator - equals 
      
         if (count === 1) {
            target.style.backgroundColor = "#7FFF00";
            target.dataset.count = 0;
         } else {
            target.style.backgroundColor = "#FFFFFF";
            target.dataset.count = 1;
         } 
         target.dataset - return all "data attributes" for current element, 
         in the form of object, 
         and you don't need use global variable in order to save the state 0 or 1
        */ 
    }

    const onFollowClick = (e) => {
        setColor(e)
        setClicked(!clicked)
    }

    return (
        <>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <NavBar cartItems={cartItems} />
            <Flex bg="#f5f5f5" pb="7vh" flexDir="column" borderBottomRadius="10px">
                <Center>
                    <Image borderBottomRadius="10px" height="200px" width="70vw" src={img} />
                </Center>
                <Box position="absolute" top="30vh" left="17vw">
                    <Avatar borderColor="#0095F8" borderWidth="5px" height="180px" width="180px" name={seller.business_name} src={seller.profile_pic}>
                    <AvatarBadge
                        as={IconButton}
                        onClick={onButtonClick}
                        size="sm"
                        rounded="full"
                        bottom="20px"
                        colorScheme="blue"
                        aria-label="remove Image"
                        icon={<BiImageAdd color="#fff" />}
                />
                    </Avatar>
                </Box>
                <Box mt="5vh" ml="32vw">
                    <HStack spacing="13vw">
                    <HStack alignItems="top">
                        <VStack alignItems="left">
                            <HStack>
                                <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">{seller.business_name}</Text>
                                <Icon color="green" as={MdCheckCircle}/>
                            </HStack>
                            <HStack>
                                <Icon as={MdLocationOn}/>
                                <Text>{seller.local_area_name}, {seller.town}</Text>
                            </HStack>  
                        </VStack>
                        <Box ml="4vw">
                            <Button onClick={(e) => onFollowClick(e)} id="followButton" ml="1vw" _focus={{borderColor:"none", bg:"#FFA90A"}}>{clicked ? "Following" : "Follow"}</Button>
                        </Box>
                    </HStack>
                        <HStack spacing="20px" alignItems="left">
                            <VStack>
                                <Text>{followers}</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold">Followers</Text>
                            </VStack>
                            <VStack>
                                <Text>{sellerReducer.sellerItems.length}</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold">Products</Text>
                            </VStack>
                            <VStack>
                                <Text>3</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold">Reviews</Text>
                            </VStack>
                        </HStack>  
                    </HStack>
                </Box>
                <Center>
                    <Divider ml={3} borderColor="#c4c4c4" pos="absolute" top="68vh" width="80vw" />
                </Center>
            </Flex>
            <Center alignItems="left">  
            <Box width="70vw"> 
                <Tabs defaultIndex={0} mt="1vh" variant="soft-rounded" colorScheme="green" isLazy>
                    <TabList>
                        <Tab _focus={{borderColor:"none"}}>Home</Tab>
                        <Tab _focus={{borderColor:"none"}}>About</Tab>
                        <Tab _focus={{borderColor:"none"}}>Reviews</Tab>
                        <Tab _focus={{borderColor:"none"}}>Products</Tab>
                            <Menu isLazy placement="right" closeOnSelect>
                                <MenuButton 
                                    variant="unstyled"
                                    ml={3}  
                                    px={4}
                                    pl={5}
                                    pr={5}
                                    py={2}
                                    transition="all 0.2s"
                                    _expanded={{ colorScheme: "green" }}
                                    _focus={{ boxShadow: "outline" }}
                                    _hover={{borderColor:"none"}}
                                    _active={{borderColor:"none"}}
                                    as={Button} 
                                    rightIcon={<ChevronDownIcon />}
                                >
                                    More
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Unfollow</MenuItem>
                                    <MenuItem>Share</MenuItem>
                                    <MenuItem>View Company Store</MenuItem>
                                    <MenuItem>See Company Website</MenuItem>
                                    <MenuItem>Find Support or Report Page</MenuItem>
                                </MenuList>
                            </Menu>
                    </TabList>
                    <TabPanels mt={5}>
                        <TabPanel>
                            <Flex>
                                <Box
                                    bg={useColorModeValue("white", "gray.800")}
                                    width="300px"
                                    height="300px"
                                    borderWidth="1px"
                                    rounded="lg"
                                    shadow="lg"
                                    position="relative">
                                    <VStack alignItems="left" p={5}>
                                        <HStack spacing="50px">
                                            <Text p={3}>Followers</Text>
                                            <Circle alignItems="center" p={2} size="20px" bg="#FFA90A"><Text fontWeight="bold" fontSize="10px" color="white">{cartItems.length}</Text></Circle>
                                        </HStack>
                                        <HStack spacing="50px">
                                            <Text p={3}>Reviews</Text>
                                            <Circle alignItems="center" p={2} size="20px" bg="#FFA90A"><Text fontWeight="bold" fontSize="10px" color="white">{cartItems.length}</Text></Circle>
                                        </HStack>
                                        <HStack spacing="50px">
                                            <Text p={3}>Completed Orders</Text>
                                            <Circle alignItems="center" p={2} size="20px" bg="#FFA90A"><Text fontWeight="bold" fontSize="10px" color="white">{cartItems.length}</Text></Circle>
                                        </HStack>
                                        <HStack spacing="50px">
                                            <Text p={3}>Completed Order</Text>
                                            <Circle alignItems="center" p={2} size="20px" bg="#FFA90A"><Text fontWeight="bold" fontSize="10px" color="white">{cartItems.length}</Text></Circle>
                                        </HStack>
                                    </VStack>
                                </Box>
                                <Stats />
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                        <Box
                            bg={useColorModeValue("white", "gray.800")}
                            width="100%"
                            height="auto"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative"
                            p={5}>
                            <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">GENERAL</Text>
                                <Text p={2}>Business Name:{seller.business_name}</Text>
                                <Text p={2}>Business Email:{seller.email}</Text>
                                <Text p={2}>Business Phone Number:{seller.phone_number}</Text>
                                <Text p={2}>Business Address:</Text>
                                <Text p={2}>{seller.town}, {seller.local_area_name}</Text>
                                <Text p={2}>{seller.street}{seller.building}</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">COMPANY WEBSITE</Text>
                                <Text fontFamily="sans-serif" p={2}>https://bamburicement.com/</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">MORE INFO</Text>
                                <Text fontFamily="sans-serif" fontWeight="bold" fontSize="20px">About</Text>    
                                <Text p={2} fontFamily="sans-serif" lineHeight="30px">
                                Minions: The Rise of Gru in theaters July 1, 2022.<br/>
                                Additional information<br/>
                                Releasing July 1, 2022 from the biggest animated franchise 
                                in history and global cultural phenomenon, comes the untold story of one 12-year-old’s 
                                dream to become the world’s greatest supervillain, in Minions: The Rise of Gru.
                                In the heart of the 1970s, amid a flurry of feathered hair and flared jeans, Gru 
                                (Oscar® nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain
                                    supergroup known as the Vicious 6, Gru hatches a plan to become 
                                evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. 
                                Together, Kevin, Stuart, Bob, and Otto—a new Minion sporting braces and a desperate need to
                                    please—deploy their skills as they 
                                and Gru build their first lair, experiment with their first weapons and pull off their first missions.
                                When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar® winner Alan Arkin), Gru 
                                interviews to become their newest member. It doesn’t go well (to say the least), 
                                and only gets worse after Gru outsmarts them and suddenly finds himself 
                                the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild
                                    Knuckles himself, and discover that even bad guys need a little help from their friends.
                                Teeming with Illumination’s signature subversive humor, pop-culture sophistication, full-hearted emotion,
                                    bold music sensibility, and over-the-top action, Minions: The Rise of Gru features a thrilling new cast of
                                    stars, including, as members of the Vicious 6, Taraji P. Henson as cool and confident leader Belle Bottom, 
                                    Jean-Claude Van Damme as Jean Clawed, Lucy Lawless as Nunchuck, Dolph Lundgren as Svengeance and Danny Trejo 
                                    as Stronghold. The film also features Russell Brand as Dr. Nefario, an aspiring mad scientist, Michelle Yeoh 
                                    as Master Chow, an acupuncturist with mad Kung Fu skills, and Oscar® winner Julie Andrews as Gru’s maddeningly self-absorbed mom.
                                Steered by the franchise’s original creators, Minions: The Rise of Gru is produced by visionary Illumination 
                                founder and CEO Chris Meledandri and his longtime collaborators Janet Healy and Chris Renaud. The film is
                                    directed by returning franchise filmmaker Kyle Balda (Despicable Me 3, Minions), co-directed by Brad Ableson
                                    (The Simpsons) and Jonathan del Val (The Secret Life of Pets films), and features the iconic voice of Pierre
                                    Coffin as the Minions and a killer ʼ70s soundtrack courtesy of legendary Grammy-winning music producer Jack 
                                    Antonoff.</Text>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Reviews />
                        </TabPanel>
                        <TabPanel id="products">
                            <Flex borderRadius="10px" width="80vw" alignSelf="center" flexWrap="wrap" >
                                {sellerReducer.sellerItems.map((product,key)=>{ 
                                return(
                                    <ProductCard key={key} price={product.item_price} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={seller.business_name}/> 
                                )
                                })}
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </Box>
            </Center> 
            <Footer />
        </>
    )
}
