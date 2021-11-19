import axios from "axios"

const baseURL = 'http://localhost:8000';// base url for all endpoints

const apiConfig = {
    baseURL,
    timeout: 30000000,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
  
const api = axios.create({ ...apiConfig });

class APIServices {
   // @desc End Point Example
  async getUsers(data) {
    return api.get("/some-endpoint", data);
  }

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

  //getting all sellers
  async getAllSellers(){
    return api.get(`/sellers`);
  }

  //Creating a seller in th db
  async createSeller(){
    return api.post(`/sellers`);
  }

  //getting details of a specific seller
  async getSellerDetails(seller_id){
    return api.get(`/sellers/${seller_id}`);
  }

  //getting profile of a specific seller
  async getSellerProfile(seller_id){
    return api.get(`/sellers/${seller_id}/profile`);
  }

  //updating profile of a specific seller
  async updateSellerProfile(seller_id){
    return api.put(`/sellers/${seller_id}/profile`);
  }

  //deleting profile of a specific seller
  async deleteSellerProfile(seller_id){
    return api.delete(`/sellers/${seller_id}/profile`);
  }

  //Getting all items belonging to a specific seller
  async getSellerItems(seller_id){
    return api.get(`/sellers/${seller_id}/items`)
  }

  //Getting a specific item belonging to a specific seller
  async getSellerItem(seller_id, item_id){
    return api.get(`/sellers/${seller_id}/items/${item_id}`)
  }

  //Getting items belonging to a specific category from a specific seller
  async getSellerItemInSpecificCategory(seller_id, category_name){
    return api.get(`/sellers/${seller_id}/items?category=${category_name}`)
  }

  //Searching for anything belonging to a specific seller
  async searchingSellerItemInSpecificCategory(seller_id, query_string){
    return api.get(`/sellers/${seller_id}/items?search=${query_string}`)
  }

  //Updating details of a specific item belonging to a specific seller
  async updateSellerItem(seller_id, item_id){
    return api.put(`/sellers/${seller_id}/items/${item_id}`)
  }

  //Deleting a specific item belonging to a specific seller
  async deleteSellerItem(seller_id, item_id){
    return api.delete(`/sellers/${seller_id}/items/${item_id}`)
  }
}

const instance = new APIServices();//an instance of axios that can be used globally

export default instance;
