import React, { Component } from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

function NavbarForm() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

function LoginTitle() {
    return <h1>FAÇA O LOGIN</h1>;
}

class MainNavbar extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let navbar;

    if (isLoggedIn) {
        navbar = <NavbarForm />;
    } else {
        navbar = <LoginTitle />;
    }
    return navbar;
  }
}

export default MainNavbar;
