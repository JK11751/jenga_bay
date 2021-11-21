import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    clientReducer,
    productReducer,
    sellerReducer,
    cartReducer,
    userReducer,
});

export default rootReducer;