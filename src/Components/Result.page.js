
import './Result.page.css';
import { FormContext } from "./formcontex/formcontex";
import { useContext } from 'react';

const ResultPage = ({setPage}) => {
    const { result} = useContext(FormContext);

  //  const onclickhandler = () => {
  //       setPage(4);
  //       SetResult(null);
  //   } 
  return (
    <div className="container h-100 mt-5">
      <div className="row justify-content-center ">
        <div className="col-lg-12 col-md-12  col-sm-12 justify-content-center text-center">
        <p className="text-center fs-l fw-bold mt-3 m-bot">{result.result} </p>
          <p className="text-center fs-3 fw-bold mt-3 m-bot">{"Number of buses should be allocated."} </p>
           
        </div>
      </div>
   

      <div className="row justify-content-center mt-4">
        <div className="col-lg-12 col-md-12  col-sm-12 justify-content-center text-center">
        <button type="button" className="btn btn-primary" onClick={()=>window.location.pathname="/form"}>Retry with new details</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
