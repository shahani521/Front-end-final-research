import React, { useState, useContext } from "react";
import CountrySelect from "react-bootstrap-country-select";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { FormContext } from "./formcontex/formcontex";

function FormPage() {
  const {
    Location,
    Sex,
    Age,
    hadsex,
    Sexualpartners,
    sextype,
    Symptoms,
    History_of_HIV,
    Pre_Exposure_Prophylaxis,
    setSex,
    setLocation,
    setAge,
    setHadsex,
    setSexualpartners,
    setsextype,
    setSymptoms,
    setHistory_of_HIV,
    setPre_Exposure_Prophylaxis,
    setValidate,
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
      setValidate(true);
    }

    console.log("validated", form.checkValidity());

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-lg-11 d-flex justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <Row className="mb-3">
              {/* ...........................01 .................... */}

              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="Location"
                className="mt-4"
              >
                <Form.Label>1) Route</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" required>
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
                md="6"
                lg="6"
                controlId="validationCustomUsername"
                className="mt-4"
              >
                <Form.Label>2) time slot</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" required>
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
                    You did it!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* ................... 03 ........................................... */}

              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="validationCustom03"
                className="mt-4"
              >
                <Form.Label>3) Age</Form.Label>
                <Form.Label className="ms-5">
                  <b>{Age}</b> years Old
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Range
                    min={18}
                    max={100}
                    onChange={(e) => setAge(e.target.value)}
                    value={Age}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Age.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* ................... 04 ........................................... */}
              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="validationCustomUsername"
                className="mt-3"
              >
                <Form.Label>4) Do you had sex with last 3 weeks ?</Form.Label>
                <InputGroup hasValidation>
                  <Form.Check
                    inline
                    label="Yes"
                    name="sex"
                    feedbackType="invalid"
                    checked={hadsex === true}
                    onChange={() => setHadsex(true)}
                    type="radio"
                    id={`inline-radio-1`}
                    required
                  />
                  <Form.Check
                    inline
                    label="No"
                    checked={hadsex === false}
                    onChange={() => setHadsex(false)}
                    name="sex"
                    type="radio"
                    id={`inline-radio-2`}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* ................... 05 ........................................... */}

              {hadsex && (
                <>
                  <Form.Group
                    as={Col}
                    md="6"
                    lg="6"
                    controlId="validationCustom03"
                    className="mt-3"
                  >
                    <Form.Label>
                      5) Number of Sexual partners within last 3 weeks?
                    </Form.Label>
                    <Form.Label className="ms-5">
                      <b>{Sexualpartners}</b> Sexual partners
                    </Form.Label>
                    <InputGroup hasValidation>
                      <Form.Range
                        min={1}
                        max={10}
                        onChange={(e) => setSexualpartners(e.target.value)}
                        value={Sexualpartners}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Age.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    lg="6"
                    controlId="validationCustomUsername"
                    className="mt-3"
                  >
                    <Form.Label>
                      6) Who do you had Sex with duirng last 3 weeks?
                    </Form.Label>
                    <InputGroup>
                      <Form.Check
                        inline
                        label="Male"
                        name="sex"
                        feedbackType="invalid"
                        type="checkbox"
                        checked={sextype.male}
                        onChange={(e) =>
                          setsextype({ ...sextype, male: e.target.checked })
                        }
                        id={`inline-radio-1`}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="sex"
                        checked={sextype.female}
                        onChange={(e) =>
                          setsextype({ ...sextype, female: e.target.checked })
                        }
                        type="checkbox"
                        id={`inline-radio-2`}
                      />

                      <Form.Check
                        inline
                        label="Trans"
                        name="sex"
                        checked={sextype.trans}
                        onChange={(e) =>
                          setsextype({ ...sextype, trans: e.target.checked })
                        }
                        type="checkbox"
                        id={`inline-radio-2`}
                      />
                      <Form.Check
                        inline
                        label="other"
                        name="sex"
                        checked={sextype.other}
                        onChange={(e) =>
                          setsextype({ ...sextype, other: e.target.checked })
                        }
                        type="checkbox"
                        id={`inline-radio-2`}
                      />

                      <Form.Control.Feedback type="invalid">
                        choose One of that
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </>
              )}

              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="validationCustomUsername"
                className="mt-3"
              >
                <Form.Label>7) Symptoms ?</Form.Label>
                <InputGroup>
                  <Form.Check
                    inline
                    label="Fever"
                    name="Symptoms"
                    feedbackType="invalid"
                    type="checkbox"
                    checked={Symptoms.fever}
                    id={`inline-radio-1`}
                    onChange={(e) =>
                      setSymptoms({ ...Symptoms, fever: e.target.checked })
                    }
                  />
                  <Form.Check
                    inline
                    label="Chills"
                    name="Symptoms"
                    checked={Symptoms.chills}
                    feedbackType="invalid"
                    type="checkbox"
                    id={`inline-radio-2`}
                    onChange={(e) =>
                      setSymptoms({ ...Symptoms, chills: e.target.checked })
                    }
                  />
                  <Form.Check
                    inline
                    label="Lymphadenopathy"
                    name="Symptoms"
                    checked={Symptoms.Lymphadenopathy}
                    type="checkbox"
                    id={`inline-radio-3`}
                    onChange={(e) =>
                      setSymptoms({
                        ...Symptoms,
                        Lymphadenopathy: e.target.checked,
                      })
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="validationCustomUsername"
                className="mt-3"
              >
                <Form.Label>8) History of HIV ?</Form.Label>
                <InputGroup hasValidation>
                  <Form.Check
                    inline
                    label="Yes"
                    name="HIV"
                    feedbackType="invalid"
                    checked={History_of_HIV === true}
                    onChange={() => setHistory_of_HIV(true)}
                    type="radio"
                    id={`inline-radio-1`}
                    required
                  />
                  <Form.Check
                    inline
                    label="No"
                    checked={History_of_HIV === false}
                    onChange={() => setHistory_of_HIV(false)}
                    name="HIV"
                    type="radio"
                    id={`inline-radio-2`}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                lg="6"
                controlId="validationCustomUsername"
                className="mt-3"
              >
                <Form.Label> 9) Pre Exposure Prophylaxis ?</Form.Label>
                <InputGroup hasValidation>
                  <Form.Check
                    inline
                    label="Yes"
                    name="Exposure"
                    feedbackType="invalid"
                    type="radio"
                    checked={Pre_Exposure_Prophylaxis === true}
                    onChange={() => setPre_Exposure_Prophylaxis(true)}
                    id={`inline-radio-1`}
                    required
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="Exposure"
                    checked={Pre_Exposure_Prophylaxis === false}
                    onChange={() => setPre_Exposure_Prophylaxis(false)}
                    type="radio"
                    id={`inline-radio-2`}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <Col md="12" lg="12" className="mt-3 justify-content-center">
                <Button type="submit">Submit form</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
