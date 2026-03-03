import React from "react";
import ProfileImg from "../assets/ProfileImg.jpeg";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium">Hi, I'm Sahil 👋</h1>
          <p className="mt-2 text-base sm:text-xl">
            Full Stack Developer focused on building performant, scalable, and production-ready web application.
          </p>
        </div>
        <div className="shrink-0">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                       rounded-full object-cover
                       border-2 border-blue-400
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