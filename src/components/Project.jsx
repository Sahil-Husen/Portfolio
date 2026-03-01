import React from "react";
 

function Project() {
  const card = [
    {
      id: 1,
      img: "",
      featured: "featured1",
      title: "title1",
      duration: "02 Feb 2026 - 10 Feb 2026",
      description: "This is a project",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 2,
      img: "",
      featured: "fectured2",
      title: "Title2",
      duration: "03 Feb 2026 - 20 Feb 2026",
      description: "This is random description",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 3,
      img: "",
      featured: "featured3",
      title: "title3",
      duration: "05 Feb 2026 - 15 Feb 2026",
      description: "This is fake decription",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
    {
      id: 4,
      img: "",
      featured: "featured3",
      title: "title4",
      duration: "08 Feb 2026 - 19 Feb 2026",
      description: "This is fake decription",
      techStack: ["nodejs", "reactjs", "expressjs", "mongoDB"],
      webssite: "",
      source: "",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className=" px-4 py-[.2rem] bg-white text-black rounded hover:bg-amber-300 ">
          My Projects
        </h1>
        <h1 className="text-4xl font-bold">Check out my latest work</h1>
      </div>
      {/* Cards */}
      <div className="mt-10 grid grid-cols-1  sm:grid-cols-2 w-180 gap-2">
        {/* card1 */}
        {card.map((elem,index)=>{
          return (<div id={index}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg overflow-hidden 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Image */}
          <a href="#">
            <img className="w-full h-40 object-cover" src={elem.img} alt="project" />
          </a>

          {/* Content */}
          <div className="p-6">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-1 text-xs font-medium 
                     bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md border border-amber-500/20"
            >
              🔥 {elem.featured}
            </span>

            {/* Title */}
            <h3 className="mt-2 text-xl font-semibold text-white">{elem.title}</h3>

            {/* Duration */}
            <p className="text-sm text-zinc-400 mt-1">{elem.duration}</p>

            {/* Description */}
            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
              {elem.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              { elem.techStack.map((elem,i)=>{
                return (<span
                  key={i}
                  className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md"
                >
                  {elem}
                </span>)
              })}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-3">
              <a
                href="#"
                className="flex-1 text-center bg-white text-black text-sm font-medium 
                   py-2 rounded-lg hover:bg-zinc-200 transition"
              >
                🌐 Website
              </a>

              <a
                href="#"
                className="flex-1 text-center border border-zinc-700 text-white text-sm font-medium 
                   py-2 rounded-lg hover:bg-zinc-800 transition"
              >
                💻 Source
              </a>
            </div>
          </div>
        </div>)
        })}

        {/* card end */}
      </div>
    </div>
  );
}

export default Project;
