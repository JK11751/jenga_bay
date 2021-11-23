import { combineReducers } from "redux";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    productReducer,
    sellerReducer,
    cartReducer,
    userReducer,
    authReducer,
});

export default rootReducer;