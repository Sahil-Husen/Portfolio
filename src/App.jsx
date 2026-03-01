import React from "react";
 
import Navigation from "./components/Navigation";
import Home from "../src/pages/Home"
import Navigate from "./pages/Navigate";

function App() {
  return (
    <div className=" px-40 relative min-h-screen bg-[#030712] text-white">
      {/* Main Content */}
      {/* className="px-6 sm:px-16 lg:px-32 py-20 pb-24" */}
      {/* <div className="px-6 sm:px-16 lg:px-32 py-20 pb-24 ">
        <Header />
        <About />
        <Skills />
        <Project />
        <Education />
      </div> */}
      <Home></Home>
      <Navigate></Navigate>

      
       {/* <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 
                bg-cyan-950 text-white 
                px-6  
                rounded-2xl 
                shadow-lg 
                border border-gray-800 
                z-50"
      >
        <Navigation />
        
      </div> */}
    </div>
  );
}

export default App;
