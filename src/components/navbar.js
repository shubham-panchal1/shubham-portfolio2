import React, {useState} from "react";
import logo from "../assets/logo1.png";
import {List,X} from "react-bootstrap-icons";
import FillButton from "./fillButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-6 shadow-xl z-50 w-4/5 xl:w-3/5 rounded-2xl xl:rounded-full bg-sky-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-blue-400 font-mono font-medium text-base xl:text-lg left-1/2 transform -translate-x-1/2">
      <div className="hidden max-w-7xl mx-auto py-3 lg:flex items-center relative px-6">
        <img src={logo} className="w-8 h-auto" alt="Logo"></img>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="space-x-8">
            <a
              href="#home"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        <FillButton text="Lets Connect!" link="https://www.linkedin.com/in/shubham-panchal-289a4a270/"/>
      </div>

      <div className="flex lg:hidden justify-between items-center">
        <img src={logo} className="w-8 h-auto ml-3 my-2" alt="Logo"></img>
        <button className="w-8 h-auto mr-3" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X color="#3b82f6" /> : <List color="#3b82f6" />}</button>
      </div>
      {menuOpen && (
        <div className="bg-transparent items-center justify-center lg:hidden">
          <ul className="my-4 flex flex-col space-y-2 items-center">
            <li><a href="#home" className="hover:text-blue-800 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-800 transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-800 transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-800 transition-colors duration-300">Contact</a></li>
            <li><FillButton text="Lets Connect!" link="https://www.linkedin.com/in/shubham-panchal-289a4a270/"/></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;