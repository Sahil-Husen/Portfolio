import React from "react";
import { useTheme } from "../context/Theme";
import {NavLink} from "react-router-dom"
import geminiImg from "../assets/gemini.png"
import slms from "../assets/slms.png"
import bigboy from "../assets/bigboy.png"
import editor from "../assets/editor.png"

function Project() {
  const { darkMode } = useTheme();
  const card = [
    {
      id: 1,
      img:geminiImg,
      featured: "featured",
      title: "NeuroChat AI",
      duration: "02 Feb 2026 - 10 Feb 2026",
      description: "NeuroChat AI is a modern AI-powered chat application inspired by Gemini, delivering real-time, context-aware responses through seamless API integration and a clean, responsive user interface.",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      website: "https://google-gemini-clone-fbsa.vercel.app/",
      source: "",
    },
    {
      id: 2,
      img: slms,
      featured: "fectured",
      title: "Student Life Cycle Management System",
      duration: "05 Feb 2026 - 08 Feb 2026",
      description: "A centralized web application designed to manage the complete student journey — from admission to graduation. The system streamlines academic records, attendance, performance tracking, and administrative processes through a secure, role-based dashboard.",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      website: "https://github.com/Sahil-Husen/Student-Life-Cycle-Managment-System",
      source: "https://github.com/Sahil-Husen/Student-Life-Cycle-Managment-System",
    },
    {
      id: 3,
      img: editor,
      featured: "featured",
      title: "Text Editor",
      duration: "01 Feb 2026 - 3 Feb 2026",
      description: "A dynamic web-based text editor built with ReactJS, featuring real-time text formatting, editing tools, and responsive UI. Designed to provide a smooth writing experience with efficient state management and clean component architecture ",
      techStack: ["nodejs", "reactjs"],
      website: "https://text-craft-by-sahil.vercel.app/",
      source: "https://github.com/Sahil-Husen/React-JS-by-Harry",
    },
    {
      id: 4,
      img: bigboy,
      featured: "featured",
      title: "BigBoy Toyz",
      duration: "25 July 2024 - 26 July 2024",
      description: "This project is a redesign of the Big-Boy-Toyz website, created for the Sheriyaans Reimagine Hackathon. The redesign incorporates modern web design practices, animations, and interactive elements to enhance the user experience.",
      techStack: ["HTML","CSS","JavaScript","GSAP"],
      website: "https://big-boytoyz.netlify.app/",
      source: "https://github.com/Sahil-Husen/Team-4XReimagineRound2",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1
          className={` px-4 py-[.2rem] ${darkMode ? "bg-white text-black" : "bg-amber-400 "}  animate-bounce  text-black rounded hover:bg-amber-300 `}
        >
          My Projects
        </h1>
        <h1 className="text-4xl font-bold">Check out my latest work</h1>
      </div>
      {/* Cards */}
      <div className="mt-10 grid grid-cols-1  sm:grid-cols-2 w-180 gap-2">
        {/* card1 */}
        {card.map((elem, index) => {
          return (
            <div
              id={index}
              className={` ${darkMode ? "" : "bg-white text-black"}  border border-zinc-800 rounded-2xl shadow-lg overflow-hidden 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Image */}
              <NavLink>
                <img
                  className="w-full h-40 object-cover"
                  src={elem.img}
                  alt="project"
                />
              </NavLink>

              {/* Content */}
              <div className="p-6">
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium 
                     bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md border border-amber-500/20"
                >
                  🔥 {elem.featured}
                </span>

                {/* Title */}
                <h3
                  className={`mt-2 text-xl font-semibold ${darkMode ? "" : "text-black"} `}
                >
                  {elem.title}
                </h3>

                {/* Duration */}
                <p
                  className={` ${darkMode ? "" : "text-[#373232]"} text-sm  mt-1`}
                >
                  {elem.duration}
                </p>

                {/* Description */}
                <p
                  className={`text-sm ${darkMode ? "text-white font-semibold" : "text-[#381714] font-semibold"}  mt-1 leading-relaxed`}
                >
                  {elem.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {elem.techStack.map((elem, i) => {
                    return (
                      <span
                        key={i}
                        className={`${darkMode ? "text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md" : "text-xs bg-zinc-600 text-zinc-50 px-2 py-1 rounded-md"}`}
                      >
                        {elem}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <NavLink
                     to={elem.website}
                    className={`flex-1 text-center ${darkMode ? "border border-zinc-700 bg-black text-white " : "border border-black"} text-sm font-medium 
                   py-2 rounded-lg  ${darkMode ? "hover:bg-zinc-100 hover:text-black transition" : "hover:bg-zinc-200"} transition`}
                  >
                    🌐 Website
                  </NavLink>

                  <NavLink
                   
                    className={`flex-1 text-center border ${darkMode ? "" : "text-black"} border-zinc-700   text-sm font-medium 
                   py-2 rounded-lg  ${darkMode ? "hover:bg-zinc-100 hover:text-black" : "hover:bg-zinc-200"} transition`}
                  >
                    Source Code
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}

        {/* card end */}
      </div>
    </div>
  );
}

export default Project;
