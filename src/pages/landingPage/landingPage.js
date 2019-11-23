import React from 'react';

import NavBar from "../../components/NavBar"
import Button_M from "../../components/Button_M"
import LinkSection from "../../components/LinkSection"
import AboutContainer from "../../components/AboutContainer"
import Flickity_Carousel from "../../components/Flickity_Carousel"

import "./landingPage.css"
import arrow from "../../img/svg/arrow_down.svg"

function LandingPage() {
    return (
        <section className="LandingPage">

            {/* Sessão da landing page */}
            <div className="Background">
                <NavBar />
                <div className="center-element">
                    <h1 id="displayName">LILIUM BRECHÓ</h1>

                    <div id="center-buttons">
                        <Button_M name="COMPRE JÁ" />
                        <Button_M name="SAIBA MAIS" />
                    </div>
                </div>

                <div id="scroll-down-arrow">
                    <img src={arrow} alt="Seta" />
                </div>
            </div>

            <LinkSection />

            <div className="about">
                <AboutContainer title="O QUE É A LILIUM" />
                <AboutContainer title="NOSSA MISSÃO" />
                <AboutContainer title="NOSSO IMPACTO" />
            </div>

            <Flickity_Carousel />
        </section>
    );
}

export default LandingPage;
