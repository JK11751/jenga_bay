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
// import Shop from "../pages/Cart/Test.js";

const Routes =({cartItems, handleAddProduct, handleRemoveProduct, clearCart})=>{
    return(
        <div>
        <Switch>
            <Route exact path="/">
                <Home cartItems={cartItems} handleAddProduct={handleAddProduct} />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage cartItems={cartItems} />
            </Route>
            <Route exact path="/sign-in">
                <SignInPage cartItems={cartItems} />
            </Route>
            <Route exact path="/registration">
                <RegistrationPage />
            </Route>
            <Route exact path="/product">
                <ProductPage />
            </Route>
            <Route exact path="/product-details/:productId">
                <ProductPage cartItems={cartItems} handleAddProduct={handleAddProduct} />
            </Route>
            <Route exact path="/upload">
                <CompanyProductUploadPage cartItems={cartItems} />
            </Route>
            <Route exact path="/profile">
                <CompanyProductPage cartItems={cartItems} />
            </Route>
            <Route exact path="/category">
                <CategoryPage cartItems={cartItems} />
            </Route>
            <Route exact path="/cart">
                <Cart clearCart={clearCart} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} cartItems={cartItems} />
            </Route>
            {/* <Route exact path="/test">
                <Shop />
            </Route> */}
        </Switch>
        </div>
    )
}
export default Routes;