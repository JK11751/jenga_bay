import APIServices from "../../utils/apiServices";
// import { toast } from "react-toastify";
import { GET_SELLER_DETAILS,GET_SELLER_ITEMS, GET_SELLER_PROFILE, GET_ALL_SELLERS,SEARCH_SELLER_PRODUCTS, GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY, UPDATE_SELLER_PROFILE,} from "../App/actionTypes";

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

  //Updating a specific seller's profile
  const updatingSellerProfile = (updateSellerProfile) => ({
    type: UPDATE_SELLER_PROFILE,
    payload: updateSellerProfile,
  });
  
  export const handleUpdateSellerProfile = (seller_id, sellerData) => async(dispatch) => {
    try {
      const { data } = await APIServices.updateSellerProfile(seller_id, sellerData);
      await dispatch(updatingSellerProfile(data));
    } catch (error) {
      console.log(`Error from handleUpdateSellerProfile: ${error}`);
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
  