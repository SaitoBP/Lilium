import React from 'react';

import NavBar from "../../components/NavBar"
import ButtonM from "../../components/ButtonM"
import LinkSection from "../../components/LinkSection"
import AboutContainer from "../../components/AboutContainer"
import FlickityCarousel from "../../components/FlickityCarousel"

import "./LandingPage.scss"
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
                        <ButtonM name="COMPRE JÁ" />
                        <ButtonM name="SAIBA MAIS" />
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
            
            <FlickityCarousel />
        </section>
    );
}

export default LandingPage;