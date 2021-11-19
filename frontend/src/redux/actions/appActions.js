import APIServices from "../../utils/apiServices";
import {  GET_PRODUCT_DETAILS, GET_PRODUCTS, GET_USERS, GET_SELLER_DETAILS, GET_PRODUCTS_IN_SPECIFIC_CATEGORY, GET_SELLER_ITEMS, GET_SELLER_PROFILE, GET_ALL_SELLERS, SEARCH_PRODUCTS } from "./types";

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

//Getting products from a specific category
const getProductsInCategory = (products) => ({
  type: GET_PRODUCTS_IN_SPECIFIC_CATEGORY,
  payload: products,
});

export const handleGetItemsInCategory = (category_name) => async(dispatch) => {
  try {
    const { data } = await APIServices.getItemsInSpecificCategory(category_name);
    await dispatch(getProductsInCategory(data));
  } catch (error) {
    console.log(`Error from handleGetItemsInCategory: ${error}`);
  }
}

// Getting products from search
const getProductsFromSearch = (products) => ({
  type: SEARCH_PRODUCTS,
  payload: products,
});

export const handleGetProductsFromSearch = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await APIServices.searchItems(searchQuery);
    await dispatch(getProductsFromSearch(data));
  } catch (error) {
    console.log(`Error from handleGetProductsFromSearch: ${error}`);
  }
};

/*---------------------------------------------SELLERS----------------------------------------------------- */

//Getting all sellers
const getAllSellers = (allSellers) => ({
  type: GET_ALL_SELLERS,
  payload: allSellers,
});

export const handleGetAllSellers = () => async(dispatch) => {
  try {
    const { data } = await APIServices.getAllSellers();
    await dispatch(getAllSellers(data));
  } catch (error) {
    console.log(`Error from handleGetAllSellers: ${error}`);
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

//Getting a specific seller's profile
const getSellerProfile = (sellerProfile) => ({
  type: GET_SELLER_PROFILE,
  payload: sellerProfile,
});

export const handleGetSellerProfile = (seller_id) => async(dispatch) => {
  try {
    const { data } = await APIServices.getSellerProfile(seller_id);
    await dispatch(getSellerProfile(data));
  } catch (error) {
    console.log(`Error from handleGetSellerProfile: ${error}`);
  }
}

//Getting a specific seller's items
const getSellerItems = (sellerItems) => ({
  type: GET_SELLER_ITEMS,
  payload: sellerItems,
});

export const handleGetSellerItems = (seller_id) => async(dispatch) => {
  try {
    const { data } = await APIServices.getSellerItems(seller_id);
    await dispatch(getSellerItems(data));
  } catch (error) {
    console.log(`Error from handleGetSellerItems: ${error}`);
  }
}

