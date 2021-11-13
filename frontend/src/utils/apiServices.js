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
    return api.post("/some-endpoint", data);
  }
  async getProducts(){
    return api.get(`/`);
  }
  async getProductDetails(id){
    return api.get(`/items/${id}`);
  }
}

const instance = new APIServices();//an instance of axios that can be used globally

export default instance;
