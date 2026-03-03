import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Cetification from "../components/Certification";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="py-16 pb-24">
      <Header />
      <About />
      <Skills />
      <Project />
      <Education />
      <Experience />
      <Cetification />
      <Contact></Contact>
    </div>
  );
}

export default Home;
