import movieIcon from "/assets/icon-nav-movies.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import { useData } from "../App";
export default function Trending() {
  const { data } = useData();

  return (
    <div className="p-4 w-full ">
      <h3
        className="text-[20px] tracking-[0.312px]
      "
      >
        Trending
      </h3>
      <div className="flex  gap-[16px] w-full h-full overflow-hidden">
        {data?.map(
          (item) =>
            item.isTrending && (
              <div
                key={item.title}
                className=" mt-[16px] rounded-[8px] w-full h-full p-[8px] max-w-[240px] max-h-[140px] relative"
                style={{
                  backgroundImage: `url(${item?.thumbnail.trending?.small})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] ">
                  <img src={bookMark} alt="bookMark" />
                </div>
                <div className="opacity-50 flex  text-white items-center justify-between mt-[60px] ">
                  {item.year}
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
                  <img
                    src={movieIcon}
                    alt="movieIcon"
                    className="filter-custom-filter"
                  />
                  {item.category}
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
                  {item.rating}
                </div>
                <span className="text-[18px] tracking-[0.312px]">
                  {item.title}
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
}
