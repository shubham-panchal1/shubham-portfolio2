import React from "react";
import {
  Github,Linkedin,EnvelopeFill,Instagram,Youtube
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-gray-400 font-semibold mb-4">NAVIGATION</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline decoration-white decoration-2 transition-all duration-300">Home</a></li>
            <li><a href="#about" className="hover:underline decoration-white decoration-2 transition-all duration-300">About</a></li>
            <li><a href="#projects" className="hover:underline decoration-white decoration-2 transition-all duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:underline decoration-white decoration-2 transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-gray-400 font-semibold mb-4">CONTACT</h2>
          <ul className="space-y-2">
            <li>Shubham Panchal</li>
            <li>Email: shubhamp.academics@gmail.com</li>
          </ul>
        </div>

        <div>
          <h2 className="text-gray-400 font-semibold mb-4">SOCIAL</h2>
          <div className="flex space-x-6 text-white text-xl">
            <a
                          href="https://github.com/shubham-panchal1"
                          target="_blank"
                          className=" hover:scale-105 transition-transform"
                        >
                          <Github size={24} className="text-white" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/shubham-panchal-289a4a270/"
                          target="_blank"
                          className=" hover:scale-105 transition-transform"
                        >
                          <Linkedin size={24} className="text-white" />
                        </a>
                        <a
                          href="mailto:youremail@example.com"
                          className=" hover:scale-105 transition-transform"
                        >
                          <EnvelopeFill size={24} className="text-white" />
                        </a>
                        <a
                          href="https://www.instagram.com/shubhampanchal70/"
                          target="_blank"
                          className=" hover:scale-105 transition-transform"
                        >
                          <Instagram size={24} className="text-white" />
                        </a>
                        <a
                          href="https://www.youtube.com/@ShubhamPAcademics"
                          target="_blank"
                          className=" hover:scale-105 transition-transform"
                        >
                          <Youtube size={24} className="text-white" />
                        </a>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-3 md:mt-1">&copy; 2025 Shubham Panchal.</h1>
    </footer>
  );
};

export default Footer;