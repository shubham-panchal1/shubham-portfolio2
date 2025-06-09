const ToolsCard = ({ text, image }) => {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15 border border-blue-800 font-mono font-medium text-sm md:text-lg p-6 flex flex-col justify-center items-center rounded-2xl shadow-lg hover:animate-wobble hover:bg-opacity-30 transition-all duration-300 text-center">
      <img src={image} className="w-3/4 mb-2"></img>
      <h2 className="text-blue-800 font-semibold">{text}</h2>
    </div>
  );
};

export default ToolsCard;
