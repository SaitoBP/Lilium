import React from "react"

import ButtonL from "../ButtonL"

import "./index.scss"

function LinkSection() {
    return (
        <section className="links">
            <div className="link1"><ButtonL name="DESTAQUE"/></div>
            <div className="link2"><ButtonL name="PESSOAS"/></div>
            <div className="link3"><ButtonL name="DESCONTOS"/></div>
        </section>
    );
}

export default LinkSection;