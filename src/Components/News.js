import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BussinessComp from "./NewsComp/BussinessComp";
import HealthComp from "./NewsComp/HealthComp";
import TechnologyComp from "./NewsComp/TechnologyComp";

const News = () => {
  const [health, setHealth] = useState([]);

  const getHealth = async () => {
    try {
      let res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=805b76e7218f42e5a6775a497603e269"
      );
      setHealth(res.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getHealth();
  }, []);
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col md={2}>
            <div>
              <h4>Tips Sehat</h4>
              <hr />
            </div>
            {health.map((heal, index) => {
              return (
                <Col key={index}>
                  <HealthComp
                    author={heal.author}
                    title={heal.title}
                    date={heal.publishedAt}
                    url={heal.url}
                  />
                </Col>
              );
            })}
          </Col>
          <Col md={7}>
            <BussinessComp />
          </Col>
          <Col md={3}>
              <TechnologyComp />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
