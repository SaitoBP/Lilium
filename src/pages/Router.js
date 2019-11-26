import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Kart/Kart";

function Pages() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default Pages;