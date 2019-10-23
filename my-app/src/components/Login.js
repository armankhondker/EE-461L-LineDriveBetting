import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import './Pages.css';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button"

class Login extends React.Component {
    render()
    {
        return(
            <div className = "App">
            <body className = "Pages">
                 <h1>Placeholder</h1>
                 <img src={Logo} className="App-logo-pages" alt="logo" />

                 <Form>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                Username
                </Form.Label>
                <Col sm="6">
                <Form.Control type="username" placeholder="Username" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                Password
                </Form.Label>
                <Col sm="6">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            </Form>


            <ButtonToolbar className="LoginButtons">
                <Button variant="danger">Login</Button>
                <Button variant="light">Create Account</Button>
            </ButtonToolbar>
               </body> 
               </div>
        );
    }
}
export default Login;
