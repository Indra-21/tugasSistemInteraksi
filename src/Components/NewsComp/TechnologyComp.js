import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import CovidComp from "./CovidComp";

const TechnologyComp = () => {
  const [techno, setTechno] = useState([]);

  const getTechno = async () => {
    try {
      let respons = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=483b3aadca634590b4207aac4c9a94d0"
      );
      setTechno(respons.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTechno();
  }, []);
  return (
    <div>
      <Container>
          <CovidComp />
          <h4>Berita Technology</h4>
          <hr />
        <Row>
          {techno.map((tech, index) => (
            <Col>
            <a style={{textDecoration: "none", color: "black" }} href={tech.url}>
              <Card style={{ width: "15rem", marginBottom: 10}}>
                <Card.Img variant="top" src={tech.urlToImage} />
                <Card.Body style={{textAlign: "left"}}>
                  <p style={{fontStyle: "italic"}}>{tech.author}</p>
                  <Card.Text>
                    {tech.title}
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TechnologyComp;
