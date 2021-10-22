import APIService from "../../utils/api";
import { GET_USERS } from "./types";

// Redux actions are called here with an underscore before the name (convention)

// STEP FOUR
// @desc This is a redux function to fetch users and update the redux state
// Pass params if needed
export const _getUsers = (params) => async (dispatch) => {
    try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
      const res = await APIService._getUsers(params);
      dispatch({ type: GET_USERS, payload: res });
      // Result is sent to the store via dispatch (Pass payload if needed)
    } catch (error) {
      // Handle exceptions here
      console.log(error);
    }
  };

