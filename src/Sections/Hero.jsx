import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { FaGitAlt, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import SplitText from '../components/SplitText';



const Hero = () => {
  return (
    <div className='w-full h-screen flex bg-[#E8BF6A] items-center justify-center'>
      <div className='h-full flex px-15 flex-col items-center gap-12 justify-center font-bold'>

        <SplitText
  text="Ankit Rajput"
  className='text-9xl font-bold  leading-30'
  delay={160}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  showCallback
/>

        {/* Resume Button */}
        <a
          href="/resume.pdf" // Put your resume in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className='px-8 py-3 text-lg border-2 border-white  rounded-full
                     hover:bg-white hover:text-black transition-all duration-300'
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <div className='flex text-2xl p-4  gap-20'>
          <a
            href="https://www.linkedin.com/in/ankit-rajput-a42357255/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-4xl hover:text-blue-600 transition-colors'
          >
            <GrLinkedinOption />
          </a>

          <a
            href="https://github.com/ankitrajput9"
            target="_blank"
            rel="noopener noreferrer"
            className='text-4xl hover:text-green-600 transition-colors'
          >
            <FaGitAlt />
          </a>

          <a
            href="https://www.instagram.com/a_nkit_rajput_/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-4xl hover:text-pink-500 transition-colors'
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:rajputankit9630@gmail.com"
            className='text-4xl hover:text-red-500 transition-colors'
          >
            <BiLogoGmail  />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;