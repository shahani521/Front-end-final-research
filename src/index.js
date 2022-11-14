import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
// import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { ContexProvider } from "./Components/formcontex/formcontex";
// import {ContextProvider} from "./Components/context/Context";
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContexProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ContexProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
