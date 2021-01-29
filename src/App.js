import React from 'react';
import {ResponsiveDrawer} from "./components/core/ResponsiveDrawer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegistrationForm from "./components/registrationForm";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import UserInfo from "./components/userInfo";
import {Dashboard as DashboardIcon, Home, Info, VerifiedUser} from "@material-ui/icons";

const navigationItems = [
    {to: "/", name: "Home", icon: <Home/>},
    {to: "/about", name: "About", icon: <Info/>},
    {to: "/dashboard", name: "Dashboard", icon: <DashboardIcon/>},
    {to: "/user-info", name: "UserInfo", icon: <VerifiedUser/>},
];

export default function App() {
    return (
        <Router>
            <ResponsiveDrawer navigation={navigationItems}>
                <Switch>
                    <Route exact path="/">
                        <RegistrationForm/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/user-info">
                        <UserInfo/>
                    </Route>
                </Switch>
            </ResponsiveDrawer>
        </Router>
    );
}
