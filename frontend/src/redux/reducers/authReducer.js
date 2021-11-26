import { SET_IS_AUTHENTICATED, LOGIN_USER, PASSWORD_RESET, PASSWORD_RESET_CONFIRM, LOGOUT_USER } from "../App/actionTypes";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    isAuthenticated: false,
    loggedInUser:{},
    passwordResetToken: {},
    passwordResetConfirmation:{},
    loggedOutUser: {},
};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
        case LOGIN_USER:
            return{
                ...state,
                loggedInUser: payload,
            } 
        case LOGOUT_USER:
            return{
                ...state,
                loggedOutUser: payload,
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