import React from 'react';

import './style.scss';

export default class Login extends React.Component {


constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    
handleChange(event) {
    this.setState({value: event.target.value});
}
    
handleSubmit(event) {
    if(this.state.value !== 'ADM'){
        alert('Login Incorreto');
        event.preventDefault();
    }
}

render (){
return (
    <>
   <div className="login-box">
        <div className="login-form">
            <form onSubmit={this.handleSubmit} action="/dashboard">
                <div className="user-login">
                    <p>Login:</p>
                    <input type="text" name="login" value={this.state.value} onChange={this.handleChange} required />
                </div>
                <br/>
                <div className="password">
                    <p>Senha:</p>
                    <input type="password" name="password" required />
                </div>
                <br/>
                <div className="login-button">
                    <a href="/" class="register">Cadastrar</a>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    </div>
    </>    
  );
}
}
