import React from 'react';
import {ResponsiveDrawer} from "./components/core/ResponsiveDrawer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegistrationForm from "./components/registrationForm";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import {Dashboard as DashboardIcon, Home, Info} from "@material-ui/icons";

const navigationItems = [
    {to: "/", name: "Home", icon: <Home/>},
    {to: "/about", name: "About", icon: <Info/>},
    {to: "/dashboard", name: "Dashboard", icon: <DashboardIcon/>},
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
                </Switch>
            </ResponsiveDrawer>
        </Router>
    );
}
