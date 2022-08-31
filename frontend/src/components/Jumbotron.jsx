import React from "react";
import theWitcherImg from "../assets/images/img3.jpg";
import { Row, Col, Card } from "react-bootstrap";
import "../assets/css/Jumbotron.modules.css";

const Jumbotron = () => {
  return (
    <div className="position-relative overflow-hidden">
      <img src={theWitcherImg} alt="the witcher" className="jumbotron__img" />
      <button className="btn btn-danger btn-lg position-absolute watch__now-btn">
        Watch Now
      </button>
    </div>
  );
};

export default Jumbotron;
