import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import ImgButton from "../components/ImgButton";

import Football from '../assets/images/white-football.png';


class Bet extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="App-header">
                    <br></br>
                    <img src={Logo} className="App-logo" alt="logo" />
                   <div>
                   <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    </div> 
                    <div>
                   <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    <ImgButton image={Logo} label="Bet Now" path="https://www.betnow.eu"/>
                    </div> 
               
                    
                </div>
            </div>
        );
    }
}

export default Bet;
