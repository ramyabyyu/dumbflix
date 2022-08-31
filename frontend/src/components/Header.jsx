import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link fw-bold" to="/">
              Home
            </Link>
            <Nav.Link className="fw-bold" href="#tv-series">
              Tv Show
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#movie">
              Movies
            </Nav.Link>
          </Nav>
          <div>
            <Link className="navbar-brand text-danger" to="/">
              DumbFlix
            </Link>
          </div>
          <Nav className="ms-auto">
            <Link to="#" className="btn btn-light text-danger me-3">
              Register
            </Link>
            <Link to="#" className="btn btn-danger">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
