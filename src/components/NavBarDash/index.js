import React from "react"

import "./index.css"

function NavBarDash() {
    return (
        <nav>
            <a href="../public/index.html">LILIUM</a>
            <span>Dashboard</span>

            <ul>
                <li>ADICIONAR PEÇA</li>
                <li>ADICIONAR DESTAQUE</li>
                <li>ADICIONAR PROMOÇÃO</li>
                <li>CONFIGURAÇÕES</li>
                <li>SAIR</li>
            </ul>
        </nav>
    );
}

export default NavBarDash;