import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ImgButton from "../components/ImgButton";
import Football from '../assets/images/white-football.png';
//import NFL from '../assets/images/NFL/NFL_Team_Logos/NFL_NFL.png'
//import NBA from '../assets/images/NBA/NBA_Team_Logos/NBA_NBA.png'
//import MLB from '../assets/images/MLB/MLB_Team_Logos/MLB_MLB.png'

import Baseball from '../assets/images/white-baseball.png';
import Basketball from '../assets/images/white-basketball.png';

class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="App-header">
                    <img src={Logo} className="App-logo" alt="logo" />
                    <Form inline>
                        <FormControl size="lg" type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Go</Button>
                    </Form>
                    <br/>
                    <br/>
                    <br/>
                    <div className="btn-row">
                       <ImgButton image={Football} label="NFL" path="nfl"/>
                       <ImgButton image={Basketball} label="NBA" path="nba"/>
                       <ImgButton image={Baseball} label="MLB" path="mlb"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
