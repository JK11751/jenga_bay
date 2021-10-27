import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../components/Home/home.js";
import SignUp from '../components/SignUp/signUp.jsx';

const routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
        </Switch>
    )
}
export default routes;