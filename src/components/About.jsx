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
        <p className={` ${darkMode ? "" : "text-[#423f3f]"}   text-sm `}>
          I'm a full stack developer with a strong foundation in Java, operating
          systems, and System Design. From building intuitive UIs with React to
          engineering performant backends and writing custom file sync or proxy
          servers in Expressjs, I love creating end-to-end systems that are both
          user-friendly and deeply optimized. I believe in understanding things
          from the metal up — whether it's browser-side rendering or
          socket-level data transfer.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
