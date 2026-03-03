import React from "react";
import { useTheme } from "../context/Theme";
import geminiImg from "../assets/gemini.png";
import slms from "../assets/slms.png";
import bigboy from "../assets/bigBoy.png";
import editor from "../assets/editor.png";

function Project() {
  const { darkMode } = useTheme();

  const card = [
    {
      id: 1,
      img: geminiImg,
      featured: "Featured",
      title: "NeuroChat AI",
      duration: "02 Feb 2026 - 10 Feb 2026",
      description:
        "NeuroChat AI is a modern AI-powered chat application inspired by Gemini, delivering real-time, context-aware responses through seamless API integration and a clean, responsive user interface.",
      techStack: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB"],
      website: "https://google-gemini-clone-fbsa.vercel.app/",
      source: "https://github.com/Sahil-Husen/Google-Gemini-Clone",
    },
    {
      id: 2,
      img: slms,
      featured: "Featured",
      title: "Student Life Cycle Management System",
      duration: "05 Feb 2026 - 08 Feb 2026",
      description:
        "A centralized web application designed to manage the complete student journey — from admission to graduation with a secure role-based dashboard.",
      techStack: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB"],
      website:
        "https://github.com/Sahil-Husen/Student-Life-Cycle-Managment-System",
      source:
        "https://github.com/Sahil-Husen/Student-Life-Cycle-Managment-System",
    },
    {
      id: 3,
      img: editor,
      featured: "Featured",
      title: "Text Editor",
      duration: "01 Feb 2026 - 03 Feb 2026",
      description:
        "A dynamic web-based text editor built with ReactJS featuring real-time formatting and responsive UI.",
      techStack: ["ReactJS"],
      website: "https://text-craft-by-sahil.vercel.app/",
      source: "https://github.com/Sahil-Husen/React-JS-by-Harry",
    },
    {
      id: 4,
      img: bigboy,
      featured: "Featured",
      title: "BigBoy Toyz",
      duration: "25 July 2024 - 26 July 2024",
      description:
        "A redesign of the Big-Boy-Toyz website built for the Sheriyaans Reimagine Hackathon using modern UI practices and animations.",
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      website: "https://big-boytoyz.netlify.app/",
      source: "https://github.com/Sahil-Husen/Team-4XReimagineRound2",
    },
  ];

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="flex justify-center items-center flex-col gap-4">
        <h1
          className={`px-4 py-[.2rem] ${
            darkMode ? "bg-white text-black" : "bg-amber-400"
          } animate-bounce rounded hover:bg-amber-300`}
        >
          My Projects
        </h1>

        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Check out my latest work
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {card.map((elem) => (
          <div
            key={elem.id}
            className={`${
              darkMode ? "bg-[#061E29]" : "bg-white text-black"
            } border border-zinc-800 rounded-2xl shadow-lg overflow-hidden 
            hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
          >
            {/* Image */}
            <a href={elem.website} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-44 object-cover"
                src={elem.img}
                alt={elem.title}
              />
            </a>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Badge */}
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md border border-amber-500/20 w-fit">
                🔥 {elem.featured}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-lg font-semibold">{elem.title}</h3>

              {/* Duration */}
              <p className="text-xs mt-1 opacity-70">{elem.duration}</p>

              {/* Description */}
              <p className="text-sm mt-2 leading-relaxed flex-1">
                {elem.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {elem.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`${
                      darkMode
                        ? "bg-zinc-800 text-zinc-300"
                        : "bg-zinc-200 text-black"
                    } text-xs px-2 py-1 rounded-md`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={elem.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center ${
                    darkMode
                      ? "border border-zinc-700 bg-black text-white hover:bg-white hover:text-black"
                      : "border border-black hover:bg-zinc-200"
                  } text-sm font-medium py-2 rounded-lg transition`}
                >
                  🌐 Website
                </a>

                {elem.source && (
                  <a
                    href={elem.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center border ${
                      darkMode
                        ? "border-zinc-700 text-white hover:bg-white hover:text-black"
                        : "border-zinc-700 text-black hover:bg-zinc-200"
                    } text-sm font-medium py-2 rounded-lg transition`}
                  >
                    💻 Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
