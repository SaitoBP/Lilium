import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import LojaTela from "./Loja/Loja";
import Ofertas from "./Ofertas/Ofertas.js";


function Pages() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/loja" component={LojaTela} />
                <Route path="/Ofertas" exact component={Ofertas}/>
            
            </Switch>
        </Router>
    );
}

export default Pages;