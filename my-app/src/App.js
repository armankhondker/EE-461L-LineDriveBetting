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


function App() {
    return (
        <BrowserRouter>
            <Route path ='/' render={() => (<StickNavbar />)}/>
            <Route exact={true} path='/' render={() => (<Home />)}/>
            <Route exact={true} path='/About' render={() => (<About />)}/>
            <Route exact={true} path='/Nba' render={() => (<Nba />)}/>
            <Route exact={true} path='/Nfl' render={() => (<Nfl />)}/>
            <Route exact={true} path='/Mlb' render={() => (<Mlb />)}/>
            <Route exact={true} path='/Blog' render={() => (<Blog />)}/>
            <Route exact={true} path='/Login' render={() => (<Login />)}/>
            <Route exact={true} path='/Nflgame' render={() => (<NflGame />)}/>
         </BrowserRouter>
    );
}

export default App;
