import React from 'react';
import NFLLogo from '../assets/images/NFL.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";

class Nfl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: props.games,
        }
        console.log(this.state.games);
    }

    render()
    {
        var hasMounted = false;
        if(this.props.games !== null) hasMounted = true;
        console.log("NFL mounted" + hasMounted);
        return(
        <div className = "Pages-Nfl">
             <div>
                 <br/>
                 <img src={NFLLogo} className = "NFLLogos" alt="NFL" />
                 <img src={Logo} className="App-logo-pages" alt="logo" />
                 <br/>
             </div>
             {hasMounted ? (
                 this.props.games.map((value, index) => {
                     return(
                         <>
                             <GameBar
                                 league="NFL"
                                 team1={value.team1}
                                 team2={value.team2}
                                 spread1={value.opening_ps_1.slice(-1)[0]}
                                 spread2={value.opening_ps_2.slice(-1)[0]}
                                 link={`/Nfl/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}`}
                             />
                             <br/>
                         </>
                     )
                 })
             ) : (
                <div/>
             )}
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
    


           </div>
           );
    }
}

export default Nfl;
