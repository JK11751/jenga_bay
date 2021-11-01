import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    userReducer,
    productReducer,
});

export default rootReducer;