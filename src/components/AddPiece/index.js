import React from "react";

import "./index.css"

class NewPiece extends React.Component {
    render() {
        return (
            <section className="product-content">
                <input type="text" name="productName" id="ProductName" placeholder="NOME DA PEÇA" />
                <textarea name="productDescription" id="ProductDescription" placeholder="Descrição.."></textarea>
                <section id="ProductPics">
                    <div className="ProductPic"></div>
                    <div className="ProductPic"></div>
                    <div className="ProductPic"></div>
                    <div className="ProductPic"></div>
                </section>
                <section id="ProductDetails">
                    <div className="ProductDetail"></div>
                    <div className="ProductDetail"></div>
                    <div className="ProductDetail"></div>
                </section>
            </section>
        );
    }
}

export default NewPiece;