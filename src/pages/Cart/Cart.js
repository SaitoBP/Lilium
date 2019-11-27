import React from 'react';
import '../Cart/Cart.scss';
import Helmet from 'react-helmet';

import Navbar from '../../components/NavBar/index'
import CartItem from '../../components/CartItem/index'

export default function Cart() {
  return (
    <>
    <Helmet bodyAttributes={{style: 'background-color : black'}}/>
        <Navbar/>
        <CartItem />
    </>
  );

}
