import { combineReducers } from "redux";
import { useReducer } from "react";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    useReducer,
});

export default rootReducer;