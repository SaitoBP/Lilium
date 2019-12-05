import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";
import bag from "../../img/svg/shopping_bag.svg";

function NavBar() {
    const linkStyle = { textDecoration: "none" }

    return (
        <header>
            <Link style={linkStyle} to="/"><h1>LILIUM</h1></Link>
            
            <nav>
                <ul>
                    <Link style={linkStyle} to="/"><li>HOME</li></Link>
                    <Link style={linkStyle} to="/loja"><li>LOJA</li></Link>
                    <li>HISTORIAS</li>
                    <Link style={linkStyle} to="/cart"><li>CARRINHO(1)</li></Link>
                    <Link style={linkStyle} to="/login"><li>LOGIN</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;