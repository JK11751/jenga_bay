import { CANCEL_ORDER, GET_SPECIFIC_SELLER_ORDERS, UNDO_CANCEL_ORDER } from "../App/actionTypes";
import { removeOrderFromCancelled, addOrderTocancelledOrders } from "../../utils/orders.utils";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    sellerOrders:[],
    buyerOrders:[],
    cancelledOrders:localStorage.getItem("cancelledOrders")
    ? JSON.parse(localStorage.getItem("cancelledOrders"))
    : [],
};

const orderReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
    case GET_SPECIFIC_SELLER_ORDERS:
        return{
            ...state,
            sellerOrders: payload
        }     
        case CANCEL_ORDER:
            return{
                ...state,
                cancelledOrders: addOrderTocancelledOrders(state.cancelledOrders, payload)
            }
        case UNDO_CANCEL_ORDER:
            return{
                ...state,
                cancelledOrders: removeOrderFromCancelled(state.cancelledOrders, payload)
            }    
    default:
        return state;//returns default state if no data is fetched
    }
}
export default orderReducer;