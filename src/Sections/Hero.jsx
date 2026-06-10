import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { FaGitAlt, FaInstagram } from "react-icons/fa";
// Supports weights 400-700
import '@fontsource-variable/caveat/wght.css';


const Hero = () => {
  return (
    <>
    <div className='w-full  h-screen flex '>
        <div className='h-full flex px-15 flex-col gap-20 justify-center  bg-[#0a192f]  font-bold w-1/2 '>
            <h1 className='text-9xl font-space-mono leading-30 font-bold text-white'>Ankit Rajput</h1>
            <div className='flex  text-2xl p-4  text-gray-400 font-bold gap-20'>
                <p className='text-4xl hover:text-blue-600 cursor-pointer ' ><GrLinkedinOption /></p>
                <p className='text-4xl hover:text-green-800 cursor-pointer ' ><FaGitAlt /></p>
                <p className='text-4xl hover:text-pink-500  cursor-pointer' ><FaInstagram/></p>
                
            </div>
        </div>
        <div className=' w-1/2 flex items-center justify-center '>
<img className='h-full w-full object-cover' src="/char.png" alt="" />

        </div>
    </div>


    </>
  );
}

export default Hero;
