import React from 'react';
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
 * need to get logo1 and logo2.
 */
function GameBar(props) {
    var date = '10/19';
    var time = '8:00pm';
    var day = 'Sunday';
    var logo1 = `${props.league}/Logos/${props.league}_${props.team1}.png`;
    var logo2 = `${props.league}/Logos/${props.league}_${props.team2}.png`;

    return(
        <div className="gb-btn">
            <div className="gb-column">
                <img src={logo1} className="gb-logo"/>
                <h3>{props.team1}</h3>
            </div>
            <div className="gb-column">
                <h3>{date}</h3>
                <h3>{day}</h3>
                <h3>@ {time}</h3>
            </div>
            <div className="gb-column">
                <img src={logo2} className="gb-logo"/>
                <h3>{props.team2}</h3>
            </div>
        </div>
    );
}

export default GameBar;