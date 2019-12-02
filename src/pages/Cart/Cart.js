import React from 'react';
import './Cart.scss';
import Helmet from 'react-helmet';

import Logo from '../../components/Logo/index'
import CartItem from '../../components/CartItem/index'
import Summary from '../../components/Summary/index'
import LineCart from '../../components/LineCart/index'

export default function Cart() {
  return (
    <>
    <Helmet bodyAttributes={{style: 'background-color : #e8e8e8'}}/>
        <Logo />
        <LineCart />
        <CartItem />
        <Summary />
    </>
  );

}
