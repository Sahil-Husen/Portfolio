import React from "react";
import { Home, FileText, Github, Linkedin } from "lucide-react";

function Navigation() {
  return (
    <div className="flex gap-2  justify-around items-center h-16 text-sm">
      {/* Home */}
      <a
        href="#home"
        className="flex flex-col items-center text-gray-400 hover:text-white transition"
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </a>

      {/* Blog */}
      <a
        href="#blog"
        className="flex flex-col items-center text-gray-400 hover:text-white transition"
      >
        <FileText size={20} />
        <span className="text-xs mt-1">Blog</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-400 hover:text-white transition"
      >
        <Github size={20} />
        <span className="text-xs mt-1">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-400 hover:text-white transition"
      >
        <Linkedin size={20} />
        <span className="text-xs mt-1">LinkedIn</span>
      </a>
    </div>
  );
}

export default Navigation;
