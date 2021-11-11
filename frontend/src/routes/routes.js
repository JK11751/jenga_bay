import React from "react"
import {Route, Switch} from "react-router-dom"

//All Page imports
import Home from "../pages/Home/home.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage.js";
import SignInPage from "../pages/LoginPage/SignInPage.js";
import ProductPage from "../pages/ProductPage/ProductPage.js";
import RegistrationPage from "../pages/CompanyRegistration/RegistrationPage.js";
import Profile from "../components/Profile/Profile.js";
import CompanyProductPage from "../pages/CompanyProductPage/CompanyProductPage.js";

const routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/upload">
                <CompanyProductPage />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage />
            </Route>
            <Route exact path="/sign-in">
                <SignInPage />
            </Route>
            <Route exact path="/registration">
                <RegistrationPage />
            </Route>
            <Route exact path="/product">
                <ProductPage />
            </Route>
            <Route exact path="/product/:productId" component={ProductPage}/>
        </Switch>
    )
}
export default routes;