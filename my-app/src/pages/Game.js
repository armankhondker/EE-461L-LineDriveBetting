import React from "react";
import './Pages.css';
import OddsTable from "../components/OddsTable";
import LineGraph from "../components/LineGraph";

function Game(props) {
    var gameData = props.gameData;

    return(
        <div className="Pages-Nfl" style={{ fontSize: '20px' }}>
            <div style={{ maxWidth: '80vw'}}>
                <br/>
                <br/>
                <br/>
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
                <LineGraph gameData={gameData} type="ps"/>
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
                <br/>
                <LineGraph gameData={gameData} type="ml"/>
                <br/>
            </div>
        </div>
    );
}

export default Game;