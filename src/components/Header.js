import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
