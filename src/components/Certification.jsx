import React, { useState } from "react";
import { useTheme } from "../context/Theme";
import cert1 from "../assets/Certificate1.png";
import cert2 from "../assets/cert2.png";
import { X } from "lucide-react";

function Cetification() {
  const { darkMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (elem) => {
    setSelectedImage(elem.img);
    setIsOpen(true);
  };

  let certificates = [
    {
      id: 1,
      name: "Backend Development",
      description: "Completed Backend Development Using Nodejs/Expressjs",
      img: cert2,
    },
    {
      id: 2,
      name: "Web Development Hackathon",
      description: "Runner up in National Level Web Development Hackathon",
      img: cert1,
    },
  ];

  return (
    <div className="">
      <div className="mt-15">
        <h1 className="text-xl font-bold  ">My Certificates</h1>
      </div>
      {certificates.map((elem) => {
        return (
          <div
            key={elem.id}
            className="mt-4 flex justify-between items-center gap-2 bg-gray-50 p-5  "
          >
            <div>
              <h1 className="font-medium text-sm ">{elem.name}</h1>
              <p className="text-gray-500 text-sm  mt-2">{elem.description}</p>
            </div>
            <div
              className={`mt-5 flex justify-center items-center  ${darkMode ? "bg-[#061E29] text-white" : "bg-[#eaeaea] text-black"} w-100 p-5 h-60 rounded `}
            >
              <div>
                <img
                  src={elem.img}
                  className=" cursor-pointer"
                  alt="img"
                  onClick={() => handleClick(elem)}
                />
              </div>
            </div>
          </div>
        );
      })}

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          {/* Selected Image */}
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[90%] max-h-[85%] rounded-lg   "
          />
        </div>
      )}
    </div>
  );
}

export default Cetification;
