import React from 'react';

import './style.scss';

export default function Login() {
  return (

   <div className="login-box">
        <div className="login-form">
            <form action="index.html">
                <div className="user-login">
                    <p>Login:</p>
                    <input type="text" name="login" required />
                </div>
                <br/>
                <div className="password">
                    <p>Senha:</p>
                    <input type="password" name="password" required />
                </div>
                <br/>
                <div className="login-button">
                    <a href="#" class="register">Cadastrar</a>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    </div>    
    
  );

}
