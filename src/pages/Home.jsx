import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Education from "../components/Education";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="px-6 sm:px-16 lg:px-32 py-30 pb-24 ">
      <Header />
      <About />
      <Skills />
      <Project />
      <Education />
      <Experience></Experience>
    </div>
  );
}

export default Home;
