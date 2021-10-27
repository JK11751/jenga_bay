import { combineReducers } from "redux";
import userReducer from "./userReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;