import React from 'react';

import './Login.scss';

import Logo from '../../components/Logo/index';
import Login from '../../components/LoginZone/index';
import TextContainer from '../../components/TextContainer/index';

export default function Cart() {
  return (
    <div className="body">
      <Logo />
      <TextContainer />
      <Login />
    </div>
  );

}
