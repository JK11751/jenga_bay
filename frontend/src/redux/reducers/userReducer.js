import { GET_CLIENT_DETAILS, REGISTER_CLIENT } from "../App/actionTypes";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    createClientData:{},
    clientDetails:[],
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
        case REGISTER_CLIENT:
            return{
                ...state,
                createClientData: payload
            }     
        case GET_CLIENT_DETAILS:
            return{
                ...state,
                clientDetails: payload
            }
        default:
            return state;//returns default state if no data is fetched
    }
}
export default userReducer;