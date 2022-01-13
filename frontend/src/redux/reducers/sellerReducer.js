import { GET_ALL_SELLERS, GET_SELLER_DETAILS, GET_SELLER_ITEMS, GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY, GET_SELLER_PROFILE, SEARCH_SELLER_PRODUCTS, UPDATE_SELLER_PROFILE,REGISTER_SELLER } from "../App/actionTypes";
const initialState = {
    allSellers: [],
    sellerDetails: [],
    sellerProfile: {},
    searchedProducts: [],
    sellerItems: [],
    categoryItems: [],
    updatedSellerProfile: [],
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
        case GET_SELLER_PROFILE:
            return{
                ...state,
                sellerProfile:payload
            }
        case UPDATE_SELLER_PROFILE:
            return{
                ...state,
                updatedSellerProfile:payload
            }
        case GET_SELLER_ITEMS:
            return{
                ...state,
                sellerItems:payload
            }
        case SEARCH_SELLER_PRODUCTS:
            return{
                ...state,
                searchedProducts:payload
            }
        case GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY:
            return{
                ...state,
                categoryItems:payload
            }    
        case REGISTER_SELLER:
              return{
                ...state,
                newSellerDetails:payload
            }
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default sellerReducer;