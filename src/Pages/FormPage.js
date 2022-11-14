// import logo from "./logo.png";
import "./style.css";
// import FormPage from "./Components/Form.Page";
// import Crop from "../Components/Crop.page";
import React, { useContext, useState } from "react";
import { FormContext } from "../Components/formcontex/formcontex";
import Buttonlist from "../Components/Pagination/Buttonlist";
import P1 from "../Components/Forms/Page1";
import P2 from "../Components/Forms/Page2";
import P3 from "../Components/Forms/Page3";
import Loader from "../Components/Loader/Loader";
import ResultPage from "../Components/Result.page";
import { Link } from "react-router-dom";


function App() {
  const { result, isLoading } = useContext(FormContext);
  const [page, setPage] = useState(1);
  return (
    <div className="main">
      {isLoading ? <Loader /> : ""}
      <header className="App-header App mt-3 w-50">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="homebtn">
          <Link to="/" className="homeIcon">
          <i class="bi bi-house-fill"></i>
          </Link>
          <p className="fs-4 fw-bold w-100">Bus Allocation prediction </p>
        </div>
        
      </header>
      
      <div className="container box">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-md-12 anime imgbackground h-100">
            {page === 1 ? (
              <P1 setPage={setPage} />
            ) : page === 2 ? (
              <P2 setPage={setPage} />
            ) : page === 3 ? (
              <P3 setPage={setPage} />
            ) : result? (
              <ResultPage setPage={setPage} />
            ) : (
              ' Result not found'
            )}
          </div>
        </div>

        {!result && (
          <div className="row justify-content-center mt-4 container w-100 mbot-4">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center w-100 ">
              <Buttonlist page={page} setPage={setPage} totalPage={3} />
            </div>
          </div>
        )}
      </div>
      </div>
    
  );
}

export default App;
