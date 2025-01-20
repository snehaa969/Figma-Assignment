const GroupComponent = ({
  className = "",
  allNewsItemsDivider,
  title,
  description,
  date,
  onClick,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 ${className}`}
      onClick={onClick} 
      style={{ cursor: "pointer" }} 
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          alt="News Divider"
          src={allNewsItemsDivider}
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-xs text-gray-500 mt-2 flex items-center">
            ⏱️ {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;