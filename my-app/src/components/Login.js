import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import './Login.css';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button"

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state= {
        data: [
          {
            username: null,
            password: null
          }
        ],
        username: "",
        password: ""
        };
        this.checkIfAccountExists = this.checkIfAccountExists.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    checkIfAccountExists() {
      fetch('https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/accounts')
        .then(response => response.json())
        .then(data => this.setState({
          data: data
        }), (error) => {
          if (error) {
            console.log(error)
          }
      });
      var i;
      for (i=0; i<this.state.data.length; i++) {
        if(this.state.username === this.state.data[i].username)
          return true;
      }
      return false;
    }

    handleLogin(event) {
      event.preventDefault()
      console.log(event)
      // fetch('https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/accounts')
      //   .then(response => response.json())
      //   .then(data => this.setState({
      //     data: data
      //   }), (error) => {
      //     if (error) {
      //       console.log(error)
      //     }
      // });
      // var i;
      // for (i=0; i<this.state.data.length; i++) {
      //   if(this.state.username === this.state.data[i].username && this.state.password == this.state.data[i].password)
      //     return true;
      // }
      // return false;
    }

    createAccount(event) {
      event.preventDefault()
      console.log(this.state.username)
      console.log(this.state.password)
      // if (this.checkIfAccountExists() == true) {
      //   return;
      // }
      // fetch('https://mywebsite.com/endpoint/', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: this.state.username,
      //     password: this.state.password,
      //   })
      }


    handleUsernameChange(e) {
       this.setState({username: e.target.value});
    }
    handlePasswordChange(e) {
       this.setState({password: e.target.value});
    }

    render()
    {
        return(
            <div className = "App">
            <body className = "Pages">
                 <h1>Placeholder</h1>
                 <img src={Logo} className="App-logo-pages" alt="logo" />

             <Form>

            <Form.Group as={Row} className = "login" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                Username
                </Form.Label>
                <Col sm="6">
                <Form.Control type="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className = "login" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                Password
                </Form.Label>
                <Col sm="6">
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                </Col>
            </Form.Group>
            </Form>


            <ButtonToolbar>
                <Button onClick={this.handleLogin} className="LoginButton" variant="danger">Login</Button>
                <Button onClick={this.createAccount} className="CreateAccount" variant="light">Create Account</Button>
            </ButtonToolbar>
               </body>
               </div>
        );
    }
}
export default Login;
