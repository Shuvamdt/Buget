import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="overflow-y-auto min-h-screen">
      <BrowserRouter>
        <div className="background">
          <img src="bg.gif" alt="Background" className="pt-10" />
        </div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
