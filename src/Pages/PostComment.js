// import logo from "./logo.png";
import "./style.css";
import React, { useContext} from "react";
import { FormContext } from "../Components/formcontex/formcontex";
import Loader from "../Components/Loader/Loader";
import Row from "react-bootstrap/Row";
import PostComment from "../Components/comments/PostComment";
import ResultModel from "../Components/ResultModel/ResultModel";
import { Link } from "react-router-dom";


function PostCommentPge() {
  const {isLoading,resultModel } = useContext(FormContext);

  return (
    <div className="main">
      {isLoading ? <Loader /> : ""}
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
              <Row className="mb-3 justify-content-center align-item-center">
              <PostComment />
              </Row>
          </div>
        </div>
      </div>
    {
        resultModel ? <ResultModel /> : ""
    }

    </div>
  );
}

export default PostCommentPge;