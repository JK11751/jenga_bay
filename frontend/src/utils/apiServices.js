import axios from "axios"
import { getToken } from "./useToken";

const baseURL = 'http://localhost:8000';// base url for all endpoints

const apiConfig = {
    baseURL,
    timeout: 30000000,
    headers: {
      'Content-Type': 'application/json',
      // "Access-Control-Allow-Origin": '*',
      // "Access-Control-Expose-Headers": "Content-Length, X-JSON",
      // "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
      // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
  
const api = axios.create({ ...apiConfig });
//getting user token from local storage
// const userToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : " ";
// console.log("userToken", userToken)
// token authentification
const token = getToken(); 
if(token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`

// api.interceptors.request.use(
//   (config) => {
//      // Whatever the token is
//     if (token) config.headers.Authorization = `Bearer ${token}` ;
//     return config;
//   },
//   (err) => Promise.reject("Error from auth token",err)
// );

class APIServices {
/*----------------------------------EXAMPLE-------------------------------------- */ 

  // @desc End Point Example
  async getUsers(data) {
    return api.get("/some-endpoint", data);
  }

/*----------------------------------USERS-------------------------------------- */ 

  // @desc End Point Example
  async loginUser(data) {
    return api.post(`/login`, data);
  }

  // @desc End Point Example
  async logoutUser(data) {
    return api.post(`/accounts/logout/`, data);
  }

  // @desc End Point Example
  async passwordReset(data) {
    return api.post(`/accounts/password_reset/`, data);
  }

  // @desc End Point Example
  async passwordResetConfirm(data) {
    return api.post(`/accounts/password_reset/confirm/`, data);
  }

/*----------------------------------CLIENTS-------------------------------------- */  

  // creating a client
  async createClient(data) {
    return api.post(`/create_buyer`, data);
  }

  // getting a clients profile
  async getClientProfile(buyer_id) {
    return api.get(`/buyers/${buyer_id}/profile`);
  }

  // updating a clients profile
  async updateClientProfile(buyer_id, data) {
    return api.put(`/buyers/${buyer_id}/profile`, data);
  }

  // getting a clients profile
  async deleteClientProfile(buyer_id) {
    return api.delete(`/buyers/${buyer_id}/profile`);
  }

  // getting a client's details
  async getClientDetails(buyer_id) {
    return api.get(`/buyers/${buyer_id}`);
  }

/*----------------------------------PRODUCTS-------------------------------------- */

  //getting all products
  async getProducts(){
    return api.get(`/items`);
  }

  //getting details of a specific product
  async getProductDetails(item_id){
    return api.get(`/items/${item_id}`);
  }

  //getting items in a specific category
  async getItemsInSpecificCategory(category_name){
    return api.get(`/items?category=${category_name}`)
  }

  //searching items that meet specific criteria
  async searchItems(query_string){
    return api.get(`/items?search=${query_string}`)
  }

/*----------------------------------SELLERS-------------------------------------- */

  //getting all sellers
  async getAllSellers()
      {
        return api.get(`/sellers/`);
      }

  //Creating a seller in th db
  async createSeller(data){
    return api.post(`/create_seller_account`, data);
  }

  //getting details of a specific seller
  async getSellerDetails(seller_id){
    return api.get(`/sellers/${seller_id}`);
  }

  //getting profile of a specific seller
  async getSellerProfile(seller_id){
    return api.get(`/sellers/${seller_id}/profile`,
     {
        headers: {
          Authorization: `Token ${token}`
        }
      }, 
      {
        withCredentials: true
      }
    );
  }

  //updating profile of a specific seller
  async updateSellerProfile(seller_id, data){
    return api.put(`/sellers/${seller_id}/profile`, data);
  }

  //deleting profile of a specific seller
  async deleteSellerProfile(seller_id){
    return api.delete(`/sellers/${seller_id}/profile`);
  }
/*--------------------------------SELLER ITEMS----------------------------------- */

  //Getting all items belonging to a specific seller
  async getSellerItems(seller_id){
    return api.get(`/sellers/${seller_id}/items`)
  }

  //Getting a specific item belonging to a specific seller
  async getSellerItem(seller_id, item_id){
    return api.get(`/sellers/${seller_id}/items/${item_id}`)
  }

  //Getting items belonging to a specific category from a specific seller
  async getSellerItemsInSpecificCategory(seller_id, category_name){
    return api.get(`/sellers/${seller_id}/items?category=${category_name}`)
  }

  //Searching for anything belonging to a specific seller
  async searchingSellerItems(seller_id, query_string){
    return api.get(`/sellers/${seller_id}/items?search=${query_string}`)
  }

  //Adding an item by a specific seller
  async addItem(seller_id, data){
    return api.post(`/sellers/${seller_id}/items/add_item`, data)
  }

  //Updating details of a specific item belonging to a specific seller
  async updateSellerItem(seller_id, item_id, data){
    return api.put(`/sellers/${seller_id}/items/${item_id}`, data)
  }

  //Deleting a specific item belonging to a specific seller
  async deleteSellerItem(seller_id, item_id){
    return api.delete(`/sellers/${seller_id}/items/${item_id}`)
  }

  /*-----------------------------------ORDERS---------------------------------------- */

  //Creating an order
  async createOrder(data) {
    return api.post(`/submit_order`, data)
  }

  //Viewing orders to a specific seller
  async getSellersOrders(seller_id) {
    return api.get(`/sellers/${seller_id}/orders`)
  }

  //Viewing orders to a specific seller
  async viewOrderClient(seller_id, order_id) {
    return api.get(`/sellers/${seller_id}/orders/${order_id}`)
  }

  //seller can view, update or delete a specific order
  async viewOrder(seller_id, order_id) {
    return api.get(`/sellers/${seller_id}/orders/${order_id}/edit`)
  }

  //seller can view, update or delete a specific order
  async editOrder(seller_id, order_id, data) {
    return api.put(`/sellers/${seller_id}/orders/${order_id}/edit`, data)
  }

  //seller can view, update or delete a specific order
  async deleteOrder(seller_id, order_id) {
    return api.delete(`/sellers/${seller_id}/orders/${order_id}/edit`)
  }
}



const instance = new APIServices();//an instance of axios that can be used globally

export default instance;
