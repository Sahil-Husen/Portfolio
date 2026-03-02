import React from "react";
import { useTheme } from "../context/Theme";

function Project() {
  const { darkMode } = useTheme();
  const card = [
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
      featured: "featured1",
      title: "title1",
      duration: "02 Feb 2026 - 10 Feb 2026",
      description: "This is a project",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 2,
      img: "",
      featured: "fectured2",
      title: "Title2",
      duration: "03 Feb 2026 - 20 Feb 2026",
      description: "This is random description",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 3,
      img: "",
      featured: "featured3",
      title: "title3",
      duration: "05 Feb 2026 - 15 Feb 2026",
      description: "This is fake decription",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 4,
      img: "",
      featured: "featured3",
      title: "title4",
      duration: "08 Feb 2026 - 19 Feb 2026",
      description: "This is fake decription",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
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
              <a href="#">
                <img
                  className="w-full h-40 object-cover"
                  src={elem.img}
                  alt="project"
                />
              </a>

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
                  <a
                    href="#"
                    className={`flex-1 text-center ${darkMode ? "border border-zinc-700 bg-black text-white " : "border border-black"} text-sm font-medium 
                   py-2 rounded-lg  ${darkMode ? "hover:bg-zinc-100 hover:text-black transition" : "hover:bg-zinc-200"} transition`}
                  >
                    🌐 Website
                  </a>

                  <a
                    href="#"
                    className={`flex-1 text-center border ${darkMode ? "" : "text-black"} border-zinc-700   text-sm font-medium 
                   py-2 rounded-lg  ${darkMode ? "hover:bg-zinc-100 hover:text-black" : "hover:bg-zinc-200"} transition`}
                  >
                    Source Code
                  </a>
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
