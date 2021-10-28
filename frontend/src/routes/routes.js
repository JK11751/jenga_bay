import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../components/Home/home.js";
import SignUpPage from "../components/SignUp/signUpPage.js";
import SignInPage from "../components/Login/SignInPage.js";
import Profile from "../components/Profile/Profile.js";

const routes =()=>{
    return(
        <Switch>
        <Route exact path="/registration">
             <Profile/>
        </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage/>
            </Route>
            <Route exact path="/sign-in">
                 <SignInPage/>
            </Route>
           
        </Switch>
    )
}
export default routes;