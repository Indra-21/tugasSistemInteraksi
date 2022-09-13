import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerComp from "../Components/BannerComp";
import GifComp from "../Components/GifComp";
import News from "../Components/News";
import FooterComp from "./FooterComp";

const Home = () => {
  return (
    <div>
      <GifComp />
      <Container style={{backgroundColor: "#fac69b"}} className="py-4">
        <Row className="d-felx justify-content-center">
          <Col>
            <BannerComp />
            <GifComp />
            <News />
            <FooterComp />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
