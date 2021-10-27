import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";

const ProductContainer = () =>{
    return(
        <Flex alignSelf="center" flexWrap="wrap" p={10}>
            {ProductList.map((product)=>{
            return(
                <ProductCard id={product.id} name={product.prodName} description={product.description}/>
            )
            })}
        </Flex>
    )
}

export default ProductContainer;