import { GET_SELLER_DETAILS } from "../actions/types";

const initialState = {
    sellerDetails: {},
};

const sellerReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {   
        case GET_SELLER_DETAILS:
            return{
                ...state,
                sellerDetails:payload
            } 
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default sellerReducer;