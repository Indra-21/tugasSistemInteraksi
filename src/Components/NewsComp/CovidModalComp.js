import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Col, Card, Row } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [covid, setCovid] = useState([]);
  const [search, setSearch] = useState("");

  const getCovid = async () => {
    try {
      let response = await axios.get("https://api.covid19api.com/summary");
      setCovid(response.data.Countries);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getCovid();
  }, []);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <input
        className="mt-5 w-50 mb-3 mx-3 p-3"
        type="text"
        placeholder="Search Country..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row>
        {covid
        .filter((cov) => {
            if(search === ""){
                return cov
            } else if (
                cov.Country.toLowerCase().includes(search.toLowerCase())
            ) {
                return cov
            }
        })
        .map((cov, index) => {
          return (
            <Col md={6} xs={12}>
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: 23, fontWeight: "bold" }}>
                    <p>Negara: {cov.Country}</p>
                    <p>Tanggal: {cov.Date}</p>
                  </Card.Title>
                  <Table>
                    <thead>
                      <tr className="align-items-center text-center">
                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>Total Confirmed</th>
                        <th>Total Deaths</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{cov.Country}</td>
                        <td>{cov.NewConfirmed}</td>
                        <td>{cov.TotalConfirmed}</td>
                        <td>{cov.TotalDeaths}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Cek Data Terbaru
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
