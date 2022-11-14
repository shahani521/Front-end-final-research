import Passenger from "../SVG Components/passenger.svg";
import BusOwner from "../SVG Components/City-driver.svg";
import { Link } from "react-router-dom";

import './style.css';

function HomePage() {
  return (
    <div className="main">
      <div className="container">
      <div className="row justify-content-center text-center mt-5">
        <div className="homebtn">
          <Link to="/" className="homeIcon">
          <i class="bi bi-house-fill"></i>
          </Link>
          <h1>SL bus Service</h1> 
        </div>
       
     
      </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-5 col-ms-12 mt-3">
          <Link to={'review'} className="defual">  <div class="card">
              <div className="card-body text-center">
                <img
                  src={Passenger}
                  className="card-img-top"
                  width={300}
                  height={400}
                  alt="Passenger"
                />
                <h2>Passenger</h2>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 col-ms-12 mt-3">
          <Link to={'form'} className="defual">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={BusOwner}
                  className="card-img-top"
                  width={300}
                  height={400}
                  alt="Passenger"
                />
                <h2>Bus Owner</h2>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
