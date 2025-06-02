import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex h-auto w-full px-5 py-2 my-1 items-center justify-between">
        <div className="flex px-2">
          <div className="px-3">
            <img src="Logo.png" className="h-10 w-10" />
          </div>
          <h1 className="font-1 text-3xl">Bugit</h1>
        </div>
        <div className="flex justify-evenly items-center px-2 text-lg font-1">
          <a href="#dashboard" className="px-5">
            Dashboard
          </a>
          <a href="#Targets" className="px-5">
            Targets
          </a>
          <a href="#CurrentProgress" className="px-5">
            Current Progress
          </a>
          <a href="#Expenses" className="px-5">
            Expenses
          </a>
        </div>
        <div className="flex justify-evenly items-center px-2">
          <img src="user.png" alt="User logo" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
