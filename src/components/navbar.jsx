import React from "react";
import { useState } from "react";
// import IconImage from "../images/icon.jpeg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-50">
      {/* <h1 className="text-2xl font-bold text-blue-600">CHALO MAKKAH SHARIF</h1> */}
      <img className="w-[20%] md:w-[5%] " src="/icon.jpeg" alt="icon" />

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-600 text-3xl focus:outline-none transition-transform duration-300"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile and Desktop Menu */}
      <ul
        className={`
    flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium 
    md:flex md:w-auto md:bg-transparent md:shadow-none 
    absolute md:relative left-0 top-16 w-full md:top-0 
    bg-white  px-6 md:px-0 py-4 md:py-0 
    shadow-md  transition-all duration-300 ease-in-out
    ${menuOpen ? "opacity-100 max-h-[28rem]" : "opacity-0 max-h-0 overflow-hidden"} 
    md:opacity-100 md:max-h-full md:overflow-visible
  `}
      >
        <li className=" py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer" href="#hero">
            Home
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a
            className="hover:text-blue-600 cursor-pointer "
            href="#destinations"
          >
            {" "}
            Destinations
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#visas">
            {" "}
            Visa
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#hajjumrah">
            {" "}
            Hajj & Umrah
          </a>
        </li>
        <li className=" py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer" href="#packages">
            {" "}
            Domestic Packages
          </a>
        </li>

        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#hotels">
            {" "}
            Hotels
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#carrent">
            {" "}
            Ziyrat & Car Rental
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#airticket">
            {" "}
            Air Tickets
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#gallery">
            {" "}
            Gallery
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#about">
            {" "}
            About
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#license">
            {" "}
            License
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a className="hover:text-blue-600 cursor-pointer " href="#contact">
            {" "}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
