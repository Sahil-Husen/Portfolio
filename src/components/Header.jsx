import React from "react";
import ProfileImg from "../assets/ProfileImg.jpeg";
 

function Header() {
  

  return (
    <div>
      <div className="flex gap-4 ">
        <div>
          <h1 className="text-6xl font-bold">Hi, I'm Sahil 👋</h1>
          <p className="mt-2 text-xl w-[25em]">
            Full Stack Developer focused on building performant, scalable, and production-ready web application.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            className="w-22 h-22 sm:w-20 sm:h-20 md:w-28 md:h-27
                       rounded-full object-cover 
                       border-3 border-blue-400 
                       shadow-xl 
                       hover:scale-105 transition duration-500"
            src={ProfileImg}
            alt="Sahil Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
