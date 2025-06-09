const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="max-w-sm flex flex-col rounded-2xl shadow-xl bg-gray-800 border-gray-700 hover:scale-105 transition-all duration-300 overflow-hidden font-mono">
      <img
        className="rounded-t-2xl hover:scale-105 transition-all duration-300"
        src={image}
        alt={title}
      />
      
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-4 font-normal text-sm text-slate-300">
            {description}
          </p>
        </div>
        
        <div className="flex flex-row space-x-4 mt-auto">
          {link && (
            <button className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-200 px-2 py-1 lg:px-3 lg:py-2 rounded-xl font-mono hover:scale-105 transition-all duration-150">
              <a href={link} className="text-sky-800 font-bold" target="_blank" rel="noopener noreferrer">
                Visit!
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
