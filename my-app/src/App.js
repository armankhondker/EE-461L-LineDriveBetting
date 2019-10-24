import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Nba from './pages/Nba';
import Nfl from './pages/Nfl';
import Mlb from './pages/Mlb';
import Home from './pages/Home';
import Blog from './components/Blog';
import Login from './components/Login';
import NflGame from './pages/NflGame';
import StickNavbar from "./components/StickyNavbar";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nflGames: null,
        }
    }

    componentDidMount() {
        // const url = 'https://nu97ojsfol.execute-api.us-east-1.amazonaws.com/latest/api/nfl';
        const url = 'http://localhost:8080/api/nfl';
        fetch(url, {
                mode: "cors",
            })
            .then(response => {
                response.json().then(data => {
                    if(data.status !== 'success') {
                        throw Error('Network request failed.')
                    }
                    this.setState({
                        nflGames: data.data
                    });
                    console.log(data.data)
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        var hasMounted = false;
        if(this.state.nflGames !== null) hasMounted = true;
        console.log("hasMounted" + hasMounted);

        return (
            <BrowserRouter>
                <Route path ='/' render={() => (<StickNavbar />)}/>
                <Route exact={true} path='/' render={() => (<Home />)}/>
                <Route exact={true} path='/About' render={() => (<About />)}/>
                <Route exact={true} path='/Nba' render={() => (<Nba />)}/>
                <Route exact={true} path='/Nfl' render={() => (<Nfl games={this.state.nflGames} />)}/>
                {hasMounted ? (
                    this.state.nflGames.map((value, index) => {
                        return (
                            <Route
                                key={index}
                                exact={true}
                                path={`/Nfl/${value.team1.replace(' ','-')}-${value.team2.replace(' ', '-')}`}
                                render={() => (
                                    <NflGame/>
                                )}
                            />
                        );
                    })
                ) : (
                    <div/>
                )}
                <Route exact={true} path='/Mlb' render={() => (<Mlb />)}/>
                <Route exact={true} path='/Blog' render={() => (<Blog />)}/>
                <Route exact={true} path='/Login' render={() => (<Login />)}/>
                <Route exact={true} path='/Nflgame' render={() => (<NflGame />)}/>
            </BrowserRouter>
        );
    }
}

export default App;
