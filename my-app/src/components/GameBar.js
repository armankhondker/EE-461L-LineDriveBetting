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
    var date = '10/19';
    var time = '7:00pm';
    var day = 'Sunday';
    var logo1 = `/${props.league}/Logos/${props.league}_${props.team1}.png`;
    var logo2 = `/${props.league}/Logos/${props.league}_${props.team2}.png`;
    var link = '/';

    return(
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div className="gb-btn" onClick="location.href='/NBA'">
                <div className="gb-column">
                    <img src={logo1} className="gb-logo"/>
                    <h3>{props.team1} {props.spread1}</h3>
                </div>
                <div className="gb-column">
                    <h3>{date}</h3>
                    <h3>{day}</h3>
                    <h3>@ {time}</h3>
                </div>
                <div className="gb-column">
                    <img src={logo2} className="gb-logo"/>
                    <h3>{props.spread2} {props.team2}</h3>
                </div>
            </div>
        </Link>
    );
}

export default GameBar;