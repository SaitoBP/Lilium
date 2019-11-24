import React from "react";

import "./index.css"

function AboutContainer(props) {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>{ props.title }</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    excepturi earum nostrum consequuntur commodi modi iure voluptate,
                    quos aperiam. Perferendis beatae nesciunt quas placeat at nihil
                    eaque, consectetur quam, illum optio enim consequuntur provident
                    numquam cupiditate maiores voluptas quae dignissimos sequi natus ut
                    excepturi eligendi? Rerum possimus a corrupti! Explicabo!
                </p>
            </div>
        </div>
    );
}

export default AboutContainer;