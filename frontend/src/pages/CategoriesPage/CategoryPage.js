import React, {useEffect, useState} from 'react'
import NavBar from '../../components/PageSections/NavBar'
import Footer from "../../components/PageSections/Footer"
import CategoryChips from "../../components/Categories/CategoryChips"
import ProductContainer from '../../components/Products/ProductContainer'
import CategoryList from '../../components/Categories/CategoryList'
// import logo from "../../assets/JengaBay.png"
import { Box, Flex,HStack,Text } from '@chakra-ui/layout'
// import { Image } from '@chakra-ui/image'
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleGetItemsInCategory } from "../../redux/actions/appActions";
import { useHistory } from 'react-router'

export const CategoryPage = ({cartItems}) => {
    const itemList = useSelector((state) => state.productReducer).itemsInCategory
    const [itemsInCategoryList,setItemsInCategoryList] = useState([])

    const {categoryName} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => { 
        dispatch(handleGetItemsInCategory(categoryName))
    }, [categoryName,dispatch])
    
    useEffect(() => {
        setItemsInCategoryList(itemList)
    }, [itemList])

    return (
        <Box>
            <NavBar cartItems={cartItems}/>
            <Flex flexDir="row">
                <Box
                    height="auto"
                    width="20%"
                    background="#F8f8f8"
                >
                <Text>Other Categories</Text>
                {CategoryList.map((category) =>
                    (
                        <><HStack>
                        <input type="checkbox"></input>
                        <Text onClick={()=> history.push(`/categories/${category.value}`)} _hover={{cursor:"pointer"}} ml={2} padding="2px" key={category.id}>{category.value}</Text>
                        </HStack>
                        </>
                    )
                )}
                    {/* <Image ml={5} mt={5} src={logo} alt="logo" /> */}
                </Box>
                <Flex width="83vw" alignItems="center" flexDir="column">
                    <CategoryChips/>
                    <Box as="span" fontSize="lg">{categoryName}</Box>
                    <ProductContainer productList={itemsInCategoryList} />
                </Flex>
            </Flex>
            <Footer/>
        </Box>
    )
}
