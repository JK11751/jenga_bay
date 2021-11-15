import { ADD_TO_CART,REMOVE_FROM_CART } from "../actions/types";
// import { addItemToCart, removeItemFromCart } from "../../utils/cart.utils";

const initialState = {
    cartItems:[],
};

const cartReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {   
        case ADD_TO_CART:
            return {
                ...state,payload,
                // cartItems: addItemToCart(state.cartItems, payload)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                payload,
                // cartItems: removeItemFromCart(state.cartItems, payload)
            }
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default cartReducer;