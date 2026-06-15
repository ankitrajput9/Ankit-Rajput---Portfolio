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
    <section className="min-h-screen bg-[#E8BF6A] px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 overflow-hidden">
      {/* Heading */}
      <h1
        className="
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        xl:text-9xl
        font-black
        text-black
        mb-12
        sm:mb-20
        font-FZHLJW
      "
      >
        | projects
      </h1>

      {/* Projects */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              w-full
              sm:w-[80vw]
              md:w-[42vw]
              lg:w-[18vw]
              cursor-pointer
              transition-all
              duration-500
              hover:-translate-y-4
              ${
                index % 2 === 0
                  ? "lg:-translate-y-8"
                  : "lg:translate-y-8"
              }
            `}
          >
            {/* Image Card */}
            <div
              className="
              h-[50vh]
              sm:h-[60vh]
              md:h-[55vh]
              lg:h-[70vh]
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-lg
            "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Tag */}
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3
                  className="
                  text-xl
                  sm:text-2xl
                  font-black
                  uppercase
                  leading-tight
                  text-black
                  font-FZHLJW
                "
                >
                  {project.title}
                </h3>

                <p className="text-sm sm:text-lg font-bold uppercase text-[#C8861D]">
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
                  text-[10px]
                  sm:text-xs
                  font-bold
                  tracking-[2px]
                  whitespace-nowrap
                "
              >
                {project.tag}
              </span>
            </div>

            {/* Description */}
            <div className="mt-6">
              <div className="w-full h-[2px] bg-[#C8861D] mb-4" />

              <p
                className="
                text-sm
                sm:text-base
                lg:text-lg
                leading-[1.6]
                text-black/80
                font-Faktum-Medium
              "
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;