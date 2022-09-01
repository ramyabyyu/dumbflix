import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import dummyMovieImg from "../../assets/images/img2.webp";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const [movieLists, setMovieLists] = useState([
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
  ]);

  return (
    <Container className="my-5 overflow-hidden" id="">
      <h3 className="text-start text-white fw-bold mb-3">Movie</h3>
      <Row>
        {movieLists.map((movie, index) => (
          <Col md={2} key={index}>
            <MovieList
              movieImg={movie.movieImg}
              title={movie.title}
              year={movie.year}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesContainer;
