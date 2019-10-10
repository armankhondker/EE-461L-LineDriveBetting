import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function StickNavbar() {
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">LineDriveBetting</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default StickNavbar;