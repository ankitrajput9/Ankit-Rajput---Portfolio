import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiRedux,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      company: "React Ecosystem",
      icon: <FaReact />,
      year: "React • Tailwind",
    },
    {
      title: "Backend Development",
      company: "Node & Express",
      icon: <FaNodeJs />,
      year: "REST APIs",
    },
    {
      title: "Database",
      company: "MongoDB",
      icon: <SiMongodb />,
      year: "NoSQL",
    },
    {
      title: "State Management",
      company: "Redux Toolkit",
      icon: <SiRedux />,
      year: "Frontend State",
    },
    {
      title: "Caching",
      company: "Redis",
      icon: <SiRedis />,
      year: "Performance",
    },
    {
      title: "Realtime Apps",
      company: "Socket.IO",
      icon: <SiSocketdotio />,
      year: "WebSockets",
    },
    {
      title: "Version Control",
      company: "Git & GitHub",
      icon: <FaGitAlt />,
      year: "Collaboration",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#E8BF6A] px-6 md:px-10 py-20">
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none font-FZHLJW">
          | skills
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#F5BE4F] rounded-[28px] p-8 h-[280px]
            flex flex-col justify-between
            transition-all duration-300
            hover:bg-white hover:-translate-y-2 cursor-pointer"
          >
            {/* Top */}
            <div>
              <h3 className="uppercase text-sm tracking-[2px] font-bold">
                {skill.title}
              </h3>

              <p className="uppercase text-sm tracking-[2px] font-bold">
                @ {skill.company}
              </p>
            </div>

            {/* Center */}
            <div className="flex justify-center items-center flex-1">
              <div className="text-[90px] text-black">
                {skill.icon}
              </div>
            </div>

            {/* Bottom */}
            <p className="text-sm font-semibold tracking-wide">
              {skill.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;