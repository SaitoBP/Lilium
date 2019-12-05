import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../components/NavBar";
import ButtonM from "../../components/ButtonM";
import LinkSection from "../../components/LinkSection";
import AboutContainer from "../../components/AboutContainer";
import FlickityCarousel from "../../components/FlickityCarousel";

import "./LandingPage.scss";
import arrow from "../../img/svg/arrow_down.svg";

class LandingPage extends React.Component {  
    smoothScroll(){
        
    }

    render() {
        const linkStyle = { textDecoration: "none" };

        return (
            <section className="LandingPage">

                {/* Sessão da landing page */}
                <div className="Background">
                    <NavBar />
                    <div className="center-element">
                        <h1 id="displayName">LILIUM BRECHÓ</h1>

                        <div id="center-buttons">
                            <Link style={linkStyle} to="/loja"><ButtonM name="COMPRE JÁ" /></Link>
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
}

export default LandingPage;