import React from "react";
import aboutPicture from "../assets/aboutPicture.jpg";
import Slider from "../components/slider";
import {
  Github,
  Linkedin,
  EnvelopeFill,
  Instagram,
  Youtube
} from "react-bootstrap-icons";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-sky-200 to-sky-300 min-h-screen flex items-center justify-center pt-6 pb-16 px-8"
    >
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center max-w-6xl w-full overflow-hidden p-0">
        <div className="md:w-2/3 p-8 text-gray-800">
          <h1 className="text-4xl font-extrabold mb-4">
            A Bit{" "}
            <span className="underline decoration-4 decoration-sky-500">
              About Me.
            </span>
          </h1>
          <p className="mb-4 text-base md:text-lg">
            <span className="font-bold">Hey!</span> I'm{" "}
            <span className="text-blue-800 underline decoration-4 decoration-sky-500 font-bold">
              Shubham Panchal
            </span>
            . I am a junior at Wayzata High School in Plymouth, Minnesota. Ever
            since I was a kid I've loved to tinker and innovate. Engineering has
            been a big part of my life. From building with Lego's to designing
            and manufacturing{" "}
            <span className="font-bold text-blue-800">$10,000</span> robots, my
            story with engineering has gone so far! My love for coding has also
            increased, and through this website I hope to share a little bit
            about me, to you!
          </p>
          <p className="mb-4 text-base md:text-lg">
            Here's who I am in a nutshell. For the past{" "}
            <span className="font-bold text-blue-800">8 years</span>, I’ve been
            deeply involved in FIRST Robotics 🤖, where I’ve had the chance to
            work on fast-paced, collaborative teams and compete in exciting,
            high-stakes events.
          </p>
          <p className="mb-4 text-base md:text-lg">
            Alongside robotics, I’ve developed a strong interest in web
            development 🖥️. I've built a number of websites and applications,
            like the one you're viewing now! I'm especially excited about the
            possibility of combining engineering and computer science to make
            lives better.
          </p>
          <p className="mb-4 text-base md:text-lg">
            When I’m not coding or working on my latest project, you’ll probably
            find me playing basketball 🏀, spending time with my family, or
            brainstorming ideas for my next app. If you’d like to connect,
            collaborate, or just say hi, feel free to reach out via{" "}
            <span className="text-blue-800 underline decoration-4 decoration-sky-500 font-bold">
              <a href="mailto:shubhamp.academics@gmail.com">email</a>
            </span>
            —I’d love to hear from you!
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/shubham-panchal1"
              target="_blank"
              className="bg-gray-200 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <Github size={24} className="text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-panchal-289a4a270/"
              target="_blank"
              className="bg-gray-200 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="bg-gray-200 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <EnvelopeFill size={24} className="text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/shubhampanchal70/"
              target="_blank"
              className="bg-gray-200 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <Instagram size={24} className="text-blue-600" />
            </a>
            <a
              href="https://www.youtube.com/@ShubhamPAcademics"
              target="_blank"
              className="bg-gray-200 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <Youtube size={24} className="text-blue-600" />
            </a>
          </div>
        </div>

        <div className="md:w-2/3 flex justify-end p-5">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default About;
