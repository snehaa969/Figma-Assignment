function Header() {
  return (
    <div className="relative w-full h-[64px] bg-white shadow-md flex items-center justify-between px-[28px] sm:px-6 md:px-8">

      {/* Navigation Menu */}
      <div className="flex items-center gap-[32px] px-8 md:flex sm:px-6 md:px-8">
        <img
          className="w-[96px] h-auto object-cover"
          alt="Logo"
          src="/image-7@2x.png"
        />
        {/* Using flex-wrap and adjusting item size for smaller screens */}
        <div className="hidden md:flex gap-[32px] ">
          {["University", "Colleges", "Exams", "Courses", "News"].map((item) => (
            <div key={item} className="flex items-center gap-[8px]">
              <span className="font-medium leading-[150%]">{item}</span>
              <img
                className="w-[16px] h-[16px] object-contain"
                alt=""
                src="/icon--arrowdown@2x.png"
              />
            </div>
          ))}
        </div>
        
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white border border-gray-500 space-x-1 rounded-md px-[5px] py-[8px] w-[350px] sm:w-[300px] md:w-[350px]">
        <img
          className="w-[20px] h-[20px] mr-[8px]"
          alt="Search"
          src="/icon--search.svg"
        />
        <input
          type="text"
          placeholder="Search for Colleges, Exams, Courses & more..."
          className="flex-1 text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Header;
