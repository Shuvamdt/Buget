import React from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <div className="background">
        <img src="bg.gif" alt="Background" className="pt-10" />
      </div>
      <Navbar />
    </div>
  );
};

export default App;
