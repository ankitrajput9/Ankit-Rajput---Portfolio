import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      category: "MERN + SOCKET.IO",
      tag: "REALTIME",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      height: "h-[400px]",
    },
    {
      title: "Portfolio Website",
      category: "REACT + TAILWIND",
      tag: "FRONTEND",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      height: "h-[500px]",
    },
    {
      title: "E-Commerce API",
      category: "NODE + MONGODB",
      tag: "BACKEND",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      height: "h-[400px]",
    },
    {
      title: "Task Manager",
      category: "REDUX TOOLKIT",
      tag: "FULLSTACK",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
      height: "h-[500px]",
    },
  ];

  return (
    <section className="min-h-screen bg-[#E8BF6A] px-8 py-20">
      {/* Heading */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-16">
        | projects
      </h1>

      {/* Projects */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group w-72 cursor-pointer"
          >
            {/* Image Card */}
            <div
              className={`
                ${project.height}
                overflow-hidden
                rounded-[30px]
                bg-white
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-black uppercase leading-tight">
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