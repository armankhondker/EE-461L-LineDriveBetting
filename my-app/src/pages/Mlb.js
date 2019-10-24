import React from 'react';
import MLBLogo from '../assets/images/MLB.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";

class Mlb extends React.Component {
    render()
    {
        return(
        <body className = "Pages">
            <div>
            <img src={MLBLogo} className = "Logos" alt="MLB" />
             <img src={Logo} className="App-logo-pages" alt="logo" />
            

             </div>
             <GameBar
                league="MLB"
                team1="HOU"
                team2="WAS"
                dateTime=""
                spread1="-1.5"
                spread2="+1.5"
             />
            <br/>
            < GameBar
                league="MLB"
                team1="TEX"
                team2="STL"
                dateTime=""
                spread1="-2"
                spread2="+2"
             />
                 <br/>

            <GameBar
                league="MLB"
                team1="LAD"
                team2="BOS"
                dateTime=""
                spread1="+0.5"
                spread2="-0.5"
             />
            <br/>

           </body>
           );
    }
}

export default Mlb;
