import { ADD_TO_CART } from "../actions/types";

const initialState = {
    addToCart: {},
};

const cartReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {   
        case ADD_TO_CART:
            return{
                ...state,
                addToCart:payload
            } 
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default cartReducer;