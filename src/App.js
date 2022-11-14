import logo from "./logo.png";
import "./App.css";
// import FormPage from "./Components/Form.Page";

import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import Review from "./Pages/Reviewpage";
import PostCommentPge from "./Pages/PostComment";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/review" element={<Review/>} />
      <Route path="/postcomment" element={<PostCommentPge/>} />
    </Routes>
   
  );
}

export default App;
