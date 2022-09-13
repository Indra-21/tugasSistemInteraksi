import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import SportsComp from "./SportsComp";

const ScienceComp = () => {
  const [science, setScience] = useState([]);

  const getScience = async () => {
    try {
      let response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=483b3aadca634590b4207aac4c9a94d0"
      );
      setScience(response.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getScience();
  }, []);
  return (
    <div>
      <Container className="mt-5">
          <h4 style={{textAlign: "left"}}>Info Science</h4>
          <hr />
        <Row>
          {science.map((sci, index) => {
            return (
              <Col xs={6} className="d-flex justify-content-center" md={4} key={index}>
                <a style={{textDecoration: "none", color: "black"}} href={sci.url}>
                <Card style={{ width: "10rem", marginBottom: 15 }}>
                  <Card.Img variant="top" src={sci.urlToImage} width={200} height={100} />
                  <Card.Body>
                    <Card.Title style={{fontSize: 13, textAlign: "left", background: "none"}}>{sci.title}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
              </Col>
            );
          })}
        </Row>
      </Container>
      <SportsComp />
    </div>
  );
};

export default ScienceComp;
