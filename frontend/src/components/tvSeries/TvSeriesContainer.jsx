import React, { useState } from "react";
import dummyTvSeriesImg from "../../assets/images/img2.webp";
import { Row, Col, Container } from "react-bootstrap";
import TvSeriesList from "./TvSeriesList";

const TvSeriesContainer = () => {
  const [tvSeriesList, setTvSeriesList] = useState([
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
  ]);
  return (
    <Container className="my-5 overflow-hidden" id="tv-series">
      <h3 className="text-start text-white fw-bold mb-3">Tv Series</h3>
      <Row>
        {tvSeriesList.map((tv, index) => (
          <Col md={2} key={index}>
            <TvSeriesList
              tvSeriesImg={tv.tvSeriesImg}
              title={tv.title}
              year={tv.year}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TvSeriesContainer;
