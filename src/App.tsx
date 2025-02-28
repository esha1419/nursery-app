import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element ={<Login />} />
         <Route path="/reg" element ={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
