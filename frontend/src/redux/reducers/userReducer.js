import { GET_USERS } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//Thi sis the default state
const initialState ={
    users:[]
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action 
    // STEP THREE
    // A new state is returned with the data from the endpoint
    // The GET USERS case is handled here
    switch (type) {
    case GET_USERS:
        return{
            ...state,
            users:payload
        }     

    default:
        return state;//returns deafult state if no data is fetched
    }
}
export default userReducer;