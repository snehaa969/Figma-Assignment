import Alertnav from "../components/Alertnav";
import Header from "../components/Header";
import Hotnews from "../components/Hotnews";
import Mainnews from "../components/Mainnews";
import Newsfeed from "../components/Newsfeed";
import Newscat from '../components/Newscat'

const NewsListingPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite h-[2890px] overflow-hidden text-left text-[14px] text-darkslategray-200 font-small">
      <div className="absolute bg-white w-[1512px] h-[69px]" />
      <Header />
      <Alertnav />
      <Mainnews />
      <Hotnews />
      <Newsfeed />
      <Newscat/>
    </div>
  );
};

export default NewsListingPage;





