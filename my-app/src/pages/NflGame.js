import React from "react";
import './Pages.css';
import OddsTable from "../components/OddsTable";

function NflGame(props) {
    var gameData = {
        "opening_ps_1": [
            "+14",
            "+14",
            "+14",
            "+14",
            "+14"
        ],
        "opening_ml_1": [
            "-110",
            "-110",
            "-110",
            "-110",
            "-110"
        ],
        "opening_ps_2": [
            "-14",
            "-14",
            "-14",
            "-14",
            "-14"
        ],
        "opening_ml_2": [
            "-110",
            "-110",
            "-110",
            "-110",
            "-110"
        ],
        "bovada_ps_1": [
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5"
        ],
        "bovada_ml_1": [
            "-110",
            "-110",
            "-105",
            "-105",
            "-105"
        ],
        "bovada_ps_2": [
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5"
        ],
        "bovada_ml_2": [
            "-110",
            "-110",
            "-115",
            "-115",
            "-115"
        ],
        "betonline_ps_1": [
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5"
        ],
        "betonline_ml_1": [
            "-113",
            "-113",
            "-110",
            "-108",
            "-108"
        ],
        "betonline_ps_2": [
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5"
        ],
        "betonline_ml_2": [
            "-107",
            "-107",
            "-110",
            "-112",
            "-112"
        ],
        "intertops_ps_1": [
            "+16",
            "+16",
            "+16.5",
            "+16.5",
            "+16.5"
        ],
        "intertops_ml_1": [
            "-110",
            "-110",
            "-110",
            "-110",
            "-110"
        ],
        "intertops_ps_2": [
            "-16",
            "-16",
            "-16.5",
            "-16.5",
            "-16.5"
        ],
        "intertops_ml_2": [
            "-110",
            "-110",
            "-110",
            "-110",
            "-110"
        ],
        "sportsbetting_ps_1": [
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5",
            "+16.5"
        ],
        "sportsbetting_ml_1": [
            "-113",
            "-113",
            "-110",
            "-108",
            "-108"
        ],
        "sportsbetting_ps_2": [
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5",
            "-16.5"
        ],
        "sportsbetting_ml_2": [
            "-107",
            "-107",
            "-110",
            "-112",
            "-112"
        ],
        "betnow_ps_1": [
            "+16",
            "+16",
            "+16.5",
            "+16.5",
            "+16.5"
        ],
        "betnow_ml_1": [
            "-110",
            "-110",
            "-109",
            "-109",
            "-109"
        ],
        "betnow_ps_2": [
            "-16",
            "-16",
            "-16.5",
            "-16.5",
            "-16.5"
        ],
        "betnow_ml_2": [
            "-110",
            "-110",
            "-111",
            "-111",
            "-111"
        ],
        "_id": "5db0db93cf000e7ac727975e",
        "date": "October 24, 2019, 8:20 PM ET",
        "time": "8:20p",
        "team1": "Washington",
        "team2": "Minnesota",
        "create_date": "2019-10-24T03:16:22.568Z"
    };

    return(
        <div className="Pages" style={{ fontSize: '20px' }}>
            <div style={{ maxWidth: '80vw'}}>
                <h1>Point Spread</h1>
                <OddsTable
                    team1={gameData.team1}
                    opening1={gameData.opening_ps_1.slice(-1)[0]}
                    bovada1={gameData.bovada_ps_1.slice(-1)[0]}
                    betonline1={gameData.betonline_ps_1.slice(-1)[0]}
                    intertops1={gameData.intertops_ps_1.slice(-1)[0]}
                    sportsbetting1={gameData.sportsbetting_ps_1.slice(-1)[0]}
                    betnow1={gameData.betnow_ps_1.slice(-1)[0]}
                    team2={gameData.team2}
                    opening2={gameData.opening_ps_2.slice(-1)[0]}
                    bovada2={gameData.bovada_ps_2.slice(-1)[0]}
                    betonline2={gameData.betonline_ps_2.slice(-1)[0]}
                    intertops2={gameData.intertops_ps_2.slice(-1)[0]}
                    sportsbetting2={gameData.sportsbetting_ps_2.slice(-1)[0]}
                    betnow2={gameData.betnow_ps_2.slice(-1)[0]}
                />
                <br/>
                <br/>
                <h1>Money Line</h1>
                <OddsTable
                    team1={gameData.team1}
                    opening1={gameData.opening_ml_1.slice(-1)[0]}
                    bovada1={gameData.bovada_ml_1.slice(-1)[0]}
                    betonline1={gameData.betonline_ml_1.slice(-1)[0]}
                    intertops1={gameData.intertops_ml_1.slice(-1)[0]}
                    sportsbetting1={gameData.sportsbetting_ml_1.slice(-1)[0]}
                    betnow1={gameData.betnow_ml_1.slice(-1)[0]}
                    team2={gameData.team2}
                    opening2={gameData.opening_ml_2.slice(-1)[0]}
                    bovada2={gameData.bovada_ml_2.slice(-1)[0]}
                    betonline2={gameData.betonline_ml_2.slice(-1)[0]}
                    intertops2={gameData.intertops_ml_2.slice(-1)[0]}
                    sportsbetting2={gameData.sportsbetting_ml_2.slice(-1)[0]}
                    betnow2={gameData.betnow_ml_2.slice(-1)[0]}
                />
            </div>
        </div>
    );
}

export default NflGame;