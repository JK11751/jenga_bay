import APIServices from "../../utils/apiServices";
import {  GET_PRODUCT_DETAILS, GET_PRODUCTS, GET_PRODUCTS_IN_SPECIFIC_CATEGORY,  SEARCH_PRODUCTS, ADD_PRODUCT } from "../App/actionTypes";

// Redux actions are called here with an underscore before the name (convention)

// STEP FOUR
// @desc This is a redux function to fetch users and update the redux state
// Pass params if needed

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

// Getting products from search
const addProduct = (addItem) => ({
  type: ADD_PRODUCT,
  payload: addItem,
});

export const handleAddProductSeller = (seller_id, item) => async (dispatch) => {
  try {
    const { data } = await APIServices.addItem(seller_id, item);
    await dispatch(addProduct(data));
  } catch (error) {
    console.log(`Error from  handleAddProductSeller: ${error}`);
  }
};
