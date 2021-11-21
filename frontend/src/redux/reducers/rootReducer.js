import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";
import cartReducer from "./cartReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    userReducer,
    productReducer,
    sellerReducer,
    cartReducer,
});

export default rootReducer;