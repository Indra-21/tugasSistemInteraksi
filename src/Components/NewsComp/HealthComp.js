import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HealthComp = ({ author, title, date, url }) => {
  return (
    <div>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col>
            <p style={{ fontSize: 14, marginBottom: -1, fontStyle: "italic" }}>
              {author}
            </p>
            <a style={{ fontWeight: "bold", fontSize: 15, textDecoration: "none", color: "black" }} href={url}>{title}</a>
            <p style={{ fontSize: 14, marginBottom: 30 }}>{date}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HealthComp;
