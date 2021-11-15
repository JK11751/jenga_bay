import { GET_SELLER_DETAILS, GET_SELLER_ITEMS } from "../actions/types";

const initialState = {
    sellerDetails: {},
    sellerItems: [],
};

const sellerReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {   
        case GET_SELLER_DETAILS:
            return{
                ...state,
                sellerDetails:payload
            }
        case GET_SELLER_ITEMS:
        return{
            ...state,
            sellerItems:payload
        }  
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default sellerReducer;