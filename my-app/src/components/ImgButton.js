import React from "react";
import './ImgButton.css'

function ImgButton(props) {
    return(
        <button className="img-button">
            <img className="btn-img" src={props.image}/>
            {props.label}
        </button>

    );
}

export default ImgButton;