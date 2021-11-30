// import { toast } from "react-toastify";
import { UPDATE_PRODUCT_QUANTITY, REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART, BUY_PRODUCTS_NOW } from "../App/actionTypes";

export const handleAddToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };
  
export const handleRemoveFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  };
};

export const handleClearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const handleUpdateQuantity = (item) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: item,
  };
};

export const handleBuyProductNow = (item, quantity) => {
  return {
    type: BUY_PRODUCTS_NOW,
    payload:{
      item:item, 
      quantity:quantity,
    } 
  };
};
  
  // export const handleGetCartTotals = () => {
  //   return {
  //     type: GET_CART_TOTALS,
  //   };
  // };