import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      category: "MERN + SOCKET.IO",
      tag: "REALTIME",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      title: "Portfolio Website",
      category: "REACT + TAILWIND",
      tag: "FRONTEND",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      title: "E-Commerce API",
      category: "NODE + MONGODB",
      tag: "BACKEND",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    },
    {
      title: "Task Manager",
      category: "REDUX TOOLKIT",
      tag: "FULLSTACK",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    },
  ];

  return (
    <section className="min-h-screen bg-[#E8BF6A] px-8 py-20 overflow-hidden">
      {/* Heading */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-24">
        | projects
      </h1>

      {/* Projects Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              w-65
              cursor-pointer
              transition-all
              duration-500
              hover:scale-100
              hover:-translate-y-15
              ${
                index % 2 === 0
                  ? "-translate-y-15"
                  : "translate-y-15"
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

            {/* Content */}
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black uppercase leading-tight text-black">
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
    </section>
  );
};

export default Projects;