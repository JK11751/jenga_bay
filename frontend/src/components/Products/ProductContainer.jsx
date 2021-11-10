import { Flex } from "@chakra-ui/layout";
import React, {useEffect } from "react";
import ProductCard from "./ProductCard";
// import ProductList from "./ProductList";
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";


const ProductContainer = () =>{
    
    //setting the product list to be rendered
    // const[data, setData] = useState({products: [] });

    //fetching data from the api
    const dispatch = useDispatch();
    const productReducer = useSelector(({ productReducer }) => productReducer);// setting the value of product Reducer to the data fetched from the api
    useEffect(() => {
        dispatch(handleGetProducts())// dispatches the action to get the data from the api
        // setData(productReducer)
    }, [dispatch]);
		
    console.log(productReducer)
   

	
    return(  
        <Flex ml="4.8vw" width="90vw" alignSelf="center" flexWrap="wrap" p={5}>
            {productReducer.products.map((product)=>{ 
            return(
                <ProductCard id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_seller.business_name}/> 
            )
            })}
            
        </Flex>
    )
}

export default ProductContainer;