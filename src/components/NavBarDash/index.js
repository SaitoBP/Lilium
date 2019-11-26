import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

class NavBarDash extends React.Component {
    render() {
        const linkStyle = { textDecoration: "none" }

        return (
            <nav className="NavBarDash">
                <h1>LILIUM</h1>
                <span>Dashboard</span>

                <ul>
                    <Link style={linkStyle} to="/dashboard/addPiece/"><li>ADICIONAR PEÇA</li></Link>
                    <Link style={linkStyle} to="/dashboard/addFeatured/"><li>ADICIONAR DESTAQUE</li></Link>
                    <Link style={linkStyle} to="/dashboard/addPromo/"><li>ADICIONAR PROMOÇÃO</li></Link>
                    <Link style={linkStyle} to="/dashboard/config/"><li>CONFIGURAÇÕES</li></Link>
                    <Link style={linkStyle} to="/"><li>SAIR</li></Link>
                </ul>
            </nav>
        );
    }
}

export default NavBarDash;