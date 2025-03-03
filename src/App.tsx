import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import LandingPage from "./components/LandingPage";
import Nursery from "./components/Nursery";
import Home from "./components/Home";




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element ={<Login />} />
        
         <Route path="/reg" element ={<Registration />} />
         <Route path="/landing" element ={<LandingPage />} />
         <Route path="/nursery" element ={<Nursery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
