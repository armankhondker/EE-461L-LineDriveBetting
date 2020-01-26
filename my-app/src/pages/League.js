import React from 'react';
import NBAlogo from '../assets/images/NBA.png';
import NFLlogo from '../assets/images/NFL.png';
import MLBlogo from '../assets/images/MLB.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';
import GameBar from "../components/GameBar";
import '../components/ImgButton.css';
import ReactLoading from "react-loading";

class League extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: props.games,
            teams: null,
        }
        console.log(this.state.games);
    }

    componentDidMount() {
        fetch(`/${this.props.league}/Teams.json`)
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
        const {games, league} = this.props;
        var hasMounted = false;
        if(games !== null) hasMounted = true;
        let leaugeLogo; 
        if(league == "NFL")
        {
        leaugeLogo = <img src= {NFLlogo} className = {`${league}Logos`} alt={league} />
        } 
        else if (league == "NBA")
        {
            leaugeLogo = <img src= {NBAlogo} className = {`${league}Logos`} alt={league} />

        }  
        else if(league == "MLB"){
            leaugeLogo = <img src= {MLBlogo} className = {`${league}Logos`} alt={league} />

        }
        return(
            <div className = "Pages-Nfl">
                <div>
                    <br/>
                    {leaugeLogo}
                    <img src={Logo} className="App-logo-pages" alt="logo" />
                    <br/>
                </div>
                {hasMounted ? (
                    games.map((value, index) => {
                        return(
                            <React.Fragment key={index}>
                                <GameBar
                                    key={index}
                                    league={league}
                                    date={value.date}
                                    team1={this.encodeTeam(value.team1)}
                                    team2={this.encodeTeam(value.team2)}
                                    spread1={value.opening_ps_1.slice(-1)[0]}
                                    spread2={value.opening_ps_2.slice(-1)[0]}
                                    link={`/${league}/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}-${value._id}`}
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

export default League;
