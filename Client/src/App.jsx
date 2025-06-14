import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Expenses from "./Pages/Expenses";
import Targets from "./Pages/Targets";
import About from "./Pages/About";
import MyAccount from "./Pages/MyAccount";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/targets" element={<Targets />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
