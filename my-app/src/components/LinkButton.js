import React from "react";
import './ImgButton.css'

function LinkButton(props) {
    return(
        <a href={props.link} target='_blank' rel="noopener noreferrer">
            <button className="img-button">
                <img className="btn-img" src={props.image} alt="Logo"/>
            </button>
        </a>
    );
}

export default LinkButton;
