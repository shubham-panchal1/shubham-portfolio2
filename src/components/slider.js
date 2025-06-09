"use client";
import { useState, useEffect } from "react";
import React from "react";
import picture1 from "../assets/aboutPicture.jpg";
import picture2 from "../assets/IMG_3429.jpg";
import picture3 from "../assets/IMG_3440.jpg";
import picture4 from "../assets/IMG_5488.jpg";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons"; // Make sure this is installed and valid

const Slider = () => {
  const images = [picture1, picture2, picture3, picture4];

  const [currentSlide, setCurrentSlide] = useState(0);
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() =>{
    const autoplay=setInterval(() => {
        nextSlide()
    },4000)

    return () => clearInterval(autoplay)
  },[currentSlide]) 

  return (
    <div className="overflow-hidden relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] shadow-lg shadow-blue-500 rounded-xl">
      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${currentSlide*100}%)`}}>
        {images.map((s, i) => (
          <img key={i} src={s} className="w-full object-cover rounded-2xl" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button onClick={previousSlide}>
          <ArrowLeftCircleFill className="fill-gray-100 w-8 h-8 hover:fill-white hover:scale-105 transition-all duration-150" />
        </button>
        <button onClick={nextSlide}>
          <ArrowRightCircleFill className="fill-gray-100 w-8 h-8 hover:fill-white hover:scale-105 transition-all duration-150" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
