import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="https://signalwire.com">
            <img
              src="/warpmelogo.png"
              className="d-inline-block align-top"
              style={{ width: 180 }}
              alt="SignalWire Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}
