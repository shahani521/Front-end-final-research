import React, { useState, useContext } from "react";
// import CountrySelect from "react-bootstrap-country-select";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FormContext } from "../formcontex/formcontex";
import "./Pages.css";

const P1 = ({ setPage }) => {
  const {
    Route,
    setRoute,
    timeslot,
    setTimeslot,
    Buscrowd,
    setBuscrowd,
    availablebuses,
    setAvailablebuses,
    setValidateP1,
  } = useContext(FormContext);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    } else {
     
      setValidateP1(true);

      setTimeout(() => {
        setPage(2);
      }, 1000);
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-1">
        <div className="col-lg-12 justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <Row className=" justify-content-center">
              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="Location"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">1)</b> Route
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={Route} onChange={(e)=>setRoute(e.target.value)} required>
                    <option value="Negambo - Colombo">Negambo - Colombo</option>
                    <option value="colombo - Negambo">colombo - Negambo</option>
                    <option value="Ragama - Colombo">Ragama - Colombo</option>
                    <option value="colombo - Ragama">colombo - Ragama</option>
                    <option value="Mathara - Colombo">Mathara - Colombo</option>
                    <option value="colombo - matara">colombo - matara</option>
                    <option value="Kegalle - Colombo">Kegalle - Colombo</option>
                    <option value="colombo - Kegalle">colombo - Kegalle</option>
                    <option value="Kurunegala - Colombo">
                      Kurunegala - Colombo
                    </option>
                    <option value="colombo - Kurunegala">
                      colombo - Kurunegala
                    </option>
                    <option value="Vavuniaya - Colombo">
                      Vavuniaya - Colombo
                    </option>
                    <option value="colombo - Vavuniaya">
                      colombo - Vavuniaya
                    </option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please choose a Route.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              {/* ................... 02 ........................................... */}
              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">2)</b> time slot
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={timeslot} onChange={(e)=>setTimeslot(e.target.value)} required>
                    <option value="6.00 - 8.00">6.00 - 8.00</option>
                    <option value="8.00 - 10.00">8.00 - 10.00</option>
                    <option value="10.00 - 12.00">10.00 - 12.00</option>
                    <option value="12.00 - 14.00">12.00 - 14.00</option>
                    <option value="14.00 - 16.00">14.00 - 16.00</option>
                    <option value="16.00 - 18.00">16.00 - 18.00</option>
                    <option value="18.00 - 20.00">18.00 - 20.00</option>
                    <option value="20.00 - 22.00">20.00 - 22.00</option>
                    <option value="22.00 - 24.00">22.00 - 24.00</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a time slot.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* ................... 03 ........................................... */}

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustom03"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">3)</b> Bus crowd
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={Buscrowd} onChange={(e)=>setBuscrowd(e.target.value)}    required>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please choose a Bus crowd
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              {/* --------------------------------------------------------------------------------------------------- */}
              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">4)</b> available buses
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example"  value={availablebuses} onChange={(e)=>setAvailablebuses(e.target.value)} required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  {" "}
                  <b className="me-2">5)</b> type of bus
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={typeofbus} onChange={(e)=>setTypeofbus(e.target.value)} required>
                    <option value="normal">normal</option>
                    <option value="AC">AC</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}
            </Row>

            <Row className=" d-flex justify-content-center">
              <Col
                md={12}
                lg={12}
                className="d-flex justify-content-center mt-4"
              >
                <Button type="submit">Next</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default P1;
