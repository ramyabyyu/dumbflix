import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../assets/css/Auth.modules.css";

const AuthModal = ({ show, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const [showPw, setShowPw] = useState(false);

  const switchMode = () => setIsRegister(!isRegister);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {isRegister && (
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" autoFocus />
          </Form.Group>
          <div className="mb-3 pw__container">
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPw ? "text" : "password"}
                placeholder="Choose a password"
              />
            </Form.Group>
            <div
              className="pw__icon-container"
              onClick={() => setShowPw(!showPw)}
            >
              {showPw ? (
                <FaEyeSlash className="pw__icon" />
              ) : (
                <FaEye className="pw__icon" />
              )}
            </div>
          </div>
          {isRegister && (
            <Form.Group className="mb-3" controlId="c_password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Repeat password" />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={switchMode}>
          {isRegister ? "Already have an account?" : "Don't have an account?"}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {isRegister ? "Register" : "Login"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
