import React from 'react';
import NFLLogo from '../assets/images/NFL.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";

class Nfl extends React.Component {
    render()
    {
        return(
        <body className = "Pages">
             <div>
             <img src={NFLLogo} className = "NFLLogos" alt="NFL" />
             <img src={Logo} className="App-logo-pages" alt="logo" />
            

             </div>
             <GameBar
                league="NFL"
                team1="HOU"
                team2="IND"
                dateTime=""
                spread1="+3"
                spread2="-3"
             />

            <br/>
             <GameBar
                league="NFL"
                team1="DAL"
                team2="GB"
                dateTime=""
                spread1="-6"
                spread2="+6"
             />
             <br/>
             <GameBar
                league="NFL"
                team1="NYG"
                team2="NE"
                dateTime=""
                spread1="+10"
                spread2="-10"
             />
            
            <br/>
             <GameBar
                league="NFL"
                team1="TB"
                team2="CAR"
                dateTime=""
                spread1="+4"
                spread2="-4"
             />
    


           </body>
           );
    }
}

export default Nfl;
