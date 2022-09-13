import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";

const CarouselComp = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let respon = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=805b76e7218f42e5a6775a497603e269"
      );
      setData(respon.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel>
              {data.map((dat, index) => {
                return (
                  <Carousel.Item>
                    <a href={dat.url}>
                      <img
                        src={dat.urlToImage}
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
                        <h3 style={{ color: "black" }}>{dat.title}</h3>
                      </Carousel.Caption>
                    </a>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarouselComp;
