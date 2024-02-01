import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-[100%] flex flex-wrap items-center justify-between h-16 shadow-md px-20">
        <div className="text-blue-700 text-xl flex flex-row font-bold border-2 "></div>
        <div className="space-x-10" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-5 ">
            <Link to="/">
              <div className="nav-item" aria-current="page">
                Home
              </div>
            </Link>
            <Link to="/product-management">
              <div className="nav-item" aria-current="page">
                Product Management
              </div>
            </Link>
            <Link to="/cart">
              <div className="nav-item" aria-current="page">
                Cart
              </div>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
