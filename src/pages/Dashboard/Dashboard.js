import React from "react";

import NavBarDash from "../../components/NavBarDash"

function Dashboard() {
    return (
        <main className="Dashboard">
            <NavBarDash />
            <aside className="Dashboard-Panels"></aside>
        </main>
    );
}

export default Dashboard;