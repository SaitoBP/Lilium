import React from "react"

import "./index.css"

function NavBar() {
    return (
        <header>
            <a href="index.html">LILIUM</a>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>LOJA</li>
                    <li>HISTORIAS</li>
                    <li>CARRINHO(0)</li>
                    <li>LOGIN</li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;