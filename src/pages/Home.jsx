import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Education from "../components/Education";

function Home() {
  return (
    <div className="px-6 sm:px-16 lg:px-32 py-20 pb-24 ">
      <Header />
      <About />
      <Skills />
      <Project />
      <Education />
    </div>
  );
}

export default Home;
