// import { toast } from "react-toastify";
import { addItemToCart, buyProductNow, clearCart, removeItemFromCart, updateProductQuantity } from "../../utils/cart.utils";
import { ADD_TO_CART, BUY_PRODUCTS_NOW, CLEAR_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY } from "../App/actionTypes";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: clearCart(state.cartItems),
            };    
        case BUY_PRODUCTS_NOW:
            return {
                ...state,
                cartItems: buyProductNow(state.cartItems, action.payload.item, action.payload.quantity),
            };
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartItems: updateProductQuantity(state.cartItems, action.payload),
            };        
        // case GET_CART_TOTALS:
        //     return {
        //         ...state,
        //         cartItems: getTotals(state, action),
        //     };
        default:
            return state;
        }     


}

export default cartReducer;