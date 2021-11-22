import { LOGIN_USER, PASSWORD_RESET, PASSWORD_RESET_CONFIRM } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    loggedInUser:{},
    passwordResetToken: {},
    passwordResetConfirmation:{},
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
        case LOGIN_USER:
            return{
                ...state,
                loggedInUser: payload,
            }     
        case PASSWORD_RESET:
            return{
                ...state,
                passwordResetToken: payload,
            }
        case PASSWORD_RESET_CONFIRM:
            return{
                ...state,
                passwordResetConfirmation: payload,
            }     
        default:
            return state;//returns default state if no data is fetched
    }
}
export default userReducer;