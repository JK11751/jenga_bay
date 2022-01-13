import APIServices from "../../utils/apiServices";
import { toast } from "react-toastify";
import { PASSWORD_RESET, PASSWORD_RESET_CONFIRM, LOGIN_USER, LOGOUT_USER } from "../App/actionTypes";
import { setToken } from "../../utils/useToken";
// Registering a buyer to the system
// Logging in a user to the system
export const handleLoginUser = (userData) => async (dispatch) => {
    try {
        // Result comes from the endpoint
        // Let's assume an array of objects is returned from the endpoint
      const response = await APIServices.loginUser(userData);
      console.log("This is the Logged in user", response.data);
  
      await dispatch({ type: LOGIN_USER, payload: response.data });
       toast.success("Login successful", {
        position: "bottom-left",
      });
      const token = response.data.token
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      console.log("This is the token", token)
      console.log("UserInfo", response.data)
      setToken(response.data)
      //     setToken(userToken.token);
      // Result is sent to the store via dispatch (Pass payload if needed)
    } catch (error) {
      // Handle exceptions here
      console.log(`Error from handleLoginUser: ${error}`);
    }
  };

// Logging in a user to the system
export const handleLogoutUser = () => async (dispatch) => {
  try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.logoutUser();
    console.log("This is the response from logging out user", response.data);

    await dispatch({ type: LOGOUT_USER, payload: response.data });
    toast.success("Logout successful", {
      position: "bottom-right",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleLogOutUser: ${error}`);
  }
};  

// Registering a buyer to the systemsetting password
export const handleResetPassword = (userData) => async (dispatch) => {
  try {
      // Result comes from the endpoint
      // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.passwordReset(userData);
    console.log("This is the password reset payload", response.data);

    await dispatch({ type: PASSWORD_RESET, payload: response.data });
    toast.success("Password Reset Request Received", {
      position: "bottom-left",
    });
    const passwordResetToken = response.data
    localStorage.setItem("passwordResetToken", JSON.stringify(passwordResetToken));
    sessionStorage.setItem("passwordResetToken", JSON.stringify(passwordResetToken));
    console.log("This is the passwordresettoken", passwordResetToken)
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleResetPassword: ${error}`);
  }
};

// Registering a buyer to the systemsetting password
export const handleResetPasswordConfirm = (userData) => async (dispatch) => {
    try {
        // Result comes from the endpoint
        // Let's assume an array of objects is returned from the endpoint
      const response = await APIServices.passwordResetConfirm(userData);
      console.log("This is the password reset confirm payload", response.data);
  
      await dispatch({ type: PASSWORD_RESET_CONFIRM, payload: response.data });
      toast.success("Password Reset Confirmed", {
        position: "bottom-left",
      });
      // Result is sent to the store via dispatch (Pass payload if needed)
    } catch (error) {
      // Handle exceptions here
      console.log(`Error from handleResetPasswordConfirm: ${error}`);
    }
  };