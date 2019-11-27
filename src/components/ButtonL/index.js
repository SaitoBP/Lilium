import React from "react";

import "./index.scss"

class ButtonL extends React.Component {
    render(){
        return (
            <div className="Buttons_L">{this.props.name}</div>
        );
    }
}

export default ButtonL;