import React from "react";
import Navigation from "../components/Navigation";

function Navigate() {
  return (
     <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 
                bg-cyan-950 text-white 
                px-6  
                rounded-2xl 
                shadow-lg 
                border border-gray-800 
                z-50"
      >
        <Navigation />
        
      </div> 
  );
}

export default Navigate;
