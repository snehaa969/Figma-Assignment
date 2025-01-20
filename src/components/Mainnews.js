function Mainnews() {
  return (
    <div className="absolute top-[161px] left-[65px] rounded-lg bg-white w-full h-auto overflow-hidden flex flex-col sm:flex-row items-start justify-start py-[30px] box-border text-[30px] text-content-main">
      <div className="w-full sm:w-[796px] flex flex-col items-center justify-start gap-[24px]">
        <img
          className="w-full sm:w-[795px] h-auto sm:h-[446px] object-cover"
          alt=""
          src="/frame-745@2x.png"
        />
        <div className="w-full sm:w-[746px] flex flex-col items-start justify-start gap-[16px]">
          <b className="w-full sm:w-[610px] relative leading-[130%] inline-block h-auto sm:h-[67px] shrink-0">
            Chitkara University MBA Admission Open; Check Direct List...
          </b>
          <div className="w-full sm:w-[610px] relative text-[14px] leading-[21px] text-cornflowerblue inline-block">
            20 Sep 2023, 8:00pm
          </div>
        </div>
        <div className="w-full sm:w-[746px] relative text-[16px] leading-[20.8px] inline-block">
          <span>New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the documen... </span>
          <a
            className="text-darkslateblue-100"
            href="https://collegedunia.com/news/mah-cet-2024-admit-card-released-for-march-mhmct-bed-med-mped-courses-alertid-121097"
            target="_blank"
          >
            <span className="[text-decoration:underline] font-semibold">
              READ
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mainnews;