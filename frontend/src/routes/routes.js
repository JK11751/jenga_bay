import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../components/Home/home.js";
import SignUpPage from "../components/SignUp/signUpPage.js";

const routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage />
            </Route>
        </Switch>
    )
}
export default routes;