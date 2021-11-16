import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import ProductCard from "./ProductCard";
// import ProductList from "./ProductList";

const ProductContainer = ({handleAddProduct, productList}) =>{	
    return(  
        <Flex ml="5vw" borderRadius="10px" width="90vw" alignSelf="center" flexWrap="wrap" pl={3} pr={3}>
            {productList.map((product)=>{ 
            return(
                <ProductCard price={product.item_price} sellerId={product.item_seller.id} product={product} handleAddProduct={handleAddProduct} id={product.id} company_image={product.item_seller.profile_pic} photo={product.item_main_image} category={product.category} name={product.item_name} description={product.item_description} companyName={product.item_seller.business_name}/> 
            )
            })}
            {productList.length === 0 && <Text p={20}>There are no products here</Text> }
        </Flex>
    )
}

export default ProductContainer;