import React, { useState } from "react";
import { useTheme } from "../context/Theme";
import cert1 from "../assets/Certificate1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/amuCer.jpg";
import { X, Award } from "lucide-react";

function Cetification() {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (elem) => {
    setSelectedImage(elem.img);
    setIsOpen(true);
  };

  const certificates = [
    {
      id: 1,
      name: "AMU Hackathon",
      description: "First Prize Winner of AMU Hackathon",
      img: cert3,
    },
    {
      id: 2,
      name: "Backend Development",
      description: "Completed Backend Development Using Nodejs/Expressjs",
      img: cert2,
    },
    {
      id: 3,
      name: "Web Development Hackathon",
      description: "Runner up in National Level Web Development Hackathon",
      img: cert1,
    },
  ];

  return (
    <div className="mt-15 pb-6">
      <h1 className="text-xl font-bold mb-4">My Certificates</h1>

      <div className="flex flex-col gap-3">
        {certificates.map((elem) => (
          <div
            key={elem.id}
            onClick={() => handleClick(elem)}
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer
              ${darkMode ? "bg-[#061E29] hover:bg-[#0a2d3d]" : "bg-gray-100 hover:bg-gray-200"}
              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            {/* Thumbnail */}
            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-zinc-700">
              <img
                src={elem.img}
                alt={elem.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Award size={14} className="text-amber-400 shrink-0" />
                <h1 className="font-semibold text-sm truncate">{elem.name}</h1>
              </div>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                {elem.description}
              </p>
            </div>

            {/* Arrow */}
            <span className="text-gray-400 text-xs shrink-0">View →</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 transition"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Cetification;
