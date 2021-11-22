import { SET_IS_AUTHENTICATED } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
    case SET_IS_AUTHENTICATED:
        return{
            ...state,
            isauthenticated: payload
        }     

    default:
        return state;//returns default state if no data is fetched
    }
}
export default authReducer;