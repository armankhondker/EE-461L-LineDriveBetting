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
            <Navbar.Brand href="/"><b>LineDriveBetting</b></Navbar.Brand>
            <Nav className="mr-auto">
               {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/About"><b>About</b></Nav.Link>
                <Nav.Link href="/Blog"><b>Blog</b></Nav.Link>
                {
                  un.length === 0 ? <Nav.Link className="Login" href="/Login"><b>Login</b></Nav.Link>
                  : <Nav.Link className="Login" href="/Login"><b>{un}</b></Nav.Link>
                }
                 <Nav.Link href="/Search"><b>Search</b></Nav.Link>
                 <Nav.Link href="/Bet"><b>Bet</b></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default StickNavbar;
