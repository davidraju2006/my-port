import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.js";
import { navlinks } from "../components/constants";
import logo from "/src/assets/logo.svg";
import menu from "/src/assets/menu.svg";
import close from "/src/assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo (Left Side) */}
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            David Raju K S &nbsp;
            <span className="sm:block hidden">| COO GOLDENZ VISION &nbsp;</span>
          </p>
        </Link>

        {/* Desktop Navigation (Aligned Right) */}
        <ul className="list-none hidden sm:flex flex-row gap-10 ml-auto justify-end">
          {navlinks.map((link, index) => (
            <li key={link.id || index}  
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} 
                onClick={() => setActive(link.title)}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="sm:hidden flex justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu icon" 
            className="w-6 h-6 cursor-pointer" 
            onClick={() => setToggle(!toggle)} 
          />
          
          {/* Mobile Dropdown (Right Aligned) */}
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black absolute top-16 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
            <ul className="flex flex-col gap-4 text-white">
              {navlinks.map((link, index) => (
                <li key={link.id || index} 
                    className="hover:text-gray-400" 
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
