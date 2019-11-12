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
        response: null,
        username: "",
        password: "",
        realPassword: "",
        message: ""
        };
        this.checkIfAccountExists = this.checkIfAccountExists.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
      fetch('https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/accounts', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
          'Access-Control-Allow-Credentials' : true ,
          'Access-Control-Allow-Headers': 'X-Requested-With'
        },
      })
        .then(response => response.json())
        .then(data => this.setState({
          data: data.data
        }), (error) => {
          if (error) {
            console.log(error)
          }
      });
    }

    checkIfAccountExists() {
      var i;
      var logins = this.state.data;
      for (i=0; i<logins.length; i++) {
        if(this.state.username === logins[i].username)
          return true;
      }
      return false;
    }

    handleLogin(event) {
      event.preventDefault();
      let un = localStorage.getItem('username');
      let str1 = "Already logged in as ";
      if (un == null) {}
      else if(un.length>0) {
        this.setState({
          message:  str1.concat(un)
        })
        return;
      }
      var i;
      for (i=0; i<this.state.data.length; i++) {
        if(this.state.username === this.state.data[i].username && this.state.realPassword === this.state.data[i].password) {
          localStorage.setItem('username', this.state.username);
          document.location.href="/";
          return;
        }
      }
      this.setState({
        message: "Incorrect username or password"
      })
    }

    handleLogout(event) {
      event.preventDefault();
      localStorage.clear();
      document.location.href="/";
    }

    createAccount(event) {
      event.preventDefault();
      let un = localStorage.getItem('username');
      let str1 = "Already logged in as ";
      if (un == null) {}
      else if(un.length>0) {
        this.setState({
          message:  str1.concat(un)
        })
        return;
      }
      if (this.checkIfAccountExists() === true) {
        this.setState({
          message: "This account username already exists"
        })
        return;
      }
      var details = {
        'username': this.state.username,
        'password': this.state.realPassword
      };
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      fetch('https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/accounts', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials' : true ,
            'Access-Control-Allow-Headers': 'x-auth, content-type'
          },
          body: formBody
        })
        .then(response => response.json())
        .then(data => this.setState({
          response: data
        }), (error) => {
          if (error) {
            console.log(error)
          }
        });
      this.setState({
        message: "Successful account creation"
      })
      localStorage.setItem('username', this.state.username);
      document.location.href="/";
    }

    handleUsernameChange(e) {
       this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
      var password = e.target.value;
      var realPassword = this.hashCode(password)
      this.setState({
        password: password,
        realPassword: realPassword
      })
    }
    hashCode(word) {
      var hash = "";
      for (var i = 0; i < word.length; i++) {
          var char = word.charCodeAt(i);
          hash = hash + String.fromCharCode(char+1);
      }
      return hash;
    }

    render()
    {
        return(
            <body className = "Pages App">
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
                <Button onClick={this.handleLogout} className="LoginButton" variant="danger">Logout</Button>
            </ButtonToolbar>
            <p>{this.state.message}</p>
               </body>
        );
    }
}
export default Login;
