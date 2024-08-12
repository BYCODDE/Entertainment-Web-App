import bookMarkFull from "/assets/icon-bookmark-full.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import { useData } from "../App";

export default function Recommended() {
  const { data } = useData();
  return (
    <div className="flex w-full h-full flex-col p-[16px] overflow-hidden overflow-y-scroll">
      <h3 className="text-[20px] tracking-[0.312px]">Recommended for you</h3>
      <div className="mt-[24px] flex justify-between gap-[15px] flex-wrap">
        {data?.map(
          (item, index) =>
            !item.isTrending && (
              <div key={index} className="flex flex-col gap-[15px]">
                <div className="relative">
                  <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] top-[3%]">
                    {item.isBookmarked ? (
                      <img src={bookMarkFull} alt="bookmark" />
                    ) : (
                      <img src={bookMark} alt="bookmark" />
                    )}
                  </div>
                  <img
                    src={item.thumbnail.regular.small}
                    alt={item.title}
                    className="rounded-[8px] max-h-[110px] max-w-[164px]"
                  />
                  <div className="opacity-50 flex text-white items-center justify-start gap-[6px] mt-[10px] text-[11px]">
                    {item.year}{" "}
                    <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                    <img
                      src={item.category ? movieIcon : tvIcon}
                      alt={item.category ? "Movie icon" : "TV Series icon"}
                      className="filter-custom-filter w-[11px] h-[11px]"
                    />
                    {item.category ? "Movie" : "TV Series"}
                    <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                    {item.rating}
                  </div>
                  <span className="text-[14px] tracking-[0.312px]">
                    {item.title}
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
