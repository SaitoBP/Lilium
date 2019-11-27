import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Dashboard.scss";

import NavBarDash from "../../components/NavBarDash";
import AddPiece from "../../components/AddPiece";
import AddFeatured from "../../components/AddFeatured";
import AddPromo from "../../components/AddPromo";
import Analytics from "../../components/Analytics"

class Dashboard extends React.Component {
    render() {
        return (
            <main id="Dashboard">
                <NavBarDash />
                <aside id="Dashboard-Panels">
                    <Switch>
                        <Route path="/dashboard/addPiece/" component={AddPiece} />
                        <Route path="/dashboard/addFeatured/" component={AddFeatured} />
                        <Route path="/dashboard/addPromo/" component={AddPromo} />
                        <Route path="/dashboard/analytics/" component={Analytics} />
                    </Switch>
                </aside>
            </main>
        );
    }
}

export default Dashboard;