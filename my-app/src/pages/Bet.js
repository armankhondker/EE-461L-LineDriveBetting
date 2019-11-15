import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import ImgButton from "../components/ImgButton";
import LinkButton from "../components/LinkButton";
import '../components/ImgButton.css';
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
                        <LinkButton image={Betonline} link="https://www.betonline.ag"/>
                        <LinkButton image={Bovada} link="http://www.bovada.com"/>
                        <LinkButton image={Betnow} link="https://www.betnow.eu"/>
                    </div>
                    <div>
                        <LinkButton image={Sportsbetting} link="https://www.sportsbetting.ag"/>
                        <LinkButton image={Openbet} link="https://www.openbet.com"/>
                        <LinkButton image={Innertops} link="https://sports.intertops.eu"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bet;
