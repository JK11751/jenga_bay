import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer"

const initialState = {};
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state.

const middleware = [thunk];//Apply middleware

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);// Note: this API requires redux@>=3.1.0


export default store;