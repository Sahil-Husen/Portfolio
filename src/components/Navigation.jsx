import React from "react";
import {
  Home,
  FileText,
  Github,
  Linkedin,
  Sun,
  MoonStar,
  Terminal,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme";

function Navigation() {
  const { toggleTheme, darkMode } = useTheme();

  const links = [
    { to: "/", icon: <Home size={18} />, label: "Home", isNav: true },
    {
      href: "https://drive.google.com/file/d/1Fpcy4J3VnEK3zjsxqOaIApzbVVJQ9xwG/view?usp=sharing",
      icon: <FileText size={18} />,
      label: "Resume",
    },
    {
      href: "https://github.com/Sahil-Husen",
      icon: <Github size={18} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sahil-hussain-5a5488254/",
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://leetcode.com/u/Sahil_Husen/",
      icon: <Terminal size={18} />,
      label: "Leetcode",
    },
  ];

  const itemClass =
    "flex flex-col items-center gap-1 text-white/70 hover:text-white transition-all duration-200 hover:scale-110";

  return (
    <div className="flex gap-1 sm:gap-4 justify-around items-center h-14 px-2">
      {links.map((link) =>
        link.isNav ? (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `${itemClass} ${isActive ? "text-white" : ""}`
            }
          >
            {link.icon}
            <span className="text-[10px] sm:text-xs">{link.label}</span>
          </NavLink>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            {link.icon}
            <span className="text-[10px] sm:text-xs">{link.label}</span>
          </a>
        ),
      )}

      {/* Divider */}
      <div className="w-px h-6 bg-white/20" />

      <button className={`${itemClass} cursor-pointer`} onClick={toggleTheme}>
        {darkMode ? <Sun size={18} /> : <MoonStar size={18} />}
        <span className="text-[10px] sm:text-xs">
          {darkMode ? "Light" : "Dark"}
        </span>
      </button>
    </div>
  );
}

export default Navigation;
