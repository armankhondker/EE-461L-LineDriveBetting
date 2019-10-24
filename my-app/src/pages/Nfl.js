import React from 'react';
import NFLLogo from '../assets/images/NFL.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";
import ReactLoading from "react-loading";

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
                 <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
             )}
           </div>
           );
    }
}

export default Nfl;
