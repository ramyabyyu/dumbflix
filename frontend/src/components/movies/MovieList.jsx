import React from "react";
import { Card } from "react-bootstrap";

const MovieList = ({ movieImg, title, year }) => {
  return (
    <Card className="rounded shadow border-0 bg-dark text-white">
      <Card.Img variant="top" src={movieImg} />
      <Card.Body>
        <h5>{title}</h5>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieList;
