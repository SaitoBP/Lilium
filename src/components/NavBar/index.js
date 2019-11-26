import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";

function NavBar() {
    const linkStyle = { textDecoration: "none" }

    return (
        <header>
            <Link style={linkStyle} to="/"><h1>LILIUM</h1></Link>
            
            <nav>
                <ul>
                    <Link style={linkStyle} to="/"><li>HOME</li></Link>
                    <li>LOJA</li>
                    <li>HISTORIAS</li>
                    <li>CARRINHO(0)</li>
                    <Link style={linkStyle} to="/dashboard"><li>LOGIN</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;