import React from 'react';
import './style.scss';

export default function Summary() {
  return (
    <div className="container">
        <div className="title">
        <p>Sumário</p>
        </div>
        <div className="cep">
        <form>
            <p>Calcular FRETE</p>
            <input type="text" className="cepNum"/>
            <input type="button" value="Buscar" className="button"/>   
        </form>
        </div>
        <div className="valueTotal">
            <div>
                <p>Frete: R$00,00</p>
                <p>Total: R$100,00</p>
            </div>
        </div>
        <div className="FinalizarCompra">
            <input type="button" value="Finalizar Compra" className="buttonG"/>
        </div>

    </div>
  );

}       