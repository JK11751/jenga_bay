import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../components/Home/home.js";
import SignUpPage from "../components/SignUp/signUpPage.js";
import NavBar from "../components/shared/NavBar"

const routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage />
            </Route>
            <Route exact-path ="/nav-bar">
                <NavBar />
            </Route>
        </Switch>
    )
}
export default routes;