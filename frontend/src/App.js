import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Result from "./component/Result.jsx"
import Dragdrop from "./pages/Dragdrop";
import Feedback from "./pages/Feedback";
import FeedbackPage from "./pages/FeedbackPage";
import Upload from "./component/Upload";
// import Navbar from "./component/NavaBar.jsx";
import Navbar from "./component/NavBar/NavBar.jsx";
import Community from "./component/Community.jsx";


function App() {

  const [selectedFile, setSelectedFile] = useState(null)
  const [base64String, setBase64String] = useState(null);
  const [prediction, setPrediction] = useState(null)


  return (
    <>
      <Routes >
        <Route path="/" element={<Navbar/>}  >
          <Route index element={<Home/>}/>
          <Route path="/upload" element={<Upload base64String={base64String} setBase64String={setBase64String} prediction={prediction} setSelectedFile={setSelectedFile} setPrediction={setPrediction} selectedFile={selectedFile}/>} />
          <Route path="/result" element={<Result  is_plant={prediction?.is_plant} name={prediction?.class} smallImgUrl={selectedFile} confidence={prediction?.confidence}/>} />
          <Route path="/community" element={<Community/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{/* <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage/>}/>
          <Route path="/settings" element={<SideNav/>}>
              <Route path="edit-profile" element={<EditProfile/>}/>
              <Route path="change-password" element={<ChangePassword/>}/>
          </Route>
          <Route path="/signin" element={<UserAuthForm type="sign-in"/>} />
          <Route path="/signup" element={<UserAuthForm type="sign-up"/>} />
          <Route path="/search/:query" element={<SearchPage/>} />
          <Route path="/user/:id" element={<ProfilePage/>} />
          <Route path="/blog/:blog_id" element={<BlogPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route> */}