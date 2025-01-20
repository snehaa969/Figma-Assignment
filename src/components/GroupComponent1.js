const GroupComponent1 = ({ onCategoryChange }) => {
  const categories = [
    { label: "All News", value: "allNews" },
    { label: "College News", value: "collegeNews" },
    { label: "Exam News", value: "examNews" },
    { label: "Latest News", value: "latestNews" }
  ];

  return (
    <div className="mx-auto w-1/2 bg-white rounded-lg shadow-md p-4 flex justify-center items-center space-x-8">
      {categories.map((category) => (
        <p
          key={category.value}
          className="text-gray-700 text-sm lg:text-base font-medium cursor-pointer hover:text-blue-600"
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </p>
      ))}
    </div>
  );
};

export default GroupComponent1;
