import Button from "../components/Button";
import FrameComponent from "../components/FrameComponent";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const DetailedPage = () => {
  const location = useLocation();
  const news = location.state?.news; 
  if (!news) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <Header />
        <h1 className="text-2xl font-semibold">News Not Found</h1>
        <p className="mt-4">
          Please go back and select a news item to view its details.
        </p>
      </div>
    );
  }
  return (
    <>
    <div className="w-full relative bg-ghostwhite overflow-hidden text-left text-[14px] text-darkslategray-200 font-small">
    <Header />
    
    <div className="bg-gray-50 min-h-screen px-2 py-8">
      <main className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Main News Content */}
        <section className="md:col-span-2">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-[#A7B2C0] flex items-center">
            <div className="font-medium">News Listing Page</div>
            <span className="mx-2">{`>`}</span>
            <div className="font-medium text-[#40347D]">Individual News</div>
          </div>

          {/* News Content */}
          <div className="border-t border-gray-300 pt-6">
          <img
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
                src={news.image} // Use the dynamic image
                alt={news.title} // Use the dynamic title as alt text
              />
              <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                {news.title} {/* Dynamic title */}
              </h1>
            <div className="text-[#8F81CE] text-sm mt-1">20 Sep 2023, 8:00pm</div>
            <div className="text-[#02234D] leading-5 space-y-4 mt-4">
              <p>
                New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued
                the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024...
              </p>
              <p>
                We offer a diverse range of extracurricular activities aimed at enhancing personal
                growth, skill development, and building lasting connections...
              </p>
              <p>
              As individuals with dual responsibilities towards the institute and its students, our primary objective is to cultivate an enriching learning environment.
              We contribute to the institute by delivering high-quality education, aligning with institutional goals, and promoting
              a positive academic atmosphere. Towards students, we act as facilitators of learning, providing support, mentorship,
              and guidance for their intellectual, social, and emotional growth.
              </p>
              <p>
              Graduates from our institute, particularly those in nursing, have a wide array of career opportunities. With essential clinical skills, specialization options, and global practice opportunities, they are well-equipped
              for rewarding careers dedicated to improving health and well-being while making a meaningful impact on communities worldwide.
              </p>
              <p>
              The paramount strength of our institute lies in its ability to provide a transformative educational experience. With robust academic programs, committed faculty, and abundant resources, we empower students to cultivate 
              critical thinking, broaden their knowledge, and become well-rounded, educatedcitizens prepared to make significant contributions to society.
              </p>
              <p>
              To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable
               in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.
              </p>
              <p>
              To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, 
              success is a continuous journey—embrace the process, seize opportunities, and never stop learning.
              </p>
            </div>
          </div>
        </section>

        {/* Right: Sidebar with Buttons and Advertisements */}
        <aside className="space-y-3">
          <button className="w-[400px] rounded-md h-[48px] text-white bg-[#40347C]">Apply Now</button>
          <button className="w-[400px] font-bold rounded-md h-[48px] text-[#40347C] bg-gradient-to-r from-white to-purple-100
              border-2 border-purple-300">Download Brochure</button>
          <br></br>
          <br></br>
          <button className="w-[400px] rounded-md h-[90px] text-white bg-[#bf9deccc]">ADVERTISEMENT BANNER</button>
          <button className="w-[400px] rounded-md h-[90px] text-white bg-[#85a8eecc]">ADVERTISEMENT BANNER</button>
          <button className="w-[400px] rounded-md h-[90px] text-white bg-[#e7cb85cc]">ADVERTISEMENT BANNER</button>
        
          {/* News Section */}
          <h3 className="text-xl pt-8 m-2 font-semibold text-[#40347D]">
            <i>NEWS</i></h3>
          <div className="space-y-4">
            <FrameComponent image24="/small-image@3x.png" />
            <FrameComponent image24="/small-image1@3x.png" />
            <FrameComponent image24="/small-image3@3x.png" />
          </div>
        </aside>
      </main>
    </div>
    </div>
    </>
  );
};

export default DetailedPage;
