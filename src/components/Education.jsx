import React, { useState } from "react";
import kmc from "../assets/kmclu.jpg";
import amu from "../assets/amu.png";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme";
import { ChevronRight } from "lucide-react";

function Education() {
  const { darkMode } = useTheme();

  const [hoverId, setHoverId] = useState(null);

  let arr = [
    {
      id: 1,
      image: amu,
      name: "Aligarh Muslim University",
      education: "Masters Of Computer Application",
      url: "https://www.amu.ac.in/department/computer-science",
      duration: "2025 - 2027",
    },
    {
      id: 2,
      image: kmc,
      name: "Khwaja Moinuddin Chishti Language University",
      education: "Bachelors Of Computer Application",
      url: "https://kmclu.ac.in/",
      duration: "2022 - 2025",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="mt-20  font-bold text-xl">Education</h1>
      </div>
      <div className="mt-5 flex flex-col gap-6">
        {arr.map((elem) => {
          return (
            <div
              key={elem.id}
              onMouseEnter={() => setHoverId(elem.id)}
              onMouseLeave={() => setHoverId(null)}
              className="flex justify-between items-center"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-15 h-15">
                  <img
                    className="w-full h-full rounded-full"
                    src={elem.image}
                    alt="img"
                  />
                </div>
                <NavLink
                  to={elem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoverId(elem.id)}
                  onMouseLeave={() => setHoverId(null)}
                >
                  <h1 className="font-semibold flex items-center gap-2 group transition-all duration-300">
                    {elem.name}

                    <ChevronRight
                      size={16}
                      className={`transition-all duration-300 ease-in-out 
      ${
        hoverId === elem.id
          ? "translate-x-1 opacity-100"
          : "opacity-0 -translate-x-1"
      }`}
                    />
                  </h1>

                  <h5 className="text-sm">{elem.education}</h5>
                </NavLink>
              </div>

              <div
                className={`text-cyan-500 ${darkMode ? "hover:text-white transition" : "hover:text-black transition"}   `}
              >
                {elem.duration}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
