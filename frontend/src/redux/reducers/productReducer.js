import { GET_PRODUCTS, GET_PRODUCTS_IN_SPECIFIC_CATEGORY, GET_PRODUCT_DETAILS, SEARCH_PRODUCTS } from "../App/actionTypes";

//STEP 2 - stating initial state and defining actions
//Thi sis the default state
const initialState ={
    products:[],
    productDetails:[],
    itemsInCategory: [],
    searchedItems: [],
};

const productReducer = (state = initialState, action) => {
    const {type, payload} = action 
    // STEP THREE
    // A new state is returned with the data from the endpoint
    // The GET USERS case is handled here
    switch (type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products:payload
            }     
        case GET_PRODUCT_DETAILS:
            return{
                ...state,
                productDetails:payload
            }
        case GET_PRODUCTS_IN_SPECIFIC_CATEGORY:
            return{
                ...state,
                itemsInCategory:payload
            }
        case SEARCH_PRODUCTS:
            return{
                ...state,
                searchedItems:payload
            }      
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default productReducer;