const FrameComponent = ({className = "", image24}) => {
  return (
    <div className={`flex items-center gap-4 p-2 border border-gray-300 bg-white shadow ${className}`}>
      <img className="w-[140px] h-[120px] object-cover" alt="News Thumbnail" src={image24} />
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-800">What is the latest program that you are offering in your institute...</p>
        <p className="text-xs text-gray-500 pb-2">Lucknow Public College of Professional Studies...</p>
        <p className="text-xs text-gray-400">⏱️ 27 Dec 2020</p>
      </div>
    </div>
  );
};

export default FrameComponent;
