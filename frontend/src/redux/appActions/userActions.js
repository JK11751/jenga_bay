import { GET_CLIENT_DETAILS, REGISTER_CLIENT,REGISTER_SELLER } from "../App/actionTypes";
import APIServices from "../../utils/apiServices";
// import { toast } from "react-toastify";

 // Registering a seller to the system
export const handleRegisterSeller = (sellerData) => async (dispatch) => {
    try {
        // Result comes from the endpoint
        // Let's assume an array of objects is returned from the endpoint
      const response = await APIServices.createSeller(sellerData);
      console.log("This is the registered seller",response.data);
      console.log("sellerdata",sellerData)
      await dispatch({ type: REGISTER_SELLER, payload: response.data });
      localStorage.setItem("token", JSON.stringify(response.data));
      // Result is sent to the store via dispatch (Pass payload if needed)
    } catch (error) {
      // Handle exceptions here
      console.log(`Error from handleRegisterSeller: ${error}`);
    }
  }; 


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
//Getting a specific client's details
const getClientDetails = (clientDetails) => ({
  type: GET_CLIENT_DETAILS,
  payload: clientDetails,
});

export const handleGetClientDetails = (buyer_id) => async(dispatch) => {
  try {
    const { data } = await APIServices.getClientDetails(buyer_id);
    await dispatch(getClientDetails(data));
  } catch (error) {
    console.log(`Error from handleGetClientDetails: ${error}`);
  }
}