import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div>
      <div className="flex h-auto w-full px-5 py-2 my-1 items-center justify-between">
        <div className="flex px-1">
          <div className="px-1">
            <img src="Logo.png" className="h-10 w-10" />
          </div>
          <h1 className="font-1 text-3xl">Bugit</h1>
        </div>
        <div className="hidden md:flex justify-evenly items-center px-2 text-lg font-1">
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
        <div className="hidden md:flex justify-evenly items-center px-2">
          <img src="user.png" alt="User logo" className="h-8 w-8" />
        </div>
        <div className="md:hidden px-2 absolute right-2 z-10">
          <img
            src={menuOpen ? "close.png" : "menu.png"}
            alt="menu icon"
            className={menuOpen ? "h-5 w-5" : "h-8 w-8"}
            onClick={toggleMenu}
          />
        </div>
        {menuOpen && (
          <div>
            <div className="absolute w-50 top-0 h-full right-0 z-5 bg-[#E85D04]"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
