import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGitAlt, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {
  return (
<section className="min-h-screen bg-[#E8BF6A] px-4 sm:px-8 md:px-10 lg:px-16 ">     
   <div className="max-w-[85vw] xl:max-w-[90vw] mx-auto min-h-screen flex items-center">
        
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          
          {/* Intro */}
          <p className="uppercase tracking-[0.25em] text-sm sm:text-lg md:text-xl mb-[2vh]">
            Hey, I'm Ankit 👋
          </p>

          {/* Heading */}
          <h1
              className="
  text-[2.5rem]
  sm:text-5xl
  md:text-7xl
  lg:text-8xl
  xl:text-[8rem]
  2xl:text-[10rem]
  font-black
  leading-[0.9]
  uppercase
  "
          >
            I Build
            <br />
            Modern Web
            <br />
            <span className="text-[#C8861D]">
              Experiences.
            </span>
          </h1>

          {/* Resume Button */}
          <div className="mt-[4vh]">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-black
                text-white
                px-[5vw]
                sm:px-[4vw]
                lg:px-[2vw]
                py-[1.5vh]
                text-sm
                sm:text-base
                md:text-lg
                rounded-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Download Resume
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-[5vh]">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Redux",
              "Redis",
              "Socket.IO",
            ].map((item) => (
              <span
                key={item}
                className="
                  border
                  border-black
                  rounded-full
                  px-[3vw]
                  sm:px-[1.2vw]
                  py-[0.8vh]
                  text-xs
                  sm:text-sm
                  font-bold
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div
            className="
            flex
            justify-center
            lg:justify-start
            gap-[6vw]
            sm:gap-[4vw]
            lg:gap-[2vw]
            mt-[5vh]
            text-2xl
            sm:text-3xl
            md:text-4xl
            "
          >
            <a
              href="https://www.linkedin.com/in/ankit-rajput-a42357255/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-300 hover:text-blue-800"
            >
              <GrLinkedinOption />
            </a>

            <a
              href="https://github.com/ankitrajput9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-300 hover:text-green-800"
            >
              <FaGitAlt />
            </a>

            <a
              href="https://www.instagram.com/a_nkit_rajput_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-300 hover:text-pink-800"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:rajputankit9630@gmail.com"
              className="hover:scale-125 transition-all duration-300 hover:text-red-800"
            >
              <BiLogoGmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;