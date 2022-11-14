
import "./comments.css";

import { FormContext } from "../formcontex/formcontex";
import { useContext,useEffect} from "react";
  
const Comments = () => {
    const { Comments,SetComments} = useContext(FormContext);

      useEffect(() => {
       let getitems= localStorage.getItem("Comments", JSON.stringify(Comments));
         console.log("getitems",getitems);
         if(getitems && getitems.length>Comments.length){
           SetComments(JSON.parse(getitems));
         }
      }, []);

     
    return (
      Comments.map((comment) => (
                    <div className="comment-replies  ms-3 p-4 rounded front-with-align"  key={comment.id}>
                     <div className="d-flex py-2">
                        <img className="rounded-circle comment-img " src={comment.link} alt="profile"/>
                        <div className="flex-grow-1 ms-3">
                           <div className="mb-1"><span  class="fw-bold link-dark pe-1 cursor-pointer">{comment.name}</span> <span class="text-muted text-nowrap">{comment.day} day ago</span></div>
                           <div className="mb-2">{comment.Comment}</div>
                           <div className="hstack align-items-center">
                              <span className="link-secondary me-2 cursor-pointer" ><i class="zmdi zmdi-thumb-up"></i></span>
                              <span className="me-3 small">{comment.like}</span>
                              <span className="link-secondary me-2 cursor-pointer" ><i class="zmdi zmdi-thumb-down"></i></span>
                              <span className="me-3 small ">{comment.dislike}</span>
                              <span className="link-secondary small cursor-pointer" >REPLY</span>
                           </div>
                        </div>
                     </div>
                     </div>)
        )
    )
    };

export default Comments;

// "https://via.placeholder.com/128/cc99ff/7f00ff.png?text="+comment.letter
// https://via.placeholder.com/128/ffcc99/ff8000.png?text=O
// https://via.placeholder.com/128/99ccff/0073e6.png?text=A
// "https://via.placeholder.com/128/fe669e/ffcbde.png?text="+comment.letter