import React from "react";
import { useTheme } from "../context/Theme";

function About() {
  const { darkMode } = useTheme();
  return (
    <div className="text-justify">
      <div className="mt-8">
        <h1 className="text-2xl font-bold">About</h1>
      </div>
      <div>
        <p
          className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-[#423f3f]"}`}
        >
          I'm a full stack developer with a strong foundation in{" "}
          <span
            className={`font-medium ${darkMode ? "text-white" : "text-black"}`}
          >
            Java, operating systems, and System Design.
          </span>{" "}
          From building intuitive UIs with React to engineering performant
          backends and writing custom{" "}
          <span
            className={`font-medium ${darkMode ? "text-white" : "text-black"}`}
          >
            file sync & proxy servers
          </span>{" "}
          in Express.js, I love creating end-to-end systems that are both
          user-friendly and deeply optimized. I believe in understanding things{" "}
          <span className="text-amber-400 font-medium">from the metal up</span>{" "}
          — whether it's browser-side rendering or socket-level data transfer.
        </p>
      </div>
    </div>
  );
}

export default About;
