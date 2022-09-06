import React from "react";
import "../assets/css/NotFound.modules.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="text-white bg-dark not__found-container">
      <h5>404 Page Not Found</h5>
      <Link to="/" className="back__to-home"> <FaArrowAltCircleLeft/> Back to home</Link>
    </div>
  );
};

export default NotFound;
