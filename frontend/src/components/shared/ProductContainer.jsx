import { Flex } from "@chakra-ui/layout";
import React, {useEffect} from "react";
import ProductCard from "./ProductCard";
// import ProductList from "./ProductList";
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";

const ProductContainer = () =>{

    const dispatch = useDispatch();
    const productReducer = useSelector(({ productReducer }) => productReducer);
    useEffect(() => {
        dispatch(handleGetProducts())
    }, []);
		
        console.log(productReducer)
        
	
    return(
        <Flex alignSelf="center" flexWrap="wrap" p={10}>
            {productReducer.products.map((product)=>{ 
            return(
                <ProductCard photo={product.url} id={product.id} name={product.title} description={product.title}/> 
            )
            })}
        </Flex>
    )
}

export default ProductContainer;