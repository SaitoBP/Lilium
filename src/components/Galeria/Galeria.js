import React from 'react'
import './Galeria.scss'
import img6 from '../../img/galeria/img6.webp'
import img7 from '../../img/galeria/img7.webp'
import img8 from '../../img/galeria/img8.webp'
import img9 from '../../img/galeria/img9.webp'
import img10 from '../../img/galeria/img10.webp'
import img11 from '../../img/galeria/img11.webp'
import img12 from '../../img/galeria/img12.webp'
import img13 from '../../img/galeria/img13.webp'
import img14 from '../../img/galeria/img14.webp'

function Galeria(){
    const StyleImg= {
        width:"100%"
    }
    return (
<div className="linha">
    <div className="roupa">
        <div className="coluna">
            <img src={img6} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="11.9">R$11,90</div>
            <img src={img9} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="10">R$10,00</div>
            <img src={img12} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="6.5">R$6,50</div>
        </div>
        <div className="coluna">
            <img src={img7} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="20.9">R$20,90</div>
            <img src={img10} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="1.9">R$1,90</div>
            <img src={img13} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="1.9">R$1,90</div>
        </div>
        <div className="coluna">
            <img src={img8} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="20.9">R$20,90</div>
            <img src={img11} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="1.9">R$1,90</div>
            <img src={img14} style={StyleImg} alt="/"/>
                <div className="preco" data-preco="1.9">R$1,90</div>
        </div>
    </div> 
</div>
    )
}
export default Galeria;