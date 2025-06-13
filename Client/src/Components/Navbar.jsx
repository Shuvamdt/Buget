import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [myAccount, setMyAccount] = useState(false);
  const toggleAccount = () => setMyAccount(!myAccount);
  return (
    <div>
      <div className="flex-col">
        <div className="sticky flex h-auto w-full px-5 py-2 my-1 items-center justify-between">
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
            <img
              src="user.png"
              alt="User logo"
              className="h-8 w-8"
              onClick={toggleAccount}
            />
          </div>
          <div className="md:hidden px-5 absolute right-2 z-10">
            <img
              src="menu.png"
              alt="menu icon"
              className="h-8 w-8"
              onClick={toggleMenu}
            />
          </div>
        </div>
        {myAccount && (
          <div>
            <div className="fixed flex flex-col justify-center items-center font-1 w-40 top-20 h- py-2 right-5 z-5 rounded-lg bg-[#FAA307]">
              <ul className="flex flex-col items-center justify-center">
                <li className="py-2">My Account</li>
                <li className="py-2">Sign out</li>
              </ul>
            </div>
          </div>
        )}
        {menuOpen && (
          <div>
            <div className="absolute font-1 flex flex-col items-center w-50 top-0 h-full right-0 z-5 bg-[#E85D04]">
              <div className="md:hidden flex flex-col justify-end absolute top-5 right-9 z-10">
                <img
                  src="close.png"
                  alt="close icon"
                  className="h-5 w-5"
                  onClick={toggleMenu}
                />
              </div>
              <div className="absolute top-10 px-5 py-4">
                <ul className="flex flex-col items-end justify-center">
                  <li className="py-2">Dashboard</li>
                  <li className="py-2">Targets</li>
                  <li className="py-2">Current Progress</li>
                  <li className="py-2">Expenses</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
