import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Nba from './pages/Nba';
import Nfl from './pages/Nfl';
import Mlb from './pages/Mlb';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './components/Login';
import Game from './pages/Game';
import Bet from './pages/Bet';
import Search from './pages/Search';
import StickNavbar from "./components/StickyNavbar";
// import ReactLoading from 'react-loading';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nflGames: null,
            nbaGames: null,
            mlbGames: null,
        }
    }

    componentDidMount() {
        fetch('https://nu97ojsfol.execute-api.us-east-1.amazonaws.com/latest/api/nfl', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials' : true ,
                'Access-Control-Allow-Headers': 'X-Requested-With'
            },
        })
            .then(response => {
                response.json().then(data => {
                    if(data.status !== 'success') {
                        throw Error('Network request failed.')
                    }
                    this.setState({
                        nflGames: data.data
                    });
                });
            })
            .catch(err => console.log(err));

        fetch('https://nu97ojsfol.execute-api.us-east-1.amazonaws.com/latest/api/nba', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials' : true ,
                'Access-Control-Allow-Headers': 'X-Requested-With'
            },
        })
            .then(response => {
                response.json().then(data => {
                    if(data.status !== 'success') {
                        throw Error('Network request failed.')
                    }
                    this.setState({
                        nbaGames: data.data
                    });
                });
            })
            .catch(err => console.log(err));

        fetch('https://nu97ojsfol.execute-api.us-east-1.amazonaws.com/latest/api/mlb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials' : true ,
                'Access-Control-Allow-Headers': 'X-Requested-With'
            },
        })
            .then(response => {
                response.json().then(data => {
                    if(data.status !== 'success') {
                        throw Error('Network request failed.')
                    }
                    this.setState({
                        mlbGames: data.data
                    });
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        var hasMounted = false;
        if(this.state.nflGames !== null && this.state.nbaGames !== null && this.state.mlbGames !== null) {
            hasMounted = true;
        }
        return (
            <BrowserRouter>
                <Route path ='/' render={() => (<StickNavbar />)}/>
                <Route exact={true} path='/' render={() => (<Home />)}/>
                <Route exact={true} path='/About' render={() => (<About />)}/>
                <Route exact={true} path='/Nba' render={() => (<Nba games={this.state.nbaGames} />)}/>
                <Route exact={true} path='/Nfl' render={() => (<Nfl games={this.state.nflGames} />)}/>
                <Route exact={true} path='/Mlb' render={() => (<Mlb games={this.state.mlbGames} />)}/>


                {hasMounted ? (
                    this.state.nflGames.map((value, index) => {
                        return (
                            <Route
                                key={index}
                                exact={true}
                                path={`/Nfl/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}-${value._id}`}
                                render={() => (
                                    <Game gameData={value}/>
                                )}
                            />
                        );
                    })
                ) : (
                    <div></div>// <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
                )}
                {hasMounted ? (
                    this.state.nbaGames.map((value, index) => {
                        return (
                            <Route
                                key={index}
                                exact={true}
                                path={`/Nba/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}-${value._id}`}
                                render={() => (
                                    <Game gameData={value}/>
                                )}
                            />
                        );
                    })
                ) : (
                    <div></div>// <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
                )}
                {hasMounted ? (
                    this.state.mlbGames.map((value, index) => {
                        return (
                            <Route
                                key={index}
                                exact={true}
                                path={`/Mlb/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}-${value._id}`}
                                render={() => (
                                    <Game gameData={value}/>
                                )}
                            />
                        );
                    })
                ) : (
                    <div></div>// <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
                )}
                <Route exact={true} path='/Blog' render={() => (<Blog />)}/>
                <Route exact={true} path='/Login' render={() => (<Login />)}/>
                <Route exact={true} path='/Bet' render={() => (<Bet />)}/>
                <Route exact={true} path='/Search' render={() => (<Search
                    nbaGames={this.state.nbaGames}
                    nflGames={this.state.nflGames}
                    mlbGames={this.state.mlbGames}
                />)}/>
            </BrowserRouter>
        );
    }
}

export default App;
