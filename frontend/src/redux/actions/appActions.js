import APIServices from "../../utils/apiServices";
import {  GET_PRODUCT_DETAILS, GET_PRODUCTS, GET_USERS, GET_SELLER_DETAILS, UPDATE_QUANTITY,ADD_TO_CART,REMOVE_FROM_CART, NUMBER_OF_ITEMS_IN_CART, UPDATE_CART, DELETE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, } from "./types";

// Redux actions are called here with an underscore before the name (convention)

// STEP FOUR
// @desc This is a redux function to fetch users and update the redux state
// Pass params if needed

/*-----------------------------------------------USERS----------------------------------------------------- */

// Get users
const getUsers = (users) => ({
  type: GET_USERS,
  payload:users,
});

export const handleGetUsers = (params) => async (dispatch) => {
  try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
    const { data } = await APIServices.getUsers(params);
    await dispatch(getUsers(data));
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleGetRooms: ${error}`);
  }
};

/*-----------------------------------------------PRODUCTS----------------------------------------------------- */

// Getting All Products
const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const handleGetProducts = () => async (dispatch) => {
  try {
    const { data } = await APIServices.getProducts();
    await dispatch(getProducts(data));
  } catch (error) {
    console.log(`Error from handleGetAllProducts: ${error}`);
  }
};

//Getting a specific product
const getProductDetails = (productDetails) => ({
  type: GET_PRODUCT_DETAILS,
  payload: productDetails,
});

export const handleGetProductDetails = (item_id) => async(dispatch) => {
  try {
    const { data } = await APIServices.getProductDetails(item_id);
    await dispatch(getProductDetails(data));
  } catch (error) {
    console.log(`Error from handleGetProductDetails: ${error}`);
  }
}

/*---------------------------------------------SELLERS----------------------------------------------------- */

//Getting a specific seller details
const getSellerDetails = (sellerDetails) => ({
  type: GET_SELLER_DETAILS,
  payload: sellerDetails,
});

export const handleGetSellerDetails = (seller_id) => async(dispatch) => {
  try {
    const { data } = await APIServices.getSellerDetails(seller_id);
    await dispatch(getSellerDetails(data));
  } catch (error) {
    console.log(`Error from handleGetSellerDetails: ${error}`);
  }
}

/*------------------------------------------------CART----------------------------------------------------- */

// //Adding Items to cart
// export function addToCartAction(product) {
//   return {
//     type: ADD_TO_CART,
//     payload: { Id: product.item_id, Name: product.item_name, Price: product.item_price }
//   };
// }

// //Removing an item from Cart
// export function removeFromCartAction(item_id) {
//   return {
//     type: REMOVE_FROM_CART,
//     productId: item_id
//   };
// }

// //Updating Quantity of cart item
// export function updateItemQuantity(payload) {
//   return {
//     type: UPDATE_QUANTITY,
//     payload
//   };
// }

/*GET NUMBER CART*/
export function GetNumberCart(){
  return{
      type:NUMBER_OF_ITEMS_IN_CART
  }
}

export function AddCart(payload){
  return {
      type:ADD_TO_CART,
      payload
  }
}
export function UpdateCart(payload){
  return {
      type: UPDATE_CART,
      payload
  }
}
export function DeleteCart(payload){
  return{
      type:DELETE_CART,
      payload
  }
}

export function IncreaseQuantity(payload){
  return{
      type: INCREASE_QUANTITY,
      payload
  }
}
export function DecreaseQuantity(payload){
  return{
      type: DECREASE_QUANTITY,
      payload
  }
}
