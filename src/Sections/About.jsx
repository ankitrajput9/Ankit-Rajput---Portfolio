import React from "react";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  return (
    <section className="w-full bg-[#E8BF6A] py-[8vh]">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ">

        <h1
        className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none font-FZHLJW"
        >
         | About
        </h1>

        <div className="max-w-5xl">
          <ScrollReveal
            baseOpacity={0.4}
            enableBlur
            baseRotation={2}
            blurStrength={4}
          >
            Building modern web applications with the MERN stack while continuously exploring technologies like Socket.IO, Redis, and Redux. Passionate about API development, real-time systems, and creating clean, scalable solutions that deliver seamless user experiences.

Focused on writing maintainable code, optimizing performance, and building applications that solve real-world problems. Always eager to learn new technologies, take on challenging projects, and transform ideas into impactful digital products through thoughtful design and efficient development.

          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;