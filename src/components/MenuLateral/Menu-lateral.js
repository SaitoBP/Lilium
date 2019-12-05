import React from 'react';
import './Menu-lateral.scss';
import {Link} from "react-router-dom";

function MenuLateral() {
  const Style = {
    textDecoration: "none",
    listStyle: "none",
    color: "black"
  }

  return (

   
      <nav className="menu-lateral">
        <ul>
          <li><h1> Estações</h1>
          <ul>
            <li><h2 style={Style}> Verão </h2></li>
            <li><h2 style={Style}> Outono </h2></li>
            <li><h2 style={Style}> Inverno </h2></li>
            <li><h2 style={Style}> Primavera </h2></li>
          </ul>
          </li>
          <li><h1> Peças </h1>

          <ul>
            <li><h2 style={Style}> Blusinhas </h2></li>
            <li><h2 style={Style}> Vestidos </h2></li>
            <li><h2 style={Style}> Calças </h2></li>
            <li><h2 style={Style}> Shorts</h2></li>
          </ul>
          </li>
          <li ><h1><Link style={Style} to="/Ofertas">Ofertas</Link></h1></li>
        </ul>
      </nav>
 
  )
}

export default MenuLateral;
