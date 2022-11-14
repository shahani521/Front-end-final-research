
import "./Buttonlist.css";
import { useContext } from "react";
import {FormContext} from "../formcontex/formcontex";

const Buttonlist = ({ page, setPage, totalPage }) => {
    const {
        validateP1,
        validateP2,
        validateP3
      } = useContext(FormContext);
  
    const handlePage = (type) => {
        if (type === "prev") {
            if (page > 1) {
                setPage(page - 1);
            }
        } else if (type === "next") {
            if (page < totalPage) {
                setPage(page + 1);
            }
        }
    };
    return (
        <div className="buttonList">
            <button
                className="buttonList__button text-center"
                onClick={() => handlePage("prev")}
            >
                Prev
            </button>
           
            <button
                className={page===1?"buttonList__button active":page>1?"buttonList__button":"buttonList__button"}
                onClick={() => setPage(1)}
            >
                1
            </button>
            <button
                className={page===2?"buttonList__button active":page>2?"buttonList__button":"buttonList__button"} 
                onClick={() => setPage(2)}
                disabled={page<2&&!validateP1?true:false}
            >
                2
            </button>

            <button
                className= {page===3?"buttonList__button active":page>3?"buttonList__button":"buttonList__button"}
                onClick={() => setPage(3)}
                disabled={page<3&&!validateP2?true:false}
            >
                3
            </button>

             <button
                className={page===4?"buttonList__button active":page>4?"buttonList__button":"buttonList__button"}
                onClick={() => setPage(4)}
                disabled={page<4 && !validateP3?true:false}
            >
                4
            </button>
            <button
                className="buttonList__button"
                onClick={() => handlePage("next")}
                disabled={!validateP3||!validateP2||!validateP1?true:false}
            >
                Next
            </button>
        </div>
    );
}

export default Buttonlist;