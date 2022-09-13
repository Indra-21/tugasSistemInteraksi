import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";

const BannerComp = () => {
  const [topData, setTop] = useState([]);

  const getTopData = async () => {
    try {
      let resp = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=805b76e7218f42e5a6775a497603e269"
      );
      setTop(resp.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTopData();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar style={{ marginTop: -20, marginBottom: 6 }} expand="lg">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse>
              <Nav 
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              style={{fontSize: "15"}}>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  TOPIK UTAMA
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #SPORTS
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #PPKM
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #VAKSINASI
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #COVID 19
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #VAKSIN CORONA
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #BANSOS
                </Nav.Link>
                <Nav.Link style={{ color: "black", fontWeight: "bold" }}>
                  #PSBB
                </Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={9}>
            <Row>
              <Col md={8}>
                <Carousel>
                  {topData.map((data, index) => {
                    return (
                      <Carousel.Item>
                        <a href={data.url}>
                          <img
                            src={data.urlToImage}
                            alt="First slide"
                            width={600}
                            height={350}
                          />
                          <Carousel.Caption
                            style={{
                              textAlign: "left",
                              backgroundColor: "#f2f3f5",
                              opacity: 0.8,
                              padding: 15,
                              borderRadius: 5,
                            }}
                          >
                            {/* <h3>First slide label</h3> */}
                            <h4 style={{ color: "black" }}>{data.title}</h4>
                          </Carousel.Caption>
                        </a>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Col>
              <Col md={4}>
                <img
                  src="https://cdn.antaranews.com/cache/270x180/2022/02/01/76.jpg.webp"
                  alt=""
                />
                <img
                  src="https://cdn.antaranews.com/cache/270x180/2022/02/01/airlangga.jpg.webp"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col md={3} className="d-flex align-items-center py-3">
            <Card style={{ width: "27rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.antaranews.com/cache/350x233/2022/01/31/WhatsApp-Image-2022-01-31-at-14.19.30.jpeg.webp"
              />
              <Card.Body>
                <Card.Title>
                  Kemnaker: G20 momentum strategis Indonesia di bidang
                  ketenagakerjaan
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerComp;
