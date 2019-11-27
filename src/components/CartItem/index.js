import React from 'react';

import './style.scss';
import Roupa from '../../img/placeholders/clothes_PH_3.webp'

export default function Cart() {
  return (
    <div className="teste">
    <div className="All">
        <div className="Camisa"> 
            <img src={Roupa} alt="Roupa" width="128" height="128"></img>
            <p>Conjunto de Roupas</p>
        </div>
        <div class="Value">
            <p>Subtotal:R$100,00</p>
            <p>Total:R$110,00</p>
        </div>
        <div className="End">
            <a href="/">Cancelar</a>
            <input type="button" value="Finalizar" />
        </div>
    </div>
    </div>
  );

}
