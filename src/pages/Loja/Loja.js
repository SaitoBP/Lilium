import React from 'react';
import Typist from 'react-typist';
import NavBar from '../../components/NavBar/index.js'
import MenuLateral from '../../components/MenuLateral/Menu-lateral'
import Galeria from '../../components/Galeria/Galeria.js'
import Footer from '../../components/Footer/footer.js'
import './Loja.scss'

export default function LojaTela() {
    return(
        <>
           <div className="principal">
           <NavBar/>
           <div className="centralizado">
            <Typist>
           <p>Vista sua melhor versão de você</p>
           </Typist>
           </div>
           </div>
           
        <MenuLateral/>
        <Galeria/>
        <Footer/>
        </>
    )
}
