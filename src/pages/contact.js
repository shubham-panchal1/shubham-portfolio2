import React from "react";
import {
  Github,
  Linkedin,
  EnvelopeFill,
  Instagram,
  Youtube,
} from "react-bootstrap-icons";
const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-sky-300 to-sky-400 px-8 py-12" id="contact">
      <h1 className="text-center text-6xl font-mono font-bold mb-7 text-white">
        Want to Chat?
      </h1>
      <div className="flex space-x-6 items-center justify-center">
        <a
          href="https://github.com/shubham-panchal1"
          target="_blank"
          className="bg-gray-200 p-3 rounded-xl shadow-md hover:bg-gray-100 hover:animate-wobble transition-all duration-300"
        >
          <Github size={32} className="text-blue-800" />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-panchal-289a4a270/"
          target="_blank"
          className="bg-gray-200 p-3 rounded-xl shadow-md hover:bg-gray-100 hover:animate-wobble transition-all duration-300"
        >
          <Linkedin size={32} className="text-blue-800" />
        </a>
        <a
          href="https://www.instagram.com/shubhampanchal70/"
          target="_blank"
          className="bg-gray-200 p-3 rounded-xl shadow-md hover:bg-gray-100 hover:animate-wobble transition-all duration-300"
        >
          <Instagram size={32} className="text-blue-800" />
        </a>
        <a
          href="https://www.youtube.com/@ShubhamPAcademics"
          target="_blank"
          className="bg-gray-200 p-3 rounded-xl shadow-md hover:bg-gray-100 hover:animate-wobble transition-all duration-300"
        >
          <Youtube size={32} className="text-blue-800" />
        </a>
      </div>

      <div className="max-w-2xl mx-auto bg-white bg-opacity-30  rounded-3xl px-6 py-10 shadow-xl mt-6 font-mono items-center justify-center">
        <h1 className="text-center text-xl font-bold text-sky-700">Want to tell me something? Let's get in touch!</h1> <br />
        <p className="text-base text-sky-700 font-semibold">Have an idea, a question, or just want to say hello? Send me a quick message and I would love to talk to you!</p>
        <a href="mailto:shubhamp.academics@gmail.com?subject=Let%27s%20Connect!&body=Hi%20Shubham,%20I%20wanted%20to%20reach%20out%20to%20you%20because" className="mt-6 flex justify-center hover:animate-wobble p-2 bg-gray-200 rounded-2xl font-mono font-semibold text-sky-800 shadow-lg">
            Send a Message!
        </a>
      </div>
    
    </section>
  );
};

export default Contact;
