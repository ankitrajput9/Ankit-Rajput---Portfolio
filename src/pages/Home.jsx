import React from 'react';
import Hero from '../Sections/Hero';
import About from '@/Sections/About';
import Skills from '@/Sections/Skills';

const Home = () => {
  return (
    <div className=' overflow-hidden bg-[#E8BF6A]'>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}

export default Home;
