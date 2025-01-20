function Alertnav() {
  return (
    <>
      <div className="relative flex flex-col items-center px-4 md:px-8 lg:px-12 py-4 bg-gray-50 w-full max-w-screen-xl mx-auto  top-[105px] left-[65px] rounded-lg  border-darkslateblue-200 border-[0.2px] border-solid box-border h-[28px] text-[12px] text-gray-400">
        <div className="absolute top-[13px] right-[16px] transform -translate-y-[9px] flex items-center text-darkslateblue-100 font-inter">
          <span className="font-semibold">Check Now</span>
          <img
            className="ml-[8px] w-[11px] h-[7px]"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[13px] left-[13px] transform -translate-y-[9px] flex items-center">
          <span className="font-semibold">⚡ Trending Now:</span>&nbsp;CBSE
          Class 12 Physics Question Paper 2024 Set 3
        </div>
      </div>

      <div className="absolute top-[105px] right-11 flex flex-wrap items-start justify-start gap-[6px] text-[11px] font-inter">
        <div className="rounded-lg  bg-whitesmoke border-gainsboro border-[1px] border-solid flex items-start justify-start py-[6px] px-[10px]">
          <div className="relative leading-[16px] font-medium">All News</div>
        </div>
        <div className="rounded-lg bg-white border-gainsboro border-[1px] border-solid flex items-start justify-start py-[6px] px-[10px]">
          <div className="relative leading-[16px] font-medium">
            Admission Alert
          </div>
        </div>
        <div className="rounded-lg bg-white border-gainsboro border-[1px] border-solid flex items-start justify-start py-[6px] px-[10px]">
          <div className="relative leading-[16px] font-medium">
            College News
          </div>
        </div>
        <div className="rounded-lg bg-white border-gainsboro border-[1px] border-solid flex items-start justify-start py-[6px] px-[10px]">
          <div className="relative leading-[16px] font-medium">Exam News</div>
        </div>
        <div className="rounded-lg bg-white border-gainsboro border-[1px] border-solid flex items-start justify-start py-[6px] px-[10px]">
          <div className="relative leading-[16px] font-medium">Latest News</div>
        </div>
      </div>
    </>
  );
}
export default Alertnav;


