import React from 'react'
import './promo.scss'
import Galeria from '../../components/Galeria/Galeria.js'
import img18 from '../../img/galeria/img18.webp'
import img27 from '../../img/galeria/img27.webp'
import img26 from '../../img/galeria/img26.webp'


export default function Promoções() {
    // const StyleImg= {
    //     border:"black 1px solid"
    // }
    return(
    <>
    <Galeria/>
    {/* <div className="slider">
        <ul>  
        <li className="img1">
            <input type="radio" className="slide1" name="slide" checked></input>
            <label for="slide1"></label>
            <img src={img18} style={StyleImg} alt="/"/>
        </li>
        <li className="img2">
            <input type="radio" className="slide2" name="slide"></input>
            <label for="slide2"></label>
            <img src={img27} style={StyleImg} alt="/"/>
        </li>
        <li className>
            <input type="radio" className="slide3" name="slide"></input>
            <label for="slide3"></label>
            <img src={img26} style={StyleImg} alt="/"/>
        </li>
        </ul>
    </div> */}
    </>
    )
}