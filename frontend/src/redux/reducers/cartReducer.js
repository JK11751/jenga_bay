// import { toast } from "react-toastify";
import { addItemToCart, buyProductNow, clearCart, removeItemFromCart, updateProductQuantity } from "../../utils/cart.utils";
import { ADD_TO_CART, BUY_PRODUCTS_NOW, CLEAR_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY } from "../actions/types";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

// const cartReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case ADD_TO_CART:
//           // Check if Item is in cart already
//           const ProductExist = state.cartItems.find((item) => item.id === action.payload.id);
    
//           return {
//             ...state,
//             cartItems: ProductExist
//               ? state.cartItems.map((item) => 
//               item.id === action.payload.id 
//               ? {...ProductExist, quantity:ProductExist.quantity + 1} 
//               : item
//               ):[...state.cartItems, {...action.payload, quantity: 1 }],
//         };
//         case REMOVE_FROM_CART:
//             // const ItemExist = state.cartItems.find((item) => item.id === action.payload.id);
//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
//             };
//         case UPDATE_PRODUCT_QUANTITY:
//           return {
//             ...state,
//             cartItems: state.cartItems.map((item) =>
//               item.id === action.payload.id
//                 ? { ...item, qty: + action.payload.qty }
//                 : item
//             ),
//           };
//         // case CLEAR_CART:
//         //   return {
//         //     ...state,
//         //     cartItems: state.cartItems = [],
//         //   };
//         default:
//           return state;
//       }
// };
    

// export default cartReducer;


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