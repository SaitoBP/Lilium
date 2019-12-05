import React from "react";
import { Link } from "react-router-dom";

import ButtonL from "../ButtonL";

import "./index.scss";

function LinkSection() {
    const linkStyle = { textDecoration: "none" }

    return (
        <section className="links">
            <div className="link1"><ButtonL name="DESTAQUE" /></div>
            <div className="link2"><ButtonL name="PESSOAS" /></div>
            <div className="link3"><Link style={linkStyle} to="/ofertas"><ButtonL name="OFERTAS" /></Link></div>
        </section>
    );
}

export default LinkSection;