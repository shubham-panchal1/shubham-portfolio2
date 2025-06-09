import React from "react";
import mePicture from "../assets/websitePicture.png";
import resume from "../assets/resume.pdf"
import FillButton from "../components/fillButton";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="home">
  <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0284c7_100%)]"></div>

  <div className="flex flex-col xl:flex-row h-full items-center justify-center px-6 md:px-24 gap-8 md:gap-0 mt-20 lg:mt-0">
    <div className="w-full lg:w-2/5 flex items-center justify-center flex-col">
      <h1 className="text-4xl md:text-6xl font-semibold text-blue-800 leading-tight text-center">
        Hi there! I'm<br />
        <span className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.cyan.400),theme(colors.cyan.300),theme(colors.sky.500),theme(colors.blue.300),theme(colors.sky.500),theme(colors.blue.300),theme(colors.cyan.400))] bg-[length:200%_auto] animate-gradient">Shubham Panchal</span>
      </h1>
      <div className="flex gap-6 mt-6 justify-center">
        <button className='bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 p-2 lg:p-3 rounded-full shadow-md shadow-sky-400 font-semibold font-mono hover:scale-105 transition-all duration-150'><a href="#about" className="text-sky-700">About Me!</a></button>

        <button className='bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-200 p-2 lg:p-3 rounded-full shadow-md shadow-sky-400 font-semibold font-mono hover:scale-105 transition-all duration-150'><a href={resume} className="text-sky-700" target="_blank">Look at My Resume!</a></button>
      </div>
    </div>
    <div className="w-full xl:w-3/5 flex items-center justify-center relative my-10">
      <img
        src={mePicture}
        alt="Picture"
        className="w-4/5 lg:w-3/5 h-auto bg-sky-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-400 rounded-3xl shadow-2xl shadow-blue-300 -rotate-3 hover:scale-110 hover:rotate-6 transition-all duration-300 mb-14 lg:mb-0"
      />
    </div>
  </div>
</div>


  );
};

export default Hero;
