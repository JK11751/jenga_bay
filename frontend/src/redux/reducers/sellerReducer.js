import { GET_ALL_SELLERS, GET_SELLER_DETAILS, GET_SELLER_ITEMS, GET_SELLER_PROFILE } from "../actions/types";

const initialState = {
    sellerDetails: [],
    sellerItems: [],
    sellerProfile:{},
    allSellers: [],
};

const sellerReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {
        case GET_ALL_SELLERS:
            return{
                ...state,
                allSellers:payload
            }   
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
        case GET_SELLER_PROFILE:
        return{
            ...state,
            sellerProfile:payload
        }
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default sellerReducer;