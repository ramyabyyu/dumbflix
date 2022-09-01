import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Header = () => {
  // Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-sm-top">
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
            <Button variant="danger" onClick={handleShow}>
              Sign In
            </Button>
            <AuthModal show={show} handleClose={handleClose} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
