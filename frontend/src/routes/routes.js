import React, {useEffect} from "react"
import { useSelector } from "react-redux";
import {Route, Switch} from "react-router-dom"

//All Page imports
import Home from "../pages/Home/home.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage.js";
import SignInPage from "../pages/LoginPage/SignInPage.js";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage.js";
import RegistrationPage from "../pages/CompanyRegistration/RegistrationPage.js";
import CompanyProductUploadPage from "../pages/CompanyProductUploadPage/CompanyProductUploadPage.js";
import CompanyProductPage from "../pages/CompanyProductPage/CompanyProductPage.js";
import { CategoryPage } from "../pages/CategoriesPage/CategoryPage.js";
import { Cart } from "../pages/Cart/Cart.js";
import NotFound from "../pages/ErrorPage/NotFound.js";
import { CompanyProfilePage } from "../pages/CompanyProfilePage/CompanyProfilePage.js";
import CheckoutPage from "../pages/CheckoutPage.js/CheckoutPage.js";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword.js";
import { ResetPassword } from "../pages/ForgotPassword/ResetPassword.js";
import { SearchResultsProducts } from "../pages/SearchResults/SearchResultsProducts.js";
import { SearchResultsSellers } from "../pages/SearchResults/SearchResultsSellers.js";
import { CompanyCategoryPage } from "../pages/CompanyProductPage/CompanyCategoryPage.js";

const Routes =()=>{

    //globally setting cart items in localStorage for data persistence
    const cart = useSelector(({ cartReducer }) => cartReducer);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    }, [cart.cartItems])
    return(
        <div>
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
            <Route exact path="/product-details/:productId">
                <ProductDetailsPage />
            </Route>
            <Route exact path="/products">
                <SearchResultsProducts />
            </Route>
            <Route exact path="/sellers/:sellerId/items">
                <SearchResultsSellers />
            </Route>
            <Route exact path="/upload">
                <CompanyProductUploadPage />
            </Route>
            <Route exact path="/sellers/:sellerId/:sellerName">
                <CompanyProductPage />
            </Route>
            <Route exact path="/seller/:sellerId/profile">
                <CompanyProfilePage />
            </Route>
            <Route exact path="/categories/:categoryName">
                <CategoryPage />
            </Route>
            <Route exact path="/sellers/:sellerId/:sellerName/:categoryName">
                <CompanyCategoryPage />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/checkout">
                <CheckoutPage/>
            </Route>
            <Route exact path="/forgot-password">
                <ForgotPassword/>
            </Route>
            <Route exact path="/reset-password">
                <ResetPassword />
            </Route>
            {/* No route should be added after this not found page */}
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
        </div>
    )
}
export default Routes;