import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FormContext } from "../formcontex/formcontex";
import "./Pages.css";

const P3 = ({ setPage }) => {
  const {
    available_bus_drivers,
    setAvailable_bus_drivers,
    weather,
    setWeather,
    route_condition,
    setRoute_condition,
    busyreason,
    setBusyreason,
    setValidateP3,
    GenerateResult
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
    
      
      setValidateP3(true);
  
      if(GenerateResult(event))
      {
      setPage(4);
      }
      
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3 align">
        <div className="col-lg-12  justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <Row className="justify-content-center">
             

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">9)</b> available_bus_drivers
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={available_bus_drivers} onChange={(e)=>setAvailable_bus_drivers(e.target.value)} required>
                    <option value="enough">enough</option>
                    <option value="no">no</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">10)</b> weather
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={weather} onChange={(e)=>setWeather(e.target.value)} required>
                    <option value="normal">normal</option>
                    <option value="rain">rain</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">11)</b> route_condition
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={route_condition} onChange={(e)=>setRoute_condition(e.target.value)} required>
                    <option value="good">good</option>
                    <option value="slippery">slippery</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">12)</b> busy reason
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={busyreason} onChange={(e)=>setBusyreason(e.target.value)} required>
                    <option value="normal">normal</option>
                    <option value="school">school</option>
                    <option value="school,normal">school,normal</option>
                    <option value="office">office</option>
                    <option value="office,school">office,school</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className=" d-flex justify-content-center">
              <Col
                md={12}
                lg={12}
                className="d-flex justify-content-center mt-4"
              >
                <Button type="submit">Generate Result</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default P3;
