import APIServices from "../../utils/apiServices";
// import { toast } from "react-toastify";
import { CANCEL_ORDER, GET_SPECIFIC_SELLER_ORDERS, UNDO_CANCEL_ORDER } from "../App/actionTypes";

//Getting a specific seller's profile
const getSellerOrders = (sellerOrders) => ({
    type: GET_SPECIFIC_SELLER_ORDERS,
    payload: sellerOrders,
});

export const handleGetSellerOrders = (seller_id) => async(dispatch) => {

    try {
        const { data } = await APIServices.getSellersOrders(seller_id);
        await dispatch(getSellerOrders(data));

    } catch (error) {
        console.log(`Error from handleGetSellerOrders: ${error}`);
    }
}

export const handleAddToCancelled = (order) => {
    return {
      type: CANCEL_ORDER,
      payload: order,
    };
  };
  
export const handleRemoveFromCancelled = (order) => {
  return {
    type: UNDO_CANCEL_ORDER,
    payload: order
  };
};
