import React from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import CovidModalComp from "./CovidModalComp";

const CovidComp = () => {
  return (
    <div>
      <Container>
        <h4 style={{textAlign: "left"}}>Data Covid 19</h4>
        <hr />
        <Row>
          <Col>
            <Card
              className="mb-4"
              style={{ width: "12rem" }}
            >
              <Card.Body>
                <Card.Title>Data Terbaru</Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                Informasi data terbaru seputar kasus COVID-19 di seluruh dunia.
                </Card.Text>
                <CovidModalComp />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CovidComp;
