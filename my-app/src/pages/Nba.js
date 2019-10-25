import React from 'react';
import NBALogo from '../assets/images/NBA.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";
import '../components/ImgButton.css';

class Nba extends React.Component {
    render()
    {
        return(
        <body className = "Pages">
           
            <div>
             <img src={NBALogo} className = "NBALogos" alt="NBA" />
             <img src={Logo} className="App-logo-pages" alt="logo" />
             </div>

             <GameBar
                league="NBA"
                team1="HOU"
                team2="DAL"
                dateTime=""
                spread1="-7"
                spread2="+7"
             />
            <br/>
            < GameBar
                league="NBA"
                team1="WAS"
                team2="MEM"
                dateTime=""
                spread1="-2"
                spread2="+2"
             />
                 <br/>

            <GameBar
                league="NBA"
                team1="GSW"
                team2="LAL"
                dateTime=""
                spread1="+8"
                spread2="-8"
             />
            <br/>
            <GameBar
                league="NBA"
                team1="BKN"
                team2="LAC"
                dateTime=""
                spread1="+4"
                spread2="-4"
             />
            <br/>

            

           </body>
           );
    }
}

export default Nba;
