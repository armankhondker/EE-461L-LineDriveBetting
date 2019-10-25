import React from 'react';
import {Link} from "react-router-dom"
import './GameBar.css';

/**
 * Props: {
 *     league,
 *     team1,
 *     team2,
 *     dateTime,
 *     spread1,
 *     spread2,
 * }
 * @param props
 * @constructor
 *
 * TODO parse dateTime prop
 * TODO figure out dynamic linking
 */
function GameBar(props) {
    var dateTime = props.date;
    var comma1 = dateTime.indexOf(',');
    var comma2 = dateTime.indexOf(',', comma1 + 1);
    var date = dateTime.substring(0,comma1);
    var time = dateTime.substring(comma2 + 1);
    // var day = 'Sunday';
    var logo1 = `/${props.league}/Logos/${props.league}_${props.team1}.png`;
    var logo2 = `/${props.league}/Logos/${props.league}_${props.team2}.png`;

    return(
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div className="gb-btn" onClick={() => "location.href='/NBA'"}>
                <div className="gb-column">
                    <img src={logo1} className="gb-logo" alt="Logo"/>
                    <h3>{props.team1} {props.spread1}</h3>
                </div>
                <div className="gb-column">
                    <h3>{date}</h3>
                    <h3>{time}</h3>
                </div>
                <div className="gb-column">
                    <img src={logo2} className="gb-logo" alt="Logo"/>
                    <h3>{props.spread2} {props.team2}</h3>
                </div>
            </div>
        </Link>
    );
}

export default GameBar;