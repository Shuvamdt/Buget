import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-4 py-4 mx-2">
        <h1 className="font-1 text-4xl mx-5 sm:my-5 sm:py-5 sm:text-7xl lg:text-7xl md:text-end">
          Manage Your Money,
          <br />{" "}
          <span className="text-[#D00000] font-italic">Effortlessly</span>
        </h1>
        <p className="font-1 text-sm md:text-lg md:text-end px-5 py-5 sm:py-2">
          This is a financial management system that helps you <br /> easily
          manage your earnings and savings.
        </p>
      </div>
    </div>
  );
};

export default Hero;
