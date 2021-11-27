import React, {useEffect} from "react"
import { useSelector } from "react-redux";
import {Route, Switch} from "react-router-dom"

//utility imports
import PrivateRoute from "../utils/PrivateRoute.js";

//All Page imports
import SignUp from "../pages/SignUp/SignUp.js";
import RegistrationPage from "../pages/CompanyRegistration/RegistrationPage.js";
import Login from "../pages/Login/Login.js";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword.js";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword.js";
import Home from "../pages/Home/home.js";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage.js";
import { CategoryPage } from "../pages/Categories/CategoryPage.js";
import { SearchResultsProducts } from "../pages/SearchResults/SearchResultsProducts.js";
import AddProduct from "../pages/AddProduct/AddProduct.js";
import CompanyProductPage from "../pages/CompanyProducts/CompanyProductPage.js";
import { SearchResultsSellers } from "../pages/SearchResults/SearchResultsSellers.js";
import { CompanyProfilePage } from "../pages/CompanyProfile/CompanyProfilePage.js";
import { CompanyCategoryPage } from "../pages/CompanyProducts/CompanyCategoryPage.js";
import { Cart } from "../pages/Cart/Cart.js";
import CheckoutPage from "../pages/Checkout/CheckoutPage.js";
import { CompanyOrders } from "../pages/CompanyOrders/CompanyOrders.js";
import { ClientOrders } from "../pages/ClientOrders/ClientOrders.js";
import { OrderDetails } from "../pages/OrderDetails/OrderDetails.js";
import NotFound from "../pages/ErrorPage/NotFound.js";

const Routes =()=>{

    //globally setting cart items in localStorage for data persistence
    const cart = useSelector(({ cartReducer }) => cartReducer);
    
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    }, [cart.cartItems])

    // globally setting cancelled orders in localStorage for data persistence
    const orderReducer = useSelector(({ orderReducer }) => orderReducer);
    useEffect(() => {
        localStorage.setItem("cancelledOrders", JSON.stringify(orderReducer.cancelledOrders));
    }, [orderReducer.cancelledOrders])

    return(
        <div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
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
                <AddProduct />
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
            <Route exact path="/forgot-password">
                <ForgotPassword/>
            </Route>
            <Route exact path="/reset-password">
                <ResetPassword />
            </Route>

            {/* Private Routes */}
            <PrivateRoute component={CompanyOrders} exact path="/orders" />
            <PrivateRoute component={ClientOrders} exact path="/client/orders" />
            <PrivateRoute component={OrderDetails} exact path="/orders/order-details/:orderId" />
            <PrivateRoute component={CheckoutPage} exact path="/checkout" />
        
            {/* No route should be added after this not found page */}
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
        </div>
    )
}
export default Routes;