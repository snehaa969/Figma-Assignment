import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import newsData from "./newsData.json";

const Newscat = () => {
  const [currentCategory, setCurrentCategory] = useState("allNews");
  const navigate = useNavigate(); 

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleCardClick = (news) => {
    navigate("/details", { state: { news } }); 
  };

  return (
    <div className="absolute top-[1170px] left-0 w-full h-[1632px] bg-gradient-to-b from-[#f5f3ff] to-white border border-thistle border-solid text-gray-300">
      {/* Featured Section */}
      <div className="mb-6 pt-10 mx-auto">
        <GroupComponent1 onCategoryChange={handleCategoryChange} />
      </div>

      {/* News Feed Section */}
      <div className="grid grid-cols-4 gap-4 p-4">
        {newsData.newsCategories[currentCategory].map((news) => (
          <GroupComponent
            key={news.id}
            allNewsItemsDivider={news.image}
            title={news.title}
            description={news.description}
            date={news.date}
            onClick={() => handleCardClick(news)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Newscat;