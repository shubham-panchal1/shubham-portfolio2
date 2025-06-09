import React, { useState } from "react";
import ToolsCard from "../components/toolsCard";
import toolInfo from "../components/toolInfo";

const Toolbox = () => {
  const [filter, setFilter] = useState("All");

  const filteredTools =
    filter === "All"
      ? toolInfo
      : toolInfo.filter((tool) => tool.type === filter.toLowerCase());

  return (
    <section className="bg-gradient-to-b from-sky-400 to-sky-500 min-h-screen px-8 py-12">
      <h1 className="text-center text-6xl font-mono font-bold mb-7 text-white">Under The Hood</h1>
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Coding", "Non-Coding"].map((category) => (
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

      <div className="flex flex-wrap justify-center gap-3 lg:mx-32 xl:mx-64">
  {filteredTools.map((tool) => (
    <ToolsCard key={tool.id} text={tool.title} image={tool.image} />
  ))}
</div>

    </section>
  );
};

export default Toolbox;
