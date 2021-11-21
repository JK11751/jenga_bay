import APIServices from "../../utils/apiServices";
import {  GET_PRODUCT_DETAILS, GET_PRODUCTS, GET_USERS, GET_SELLER_DETAILS, GET_PRODUCTS_IN_SPECIFIC_CATEGORY, GET_SELLER_ITEMS, GET_SELLER_PROFILE, GET_ALL_SELLERS, SEARCH_PRODUCTS, SEARCH_SELLER_PRODUCTS, GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY, UPDATE_PRODUCT_QUANTITY, REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART, BUY_PRODUCTS_NOW, REGISTER_CLIENT, LOGIN_USER } from "./types";
import { toast } from "react-toastify";
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

// Registering a buyer to the system
export const handleLoginUser = (userData) => async (dispatch) => {
  try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.loginUser(userData);
    console.log("This is the Logged in user", response.data);

    await dispatch({ type: LOGIN_USER, payload: response.data });
    toast.success("Login successful", {
      position: "bottom-left",
    });
    const token = response.data.key
    localStorage.setItem("token", JSON.stringify(token));
    console.log("This is the token", token)
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleLoginUser: ${error}`);
  }
};

/*-----------------------------------------------CLIENTS----------------------------------------------------- */

// Registering a buyer to the system
export const handleRegisterClient = (userData) => async (dispatch) => {
  try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.createClient(userData);
    console.log("This is the registered client",response.data);

    await dispatch({ type: REGISTER_CLIENT, payload: response.data });
    // localStorage.setItem("token", JSON.stringify(response.data));
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleRegisterClient: ${error}`);
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

// Searching products from a specific seller
const getSellerProductsFromSearch = (searchedProducts) => ({
  type: SEARCH_SELLER_PRODUCTS,
  payload: searchedProducts,
});

export const handleGetSellerProductsFromSearch = (seller_id, searchQuery) => async (dispatch) => {
  try {
    const { data } = await APIServices.searchingSellerItems(seller_id, searchQuery);
    await dispatch(getSellerProductsFromSearch(data));
  } catch (error) {
    console.log(`Error from handleGetSellerProductsFromSearch: ${error}`);
  }
};

// Searching products in a specific category from a specific seller
const searchSellerProductsFromSpecificCategory = (categoryItems) => ({
  type: GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY,
  payload: categoryItems,
});

export const handleSearchSellerProductsFromSpecificCategory = (seller_id, category_name) => async (dispatch) => {
  try {
    const { data } = await APIServices.getSellerItemsInSpecificCategory(seller_id, category_name);
    await dispatch(searchSellerProductsFromSpecificCategory(data));
  } catch (error) {
    console.log(`Error from handleSearchSellerProductsFromSpecificCategory: ${error}`);
  }
};

/*---------------------------------------------CART----------------------------------------------------- */

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