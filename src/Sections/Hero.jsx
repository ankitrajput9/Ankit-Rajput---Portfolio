import React from "react";
import {
  GrLinkedinOption,
} from "react-icons/gr";
import {
  FaGitAlt,
  FaInstagram,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#E8BF6A] p-8 md:px-16">
      <div className="max-w-350 mx-auto min-h-screen flex items-center">

        {/* LEFT */}
        <div className="flex-1">

          <p className="uppercase tracking-[4px] text-2xl mb-6">
            Hey, I'm Ankit 👋
          </p>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] uppercase">
            I Build
            <br />
            Modern Web
            <br />
            <span className="text-[#C8861D]">
              Experiences.
            </span>
          </h1>

          <div className="flex gap-4 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              className="
                bg-black
                text-white
                px-8
                py-4
                rounded-2xl
                hover:scale-105
                transition
              "
            >
              Download Resume
            </a>

           
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3 mt-14">
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
                  px-4
                  py-2
                  text-sm
                  font-bold
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="flex gap-8 mt-12 text-3xl">
            <a href="https://www.linkedin.com/in/ankit-rajput-a42357255/">
              <GrLinkedinOption />
            </a>

            <a href="https://github.com/ankitrajput9">
              <FaGitAlt />
            </a>

            <a href="https://www.instagram.com/a_nkit_rajput_/">
              <FaInstagram />
            </a>

            <a href="mailto:rajputankit9630@gmail.com">
              <BiLogoGmail />
            </a>
          </div>
        </div>

        {/* RIGHT
        <div className="hidden lg:flex flex-1 justify-center">
          <div
            className="
              w-[500px]
              h-[600px]
              rounded-[40px]
              bg-[#F2CC7A]
              border-2
              border-black/10
              relative
            "
          >
            <div
              className="
                absolute
                bottom-10
                left-10
                right-10
                bg-[#EFD79E]
                rounded-3xl
                p-6
              "
            >
              <p className="text-sm uppercase">
                Available for Work
              </p>

              <h3 className="text-3xl font-black mt-2">
                MERN Developer
              </h3>

              <p className="mt-3">
                Building modern web applications
                and digital products.
              </p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Hero;