import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../App.css';

function StickNavbar() {

    let un = localStorage.getItem('username');
    if (un == null) {
      un = ""
    }

    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">LineDriveBetting</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                <Nav.Link href="Blog">Blog</Nav.Link>
                {
                  un.length === 0 ? <Nav.Link className="Login" href="Login">Login</Nav.Link>
                  : <Nav.Link className="Login" href="Login">{un}</Nav.Link>
                }
            </Nav>
        </Navbar>
    );
}

export default StickNavbar;
