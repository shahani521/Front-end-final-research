import './comments.css';
import { useState,useContext } from 'react';

import { FormContext } from "../formcontex/formcontex";

const axios = require('axios');

const PostComment =()=>
{
    const {setIsLoading,setResultModel ,setPostComment,setreviewFinal} = useContext(FormContext);
    const [link,setLink] = useState("https://via.placeholder.com/128/fe669e/ffcbde.png?text=S");
    const [name,SetName] = useState("sheshani");
    const [comment,setComment] = useState("");

    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const handlecancel = (e) => {
        setComment("");
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
      
        setTimeout(() => {
            setIsLoading(false);
            setResultModel(true);
        }, 2000);
        
        setPostComment({
            link:link,
            name:name,
            Comment:comment,
            day:"0",
            like:0,
            dislike:0 
        })
        const newComment = {
            comment: comment,
            // postId: props.postId
        }
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        };

        fetch('https://bus-review.herokuapp.com/', requestOptions)
        .then(response => response.json())
        .then(data => setreviewFinal(data));


        // axios.post("http://127.0.0.1:5000/",newComment)
        // .then(res => {
        //     setIsLoading(false);
        //     setreviewFinal(res.data);
        //     console.log(res.data);
        //     setResultModel(true);
        //     // setComments([...comments,res.data]);
        //     setComment("");
            
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/comments/${props.postId}`)
    //     .then(res => {
    //         setComments(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // },[])

    return (
        <div>
            {/* {loading ? <Loader /> : ""} */}
     
            <div className="d-flex">
               <img className="rounded-circle me-3 img-size" src={link}alt="profile" />
               <div className="flex-grow-1">
                  <div className="hstack gap-2 mb-1">
                     <span  className="fw-bold link-dark">{name}</span>
                  </div>
                  <div className="mb-3">
                     {/* <textarea class="form-control w-100 text-area-size" rows={15} placeholder="Leave a comment here" ></textarea> */}
                     {/* <label for="my-comment">Leave a comment here</label> */}
                    <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="my-comment"
                    value={comment}
                    onChange={handleComment}
                    rows="5"
                   > </textarea>
                     
                  </div>
                  <div className="button-align">
                     <button className="btn btn-sm btn-link link-secondary text-uppercase" onClick={handlecancel}>cancel</button>
                     <button className="btn btn-sm btn-primary text-uppercase" onClick={handleSubmit}>comment</button>
                  </div>
               </div>
            </div>
         </div>
        // </div>
    )
}

export default PostComment;