import React from "react";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from '../logo.png'

const IconComp = () => {
  return (
    <div>
      <Container className="py-2">
        <Row>
          <Col md={3}>
            <Row style={{ fontSize: 13 }}>
              <Navbar>
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Link style={{color: "black", fontWeight: 500}}>TOP NEWS</Nav.Link>
                    <Nav.Link style={{color: "black", fontWeight: 500}}>TERKINI</Nav.Link>
                    <Nav.Link style={{color: "black", fontWeight: 500}}>TENTANG KAMI</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Row>
          </Col>
          <Col md={6}>
            <img
              src={Logo}
              width={200}
            />
          </Col>
          <Col md={3}>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ marginRight: 12, fontSize: 20 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconComp;
