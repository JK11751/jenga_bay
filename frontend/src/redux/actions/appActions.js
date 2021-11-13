import APIServices from "../../utils/apiServices";
import {  GET_PRODUCT_DETAILS, GET_PRODUCTS, GET_USERS, GET_SELLER_DETAILS } from "./types";

// Redux actions are called here with an underscore before the name (convention)

// STEP FOUR
// @desc This is a redux function to fetch users and update the redux state
// Pass params if needed

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

// Get Products
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

