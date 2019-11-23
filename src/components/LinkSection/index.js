import React from "react"

import Button_L from "../Button_L"

import "./index.css"

function LinkSection() {
    return (
        <section className="links">
            <div className="link1"><Button_L name="DESTAQUE"/></div>
            <div className="link2"><Button_L name="PESSOAS"/></div>
            <div className="link3"><Button_L name="DESCONTOS"/></div>
        </section>
    );
}

export default LinkSection;