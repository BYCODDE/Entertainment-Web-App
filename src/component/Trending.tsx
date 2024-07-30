import movieIcon from "/assets/icon-nav-movies.svg";

export default function Trending() {
  return (
    <div className="p-4 w-full h-[50%]">
      <h3
        className="text-[20px] tracking-[0.312px]
      "
      >
        Trending
      </h3>
      <div className="flex  gap-[16px] w-full h-full">
        <div
          className=" mt-[16px] rounded-[8px] w-full h-full p-[8px] max-w-[240px] max-h-[140px]"
          style={{
            backgroundImage:
              "url(/assets/thumbnails/beyond-earth/trending/small.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="opacity-50 flex  text-white items-center justify-between mt-[50%] ">
            2019{" "}
            <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
            <img
              src={movieIcon}
              alt="movieIcon"
              className="filter-custom-filter"
            />
            Movie
            <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
            PG
          </div>
          <span className="text-[18px] tracking-[0.312px]">Beyond Earth</span>
        </div>
        <div
          className=" mt-[16px] rounded-[8px] w-full h-full max-w-[240px] max-h-[140px] "
          style={{
            backgroundImage:
              "url(/assets/thumbnails/bottom-gear/trending/small.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
