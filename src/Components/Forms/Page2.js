import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FormContext } from "../formcontex/formcontex";
import "./Pages.css";

const P2 = ({ setPage }) => {
  const {
    dayname,
    setDayname,
    isWeekday,
    setIsWeekday,
    date,
    setDate,
    daytype,
    setDaytype,
    typeofbus,
    setTypeofbus,
    trafic,
    setTrafic,
    setValidateP2,
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
      
      setValidateP2(true);
      
      setTimeout(() => {
        setPage(3);
      }, 1000);
     
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align">
        <div className="col-lg-12 justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <Row className=" justify-content-center">
              {/* ................... 05 ........................................... */}
{/* 
              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustom03"
                className="mt-5"
              >
                <Form.Label>
                  <b className="me-2">6)</b> day name
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={dayname} onChange={(e)=>setDayname(e.target.value)} required>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Age.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}

              {/* <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">7)</b> is Weekday
                </Form.Label>
                <InputGroup>
                  <Form.Select aria-label="Default select example" value={isWeekday} onChange={(e)=>setIsWeekday(e.target.value)} required>
                    <option value="no">no</option>
                    <option value="yes">yes</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}

           <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">5)</b> Date
                </Form.Label>
                <InputGroup>
                  {/* <input type={"date"} value={date}  onChange={(e)=>setDate(e.target.value)} required/> */}

                  <Form.Control
                    type="date"
                    placeholder="Date"
                    aria-describedby="inputGroupPrepend"
                    defaultValue={date}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                   choose the date
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
                  <b className="me-2">6)</b> day type
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={daytype} onChange={(e)=>setDaytype(e.target.value)} required>
                    <option value="normal">normal</option>
                    <option value="poya">poya</option>
                    <option value="Thai Pongal">Thai Pongal</option>
                    <option value="Sinhala and Tamil New Year">
                      Sinhala and Tamil New Year
                    </option>
                    <option value="Vesak">Vesak</option>
                    <option value="Christmas Day">Christmas Day</option>
                    <option value="Deepavali">Deepavali</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* --------------------------------------------------------------------------------------------------- */}
              {/* <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">9)</b>is holiday ?
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={isHoliday} onChange={(e)=>setIsHoliday(e.target.value)} required>
                  <option value="yes">yes</option>
                    <option value="no">no</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}
              {/* --------------------------------------------------------------------------------------------------- */}
           
           
              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">7)</b> trafic
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={trafic} onChange={(e)=>setTrafic(e.target.value)} required>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
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
                  {" "}
                  <b className="me-2">8)</b> type of bus
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
              </Form.Group>
           
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

export default P2;
