import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone - Music Player",
      category: "React + Redux",
      tag: "FULLSTACK",
      image: "/spotify.png",
      description:
        "A modern Spotify-inspired music streaming application built with React and Redux. Features playlist management, music controls, music recommendations, responsive design, and a seamless listening experience.",
    },
    {
      title: "Portfolio Website",
      category: "React + Tailwind",
      tag: "FRONTEND",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      description:
        "A modern developer portfolio designed to showcase projects, skills, and achievements. Built with React, Tailwind CSS, smooth animations, and a clean user experience focused on visual storytelling.",
    },
    {
      title: "E-Commerce API",
      category: "Node + MongoDB",
      tag: "BACKEND",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      description:
        "A scalable REST API built using Node.js, Express, and MongoDB. Includes authentication, product management, order processing, secure routes, and optimized database performance.",
    },
    {
      title: "CodeEditor - AI Integrated",
      category: "MERN + AI",
      tag: "FULLSTACK",
      image: "/codeeditor.png",
      description:
        "An AI-powered code editor featuring intelligent code suggestions, real-time collaboration, syntax highlighting, AI chat assistance, and productivity-focused developer tools.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#E8BF6A] px-8 py-20 overflow-hidden">
      {/* Heading */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-24 font-FZHLJW">
        | projects
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              w-65
              cursor-pointer
              transition-all
              duration-500
              hover:-translate-y-8
              ${
                index % 2 === 0
                  ? "-translate-y-8"
                  : "translate-y-8"
              }
            `}
          >
            {/* Image Card */}
            <div className="h-95 overflow-hidden rounded-[28px] bg-white shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl  font-black uppercase leading-tight text-black font-FZHLJW">
                  {project.title}
                </h3>

                <p className="text-lg font-bold uppercase text-[#C8861D]">
                  {project.category}
                </p>
              </div>

              <span
                className="
                  border-2
                  border-[#C8861D]
                  text-[#C8861D]
                  rounded-lg
                  px-3
                  py-1
                  text-xs
                  font-bold
                  tracking-[2px]
                  whitespace-nowrap
                "
              >
                {project.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15 ">
        {projects.map((project, index) => (
          <div key={index}>
            {/* Top Line */}
            <div className="w-full h-[2px] bg-[#C8861D] mb-6" />

            <p className="text-[20px] leading-[1.5] text-black/80 font-Faktum-Medium ">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;