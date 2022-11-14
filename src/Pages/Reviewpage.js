// import logo from "./logo.png";
import "./style.css";

import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";


import { Link } from "react-router-dom";

import Comments from "../Components/comments";



function Review() {

  return (
    <div className="main">
      {/* <header className="App-header App mt-3">
        <p className="fs-4 fw-bold">SL Bus Service Review APP </p>
      </header> */}
       <header className="App-header App mt-3 w-50">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="homebtn">
          <Link to="/" className="homeIcon">
          <i class="bi bi-house-fill"></i>
          </Link>
          <p className="fs-4 fw-bold">SL Bus Service Review APP </p>
        </div>
        
      </header>

      <div className="container box">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 anime mt-5 imgbackground">
            <Row className="mb-3 justify-content-center align-item-center d-flex">
             <Link to="/postcomment" className="justify-content-center align-item-center d-flex"> 
             <Button variant="primary" type="submit" className="mt-3"> what do you want to ask or share?</Button>
              </Link>
            </Row>
              <Row className="mb-3">
                <Comments />
              </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
