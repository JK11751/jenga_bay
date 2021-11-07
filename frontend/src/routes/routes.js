import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../pages/Home/home.js";
import SignUpPage from "../components/SignUp/signUpPage.js";
import SignInPage from "../components/Login/SignInPage.js";
import Profile from "../components/Profile/Profile.js";
import ProductPage from "../pages/ProductPage/ProductPage.js";

const routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage />
            </Route>
            <Route exact path="/sign-in">
                <SignInPage />
            </Route>
            <Route exact path="/registration">
                <Profile />
            </Route>
            <Route exact path="/product">
                <ProductPage />
            </Route>
        </Switch>
    )
}
export default routes;