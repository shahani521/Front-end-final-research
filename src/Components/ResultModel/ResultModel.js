
import "./ResultModel.css"
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React, { useContext} from "react";
import CloseButton from 'react-bootstrap/CloseButton';

import { useNavigate } from "react-router-dom";


import { FormContext } from "../formcontex/formcontex";

 function ResultModel()
{

  const {resultModel,setResultModel,PostComment,addnewComment,reviewFinal } = useContext(FormContext);

  const navigate = useNavigate(); 

    const handleCloseicon = () => {
      setResultModel(false);
      };

      const handleClose = () => {
        setResultModel(false);
        addnewComment(PostComment);
        navigate("/review");
        };
    return (
        <>
        
          <Modal
            show={resultModel}
            onHide={() => handleClose}
            size="md"
            // dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="bg-white">
              <Modal.Title id="contained-modal-title-vcenter">
                Results
              </Modal.Title>
              <CloseButton  onClick={handleCloseicon}/>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <Container className=" justify-content-center">
                <Row className="justify-content-center w-100">
                  <Col s={12} md={12} lg={12} className="justify-content-center align-items-center  mt-3" >
                  <p className="fw-light fs-5"> {reviewFinal.text} </p>
                  <p className="fw-bold fs-5"> {reviewFinal.output} </p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer className="bg-white">
            <Button variant="secondary" onClick={handleCloseicon}>
               Cancle
              </Button>
              <Button variant="primary" onClick={handleClose}>
               Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default ResultModel;