import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className='w-5/6 px-10'>

<ScrollReveal
  baseOpacity={0.2}
  enableBlur
  baseRotation={2}
  blurStrength={4}
>
 Building modern web applications with the MERN stack while exploring technologies like Socket.IO, Redis, and Redux. Passionate about API development, real-time applications, and creating clean, scalable solutions that deliver great user experiences.
</ScrollReveal>
    </div>
  );
}

export default About;
