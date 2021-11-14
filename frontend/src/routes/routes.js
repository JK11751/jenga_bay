import React from "react"
import {Route, Switch} from "react-router-dom"

//All Page imports
import Home from "../pages/Home/home.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage.js";
import SignInPage from "../pages/LoginPage/SignInPage.js";
import ProductPage from "../pages/ProductPage/ProductPage.js";
import RegistrationPage from "../pages/CompanyRegistration/RegistrationPage.js";
import CompanyProductUploadPage from "../pages/CompanyProductUploadPage/CompanyProductUploadPage.js";
import CompanyProductPage from "../pages/CompanyProductPage/CompanyProductPage.js";
import { CategoryPage } from "../pages/CategoriesPage/CategoryPage.js";
import { Cart } from "../pages/Cart/Cart.js";
import Shop from "../pages/Cart/Test.js";

const routes =({cartItems})=>{
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
                <RegistrationPage />
            </Route>
            <Route exact path="/product">
                <ProductPage />
            </Route>
            <Route exact path="/product-details/:productId" component={ProductPage}/>
            <Route exact path="/upload">
                <CompanyProductUploadPage />
            </Route>
            <Route exact path="/profile">
                <CompanyProductPage />
            </Route>
            <Route exact path="/category">
                <CategoryPage />
            </Route>
            <Route exact path="/cart">
                <Cart cartItems={cartItems} />
            </Route>
            <Route exact path="/test">
                <Shop />
            </Route>
        </Switch>
    )
}
export default routes;