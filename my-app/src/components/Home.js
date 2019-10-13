import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

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
                    <a className="App-link" href="Nba">NBA</a>
                    <a className="App-link" href="Nfl">NFL</a>
                    <a className="App-link" href="Mlb">MLB</a>
                </div>git p
            </div>
        );
    }
}

export default Home;
