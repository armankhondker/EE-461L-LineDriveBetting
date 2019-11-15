import React from "react";
import {Link} from "react-router-dom";
import './ImgButton.css'

function ImgButton(props) {

    var link = `/${props.path}`;

    return(
        <Link to={link} style={{ textDecoration: 'none' }}>
            <button className="img-button">
                <img className="btn-img" src={props.image} alt="Logo"/>
                {props.label}
            </button>
        </Link>
    );
}

export default ImgButton;