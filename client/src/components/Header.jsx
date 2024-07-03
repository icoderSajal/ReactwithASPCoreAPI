import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

import { TiThMenu } from "react-icons/ti";

const Header = () => {
  let Links = [{ name: "", link: "/" }];
  let [open, setOpen] = useState(false);
  const loggedIn = useState(true);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-indigo-700 text-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
            <NavLink to="/" className="text-white font-serif">
              CURD
            </NavLink>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <IoMdCloseCircle /> : <TiThMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-700  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {loggedIn ? (
              <>
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                    <Link
                      to={`${link.link}`.toLowerCase()}
                      className=" hover:bg-blue-900 hover:ring-2 duration-500 text-white font-bold  px-4 py-1 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                <Button>Get Started</Button>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
