import React from 'react'
import './Ofertas.scss'
import NavBar from '../../components/NavBar/index.js' 
import Promoções from '../../components/Promoções/promo.js'
export default function Oferta() {
    return(
        <>
        <div className="Ofertas">
        <NavBar/>
        <p className="frase">Preços da primavera.</p>
        </div>
        <Promoções/>
        </>
    )
}