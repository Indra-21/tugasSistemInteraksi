import React from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const color = {
  color: "white"
}



const NavbarComp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="success" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                    style={{fontSize: 20}}
                  >
                    <Nav.Link style={color}>Home</Nav.Link>
                    <Nav.Link style={color}>Bisnis</Nav.Link>
                    <Nav.Link style={color}>Entertainment</Nav.Link>
                    <Nav.Link style={color}>General</Nav.Link>
                    <Nav.Link style={color}>Health</Nav.Link>
                    <Nav.Link style={color}>Science</Nav.Link>
                    <Nav.Link style={color}>Sports</Nav.Link>
                    <Nav.Link style={color}>Technology</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button style={color} variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarComp;
