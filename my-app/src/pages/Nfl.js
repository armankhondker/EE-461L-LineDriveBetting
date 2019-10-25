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
            teams: null,
        }
        console.log(this.state.games);
    }

    componentDidMount() {
        fetch('/NFL/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        teams: data
                    });
                })
            })
            .catch(err => console.log(err));

    }

    encodeTeam(team) {
        if(this.state.teams === null) return 0;
        var i;
        var teams = this.state.teams;
        for(i = 0; i < teams.length; i ++) {
            if(teams[i].shortName === team) {
                return teams[i].code;
            }
        }
    }

    render()
    {
        var hasMounted = false;
        if(this.props.games !== null) hasMounted = true;
        console.log("NFL mounted" + hasMounted);
        console.log(this.state.teams);
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
                                 team1={this.encodeTeam(value.team1)}
                                 team2={this.encodeTeam(value.team2)}
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
