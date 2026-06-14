import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGitAlt, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#E8BF6A] px-8 md:px-16 py-20 border-t border-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase">
              Let's Build
              <br />
              Something Great.
            </h2>

            <p className="mt-6 max-w-md text-lg text-black/70">
              Interested in working together or discussing a project?
              Feel free to reach out.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">

            <a
              href="mailto:rajputankit9630@gmail.com"
              className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-all"
            >
              <BiLogoGmail className="text-3xl" />
              <span>Email</span>
              <FiArrowUpRight />
            </a>

            <a
              href="https://github.com/ankitrajput9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-all"
            >
              <FaGitAlt className="text-3xl" />
              <span>GitHub</span>
              <FiArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-rajput-a42357255/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-all"
            >
              <GrLinkedinOption className="text-3xl" />
              <span>LinkedIn</span>
              <FiArrowUpRight />
            </a>

            <a
              href="https://www.instagram.com/a_nkit_rajput_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-all"
            >
              <FaInstagram className="text-3xl" />
              <span>Instagram</span>
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-black/20 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <h1 className="text-4xl md:text-6xl font-black uppercase">
            Ankit Rajput
          </h1>

          <p className="text-black/60 font-medium">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;