import React, { useState } from "react";
import projectInfo from "../components/projectInfo";
import ProjectCard from "../components/projectCard";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectInfo
      : projectInfo.filter((project) => project.type === filter.toLowerCase());

  return (
    <section className="bg-gradient-to-b from-sky-700 to-sky-800 min-h-screen px-8 py-12" id="projects">
      <h1 className="text-center text-6xl font-mono font-bold mb-7 text-white">My Projects!</h1>
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Web Development", "Engineering"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === category
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800"
            } hover:scale-105 shadow-md`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:mx-20">
  {filteredProjects.map((project) => (
    <ProjectCard key={project.id} title={project.title} image={project.image} description={project.description} link={project.link}/>
  ))}
</div>

    </section>
  );
};

export default Projects;
