import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import ImgButton from "../components/ImgButton";

import Football from '../assets/images/white-football.png';
import Bovada from '../assets/images/Bovada.png';
import Betnow from '../assets/images/Betnow.jpg';
import Betonline from '../assets/images/Betonline.png';
import Sportsbetting from '../assets/images/Sportsbetting.jpg';
import Innertops from '../assets/images/Innertops.jpeg';
import Openbet from '../assets/images/Openbet.jpg';
import './Pages.css'


class Bet extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="App-header">
                    <br></br>
                    <img src={Logo} className="App-logo" alt="logo" />
                   <div>
                    <ImgButton image={Betonline} path="/"> <a href ="http://www.google.com" target="_blank">BetOnline</a></ImgButton> 
                    
                    <ImgButton image={Bovada} path="/"/>
                    <ImgButton image={Betnow} path="/"/>
                    </div> 
                    <div className="links">
                    <a href ="https://www.betonline.ag" target="_blank">BetOnline</a>
                    <a href ="http://www.bovada.com" target="_blank">Bovada</a>
                    <a href ="https://www.betnow.eu" target="_blank">BetNow</a>
                    </div>
                    <div>
                    <ImgButton image={Sportsbetting} path="/"/>
                    <ImgButton image={Openbet} path="/"/>
                    <ImgButton image={Innertops} path="/"/>
                    </div> 
                    <div className="links">
                    <a href ="https://www.sportsbetting.ag" target="_blank">SportsBetting</a>
                    <a href ="https://www.openbet.com" target="_blank">OpenBet</a>
                    <a href ="https://sports.intertops.eu" target="_blank">Innertops</a>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default Bet;
