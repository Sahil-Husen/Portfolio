import React from "react";
import { Home, FileText, Github, Linkedin, Sun, MoonStar } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme";

function Navigation() {
  const { toggleTheme, darkMode } = useTheme();

  
  return (
    <div className="flex gap-2 justify-around items-center h-16 text-sm">
      <NavLink
        to="/"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </NavLink>

      <NavLink
        to="/blog"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <FileText size={20} />
        <span className="text-xs mt-1">Blog</span>
      </NavLink>

      <a
        href="https://github.com/Sahil-Husen"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Github size={20} />
        <span className="text-xs mt-1">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/sahil-hussain-5a5488254/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Linkedin size={20} />
        <span className="text-xs mt-1">LinkedIn</span>
      </a>

      <button
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
        onClick={toggleTheme}
      >
        {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
        <span className="text-xs mt-1">{darkMode ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}

export default Navigation;
