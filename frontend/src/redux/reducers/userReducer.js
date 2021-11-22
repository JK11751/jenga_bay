import { REGISTER_CLIENT } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    createClientData:{},
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
    case REGISTER_CLIENT:
        return{
            ...state,
            createClientData: payload
        }     

    default:
        return state;//returns default state if no data is fetched
    }
}
export default userReducer;