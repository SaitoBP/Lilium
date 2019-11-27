import React from "react";

import ButtonL from "../ButtonL"

import "./index.scss"

class NewPiece extends React.Component {
    render() {
        return (
            <section className="product-content">
                <input type="text" name="productName" id="ProductName" placeholder="NOME DA PEÇA" />
                <textarea name="productDescription" id="ProductDescription" placeholder="Descrição.."></textarea>
                <div className="ProductPic">CLIQUE AQUI PARA ADICIONAR UMA FOTO</div>

                <section id="ProductMenu">
                    <div className="ProductBtn">PREÇO</div>
                    <div className="ProductBtn">TAMANHO</div>
                    <div className="ProductBtn">COR</div>
                </section>

                <section id="Btn">
                    <ButtonL id="Confirm" name="CONFIRMAR"/>
                    <ButtonL id="Cancel" name="CANCELAR"/>
                </section>
            </section>
        );
    }
}

export default NewPiece;