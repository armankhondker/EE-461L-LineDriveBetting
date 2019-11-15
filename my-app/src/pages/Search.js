import React from 'react';
import './Pages.css';
import './Autosuggest.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import GameBar from "../components/GameBar";
import ReactLoading from "react-loading";
import queryString from 'query-string';

function searchingFor(term) {
    return function (x) {
        if(x === undefined || term === undefined) return null;
        return x.team1FullName.toLowerCase().includes(term.toLowerCase()) ||
               x.team2FullName.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nflTeams: null,
            nflGames: null,
            nbaTeams: null,
            nbaGames: null,
            mlbTeams: null,
            mlbGames: null,
            allTeams: [],
            value: '',
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.nflGames !== null) {
            nextProps.nflGames.forEach((game) => {
                game.team1FullName = this.encodeNflTeam(game.team1).fullName;
                game.team2FullName = this.encodeNflTeam(game.team2).fullName;
            })
        }

        if(nextProps.nbaGames !== null) {
            nextProps.nbaGames.forEach((game) => {
                game.team1FullName = this.encodeNbaTeam(game.team1).fullName;
                game.team2FullName = this.encodeNbaTeam(game.team2).fullName;
            })
        }

        if(nextProps.mlbGames !== null) {
            nextProps.mlbGames.forEach((game) => {
                game.team1FullName = this.encodeMlbTeam(game.team1).fullName;
                game.team2FullName = this.encodeMlbTeam(game.team2).fullName;
            })
        }

        this.setState({
            nflGames: nextProps.nflGames,
            nbaGames: nextProps.nbaGames,
            mlbGames: nextProps.mlbGames,
        })
    }

    async componentDidMount() {
        await fetch('/NFL/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        nflTeams: data
                    });
                })
            })
            .catch(err => console.log(err));

        await fetch('/NBA/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        nbaTeams: data
                    });
                })
            })
            .catch(err => console.log(err));
            
        await fetch('/MLB/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        mlbTeams: data
                    });
                })
            })
            .catch(err => console.log(err)); 
            
        let combinedTeams = [].concat(this.state.mlbTeams, this.state.nbaTeams, this.state.nflTeams);
        await combinedTeams.shift();
        const queryValue = queryString.parse(window.location.search);
        const token = queryValue.value;
        console.log('token', token);
        console.log(combinedTeams);
        if(token !== undefined) {
            this.setState({ value: token });
            document.getElementById('search').value = token;
        }
        this.setState({
            allTeams: combinedTeams,
        });
    }

    encodeNflTeam(team) {
        const { nflTeams } = this.state;
        if(nflTeams === null) return 0;
        var i;
        var teams = nflTeams;
        for(i = 0; i < teams.length; i ++) {
            if(teams[i].shortName === team) {
                return teams[i];
            }
        }
    }

    encodeNbaTeam(team) {
        const { nbaTeams } = this.state;
        if(nbaTeams === null) return 0;
        var i;
        var teams = nbaTeams;
        for(i = 0; i < teams.length; i ++) {
            if(teams[i].location === team) {
                return teams[i];
            }
        }
    }

    encodeMlbTeam(team) {
        const { mlbTeams } = this.state;
        if(mlbTeams === null) return 0;
        var i;
        var teams = mlbTeams;
        for(i = 0; i < teams.length; i ++) {
            if(teams[i].location === team) {
                return teams[i];
            }
        }
    }
    searchHandler(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = function(e) {
        alert('it works');
        e.preventDefault();
        window.location = 'http://localhost:3000/Search?value=hi';
        return false;
    }

    render() {
        const { value } = this.state;
        const { nflGames, nbaGames, mlbGames } = this.props;
        let hasMounted = false;
        let hasResults = true;
        let nflResults = null;
        let nbaResults = null;
        let mlbResults = null;

        if(nflGames !== null && nbaGames !== null && mlbGames !== null && value !== ''){
            hasMounted = true;
            nflResults = nflGames.filter(searchingFor(value));
            nbaResults = nbaGames.filter(searchingFor(value));
            mlbResults = mlbGames.filter(searchingFor(value));
            if(nflResults.length + nbaResults.length + mlbResults.length === 0) {
                hasResults = false;
            }
        }

        if(nflResults === null && nbaResults === null && mlbResults === null) {
            hasResults = false;
        }

        return(
            <div className="Pages-Search">
                <br/>
                <br/>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl size="lg"
                                 type="text"
                                 placeholder="Search"
                                 className="mr-sm-2"
                                 onChange={this.searchHandler}
                                 id="search"
                    />
                </Form>
                <br/>
                {hasMounted ? (
                    nflResults.map((game, index) => {
                        return(
                            <React.Fragment key={index}>
                                <GameBar
                                    key={index}
                                    league="NFL"
                                    date={game.date}
                                    team1={this.encodeNflTeam(game.team1).code}
                                    team2={this.encodeNflTeam(game.team2).code}
                                    spread1={game.opening_ps_1.slice(-1)[0]}
                                    spread2={game.opening_ps_2.slice(-1)[0]}
                                    link={`/Nfl/${game.team1.replace(' ','-')}-${game.team2.replace(' ', '-')}-${game._id}`}
                                />
                                <br/>
                            </React.Fragment>
                        )
                    })
                ) : (
                    <div></div>
                )}
                {hasMounted ? (
                    nbaResults.map((game, index) => {
                        return(
                            <React.Fragment key={index}>
                                <GameBar
                                    key={index}
                                    league="NBA"
                                    date={game.date}
                                    team1={this.encodeNbaTeam(game.team1).code}
                                    team2={this.encodeNbaTeam(game.team2).code}
                                    spread1={game.opening_ps_1.slice(-1)[0]}
                                    spread2={game.opening_ps_2.slice(-1)[0]}
                                    link={`/Nba/${game.team1.replace(' ','-')}-${game.team2.replace(' ', '-')}-${game._id}`}
                                />
                                <br/>
                            </React.Fragment>
                        )
                    })
                ) : (
                    <div></div>
                )}
                {hasMounted ? (
                    mlbResults.map((game, index) => {
                        return(
                            <React.Fragment key={index}>
                                <GameBar
                                    key={index}
                                    league="MLB"
                                    date={game.date}
                                    team1={this.encodeMlbTeam(game.team1).code}
                                    team2={this.encodeMlbTeam(game.team2).code}
                                    spread1={game.opening_ps_1.slice(-1)[0]}
                                    spread2={game.opening_ps_2.slice(-1)[0]}
                                    link={`/Mlb/${game.team1.replace(' ','-')}-${game.team2.replace(' ', '-')}-${game._id}`}
                                />
                                <br/>
                            </React.Fragment>
                        )
                    })
                ) : (
                    <div></div>
                )}
                {!hasResults ? (<h2>No results found</h2>) : (<div></div>) }
            </div>
        );
    }
}

// {/*<ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />*/}
export default Search;