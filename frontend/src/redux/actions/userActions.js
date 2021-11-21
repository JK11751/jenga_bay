import APIServices from "../../utils/apiServices";
import { toast } from "react-toastify";
import { PASSWORD_RESET, PASSWORD_RESET_CONFIRM } from "./types";

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