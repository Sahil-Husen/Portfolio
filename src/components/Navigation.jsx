import React from "react";
import { Home, FileText, Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { NavLink } from "react-router";

function Navigation() {
  return (
    <div className="flex gap-2  justify-around items-center h-16 text-sm">
      {/* Home */}
      <NavLink
        to="/"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </NavLink>

      {/* Blog */}
      <NavLink
        to="/blog"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <FileText size={20} />
        <span className="text-xs mt-1">Blog</span>
      </NavLink>

      {/* GitHub */}
      <a
        href="https://github.com/Sahil-Husen"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Github size={20} />
        <span className="text-xs mt-1">GitHub</span>
      </a>

      {/* NavLinkedIn */}
      <a
        href="https://www.linkedin.com/in/sahil-hussain-5a5488254/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-amber-50 hover:text-amber-600 transition"
      >
        <Linkedin size={20} />
        <span className="text-xs mt-1">Linkedln</span>
      </a>
    </div>
  );
}

export default Navigation;
