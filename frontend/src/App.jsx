import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./components";
import Home from "./container/Home";
import {GoogleOAuthProvider} from "@react-oauth/google";


export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}