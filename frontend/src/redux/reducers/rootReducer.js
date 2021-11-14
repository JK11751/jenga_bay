import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    userReducer,
    productReducer,
    sellerReducer,
});

export default rootReducer;