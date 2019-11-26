import React from "react";
import Flickity from "react-flickity-component";

import "./default/flickity.css"
import "./index.scss"

import Img1 from "../../img/history/gallery_1.webp"
import Img2 from "../../img/history/gallery_2.webp"
import Img3 from "../../img/history/gallery_3.webp"
import Img4 from "../../img/history/gallery_4.webp"
import Img5 from "../../img/history/gallery_5.webp"
import Img6 from "../../img/history/gallery_6.webp"
import Img7 from "../../img/history/gallery_7.webp"
import Img8 from "../../img/history/gallery_8.webp"


const flickityOptions = {
    wrapAround: true,
    cellAlign: "center",
    draggable: false,
    pageDots: false
}

function Flickity_Carousel() {
    return (
        <Flickity options={flickityOptions} reloadOnUpdate={true}>
            <img className="flickity-carousel-img" src={Img1} alt=""/>
            <img className="flickity-carousel-img" src={Img2} alt=""/>
            <img className="flickity-carousel-img" src={Img3} alt=""/>
            <img className="flickity-carousel-img" src={Img4} alt=""/>
            <img className="flickity-carousel-img" src={Img5} alt=""/>
            <img className="flickity-carousel-img" src={Img6} alt=""/>
            <img className="flickity-carousel-img" src={Img7} alt=""/>
            <img className="flickity-carousel-img" src={Img8} alt=""/>
        </Flickity>
    )
}

export default Flickity_Carousel;