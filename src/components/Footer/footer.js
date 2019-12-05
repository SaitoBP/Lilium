import React from 'react'
import {Link} from "react-router-dom";
import './footer.scss'

 export default function Footer(){
    const Style = {
        textDecoration: "none",
        listStyle: "none",
        color: "black"
      }
    return(
        <div className="rodape">
        <ul>
            <li><Link style={Style} to="/">Nos siga no Instagram</Link></li>
            <li><Link style={Style} to="/">E-mail</Link></li>
            <li><Link style={Style} to="/"> Fale Conosco </Link></li>
            <li><Link style={Style} to="/">Chat</Link></li>
        </ul>
        </div>
    )
}