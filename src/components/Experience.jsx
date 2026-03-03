import React from "react";
import { useTheme } from "../context/Theme";

const experiences = [
  {
    company: "DeenMate",
    date: "Aug 2025 - Sep 2025",
    role: "Backend Developer Intern",
    description:
      "Developed scalable RESTful APIs using Node.js and Express, implemented secure JWT authentication, integrated Cloudinary for media handling, and built admin dashboard and notification modules to enhance system performance and user experience.",
    color: "bg-emerald-500",
  },
];

const Experience = () => {
  const { darkMode } = useTheme();

  return (
    <div className="mt-15">
      <div>
        <h2 className="text-xl font-bold">Experience & Internship</h2>
      </div>
      <section
        className={` mt-5  ${darkMode ? "bg-[#061E29] text-white" : "bg-gray-100 text-black"}  py-20 px-5 md:px-13`}
      >
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {experiences.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side */}
              <div className="md:w-5/12 text-center md:text-right">
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

              {/* Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-lg">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
              </div>

              {/* Right Side */}
              <div className="md:w-5/12 mt-6 md:mt-0 text-center md:text-left">
                <h4 className="text-lg font-semibold">{item.role}</h4>
                <p className="text-gray-500 text-sm  mt-2 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
