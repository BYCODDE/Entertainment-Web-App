import movieIcon from "/assets/icon-nav-movies.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import { useData } from "../App";
export default function Trending() {
  const { data } = useData();
  // const trendingItems = data?.trending || [];
  console.log(data?.map((item) => item?.thumbnail.trending?.small));
console.log(data);

  return (
    <div className="p-4 w-full ">
      <h3
        className="text-[20px] tracking-[0.312px]
      "
      >
        Trending
      </h3>
      <div className="flex  gap-[16px] w-full h-full">
        {/* {
          data?.trending?.map((item)=> (
        <div
          className=" mt-[16px] rounded-[8px] w-full h-full p-[8px] max-w-[240px] max-h-[140px] relative"
          style={{
            backgroundImage:
              "url(/assets/thumbnails/beyond-earth/trending/small.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] ">
            <img src={bookMark} alt="bookMark" />
          </div>
          <div className="opacity-50 flex  text-white items-center justify-between mt-[60px] ">
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

          ))
        } */}
        {/* <div
          className=" mt-[16px] rounded-[8px] w-full h-full max-w-[240px] max-h-[140px] p-[8px] relative "
          style={{
            backgroundImage:
              "url(/assets/thumbnails/bottom-gear/trending/small.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] ">
            <img src={bookMark} alt="bookMark" />
          </div>
          <div className="opacity-50 flex  text-white items-center justify-between mt-[60px] ">
            2021{" "}
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
          <span className="text-[18px] tracking-[0.312px]">Bottom Gear</span>
        </div> */}
      </div>
    </div>
  );
}
