import React from "react";

function Skills() {
  const products = [
    { id: 1, name: "Nodejs" },
    { id: 2, name: "Reactjs" },
    { id: 3, name: "Expressjs" },
    { id: 4, name: "MongoDB" },
    { id: 5, name: "Java" },
    { id: 6, name: "Git & GitHub" },
  ];

  return (
    <div className="mt-8 px-4">
      <div>
        <h1 className="text-2xl font-bold">Skills</h1>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {products.map((elem) => (
          <div
            key={elem.id}
            className="bg-white text-black px-3 py-1 rounded-se-md text-sm 
                       hover:bg-amber-300 transition-all duration-300 
                       shadow-sm hover:shadow-md"
          >
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
