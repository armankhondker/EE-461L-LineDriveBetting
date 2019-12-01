import React from 'react';
import NBALogo from '../assets/images/NBA.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";
import '../components/ImgButton.css';
import ReactLoading from "react-loading";

class Nba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: props.games,
            teams: null,
        }
        console.log(this.state.games);
    }

    componentDidMount() {
        fetch('/NBA/Teams.json')
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
            if(teams[i].location === team) {
                return teams[i].code;
            }
        }
    }

    render() {
        var hasMounted = false;
        if(this.props.games !== null) hasMounted = true;
        return(
            <div className = "Pages-Nfl">
                <div>
                    <br/>
                    <img src={NBALogo} className = "NBALogos" alt="NBA" />
                    <img src={Logo} className="App-logo-pages" alt="logo" />
                    <br/>
                </div>
                {hasMounted ? (
                    this.props.games.map((value, index) => {
                        return(
                            <React.Fragment key={index}>
                                <GameBar
                                    key={index}
                                    league="NBA"
                                    date={value.date}
                                    team1={this.encodeTeam(value.team1)}
                                    team2={this.encodeTeam(value.team2)}
                                    spread1={value.opening_ps_1.slice(-1)[0]}
                                    spread2={value.opening_ps_2.slice(-1)[0]}
                                    link={`/Nba/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}-${value._id}`}
                                />
                            </React.Fragment>
                        )
                    })
                ) : (
                    <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
                )}
            </div>
        );
    }
}

export default Nba;
