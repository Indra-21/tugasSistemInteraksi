import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GifComp = () => {
  return (
    <div>
      <Container className="py-2 d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <Row>
            <Col md={12} xs={12}>
              <img
                className="py-1"
                src="https://ads.antaranews.com/www/images/07fdba5168afb6277c774710d9d6d315.gif"
                alt=""
                width={480}
              />
            </Col>
          </Row>
        </div>
        {/* <Row>
                  <Col md={12} xs={12}>
                    <img src="https://ads.antaranews.com/www/images/07fdba5168afb6277c774710d9d6d315.gif" alt="" />
                  </Col>
              </Row> */}
      </Container>
    </div>
  );
};

export default GifComp;
