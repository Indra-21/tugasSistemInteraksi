import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselComp from "./CarouselComp";
import ScienceComp from "./ScienceComp";

const BussinessComp = () => {
  const [bisnis, setBisnis] = useState([]);

  const getBisnis = async () => {
    try {
      let resp = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=805b76e7218f42e5a6775a497603e269"
      );
      setBisnis(resp.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getBisnis();
  }, []);
  return (
    <div>
      <Container style={{ textAlign: "left" }}>
        <h4>Bussiness Category</h4>
        <hr />
        <Row>
          {bisnis.map((bisn, index) => {
            return (
              <>
                <Col md={4} key={index}>
                  <img
                    className="py-2"
                    src={bisn.urlToImage}
                    alt=""
                    width={180}
                  />
                </Col>
                <Col className="py-1" style={{ textAlign: "left" }} md={8}>
                  <p>{bisn.title}</p>
                  <p style={{ fontSize: 13, marginTop: -10, marginBottom: 5 }}>
                    {bisn.publishedAt}
                  </p>
                  <a
                    style={{ fontSize: 15, textDecoration: "none" }}
                    href={bisn.url}
                  >
                    Selengkapnya . . .
                  </a>
                </Col>
              </>
            );
          })}
        </Row>
        <div className="d-flex justify-content-center">
          <Row>
            <Col md={12} xs={12}>
              <img
                className="py-5"
                src="https://ads.antaranews.com/www/images/ee2615a7a29a6b164706481a3560117e.gif"
                alt=""
                width={540}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <CarouselComp />
      <ScienceComp />
    </div>
  );
};

export default BussinessComp;
