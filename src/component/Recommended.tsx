import bookMarkFull from "/assets/icon-bookmark-full.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import { useData } from "../App";

export default function Recommended() {
  const { data, search, home, movie, tv } = useData();
  console.log(search);

  return (
    <div className="flex w-full h-full flex-col p-[16px] overflow-hidden overflow-y-scroll">
      <h3 className="md:text-[32px] text-[20px] tracking-[0.312px]">
        Recommended for you
      </h3>
      <div className="mt-[24px] flex justify-between gap-[15px] flex-wrap">
        {data?.map(
          (item, index) =>
            !item.isTrending &&
            item.title.toLowerCase().includes(search) &&
            home && (
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
                    className="md:max-w-[264px] md:max-h-[140px]   rounded-[8px] max-h-[110px] max-w-[164px]"
                  />
                  <div className="md:text-[15px] opacity-50 flex text-white items-center justify-start gap-[6px] mt-[10px] text-[11px]">
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
                  <span className="md:text-[18px] text-[14px] tracking-[0.312px]">
                    {item.title}
                  </span>
                </div>
              </div>
            )
        )}

        {data?.map(
          (item, index) =>
            !item.isTrending &&
            item.title.toLowerCase().includes(search) &&
            item.category.includes("Movie") &&
            movie && (
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
                    className="md:max-w-[264px] md:max-h-[140px]  rounded-[8px] max-h-[110px] max-w-[164px]"
                  />
                  <div className="md:text-[15px] opacity-50 flex text-white items-center justify-start gap-[6px] mt-[10px] text-[11px]">
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
                  <span className="md:text-[18px] text-[14px] tracking-[0.312px]">
                    {item.title}
                  </span>
                </div>
              </div>
            )
        )}

        {data?.map(
          (item, index) =>
            !item.isTrending &&
            item.title.toLowerCase().includes(search) &&
            item.category.includes("TV Series") &&
            tv && (
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
                    className="md:max-w-[264px] md:max-h-[140px]  rounded-[8px] max-h-[110px] max-w-[164px]"
                  />
                  <div className="md:text-[15px]  opacity-50 flex text-white items-center justify-start gap-[6px] mt-[10px] text-[11px]">
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
                  <span className="md:text-[18px] text-[14px] tracking-[0.312px]">
                    {item.title}
                  </span>
                </div>
              </div>
            )
        )}

        {data
          ?.filter(
            (item) =>
              !item.isTrending &&
              item.isBookmarked &&
              item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
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
                  className="md:max-w-[264px] md:max-h-[140px]  rounded-[8px] max-h-[110px] max-w-[164px]"
                />
                <div className="md:text-[15px]  opacity-50 flex text-white items-center justify-start gap-[6px] mt-[10px] text-[11px]">
                  {item.year}{" "}
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                  <img
                    src={item.category === "Movie" ? movieIcon : tvIcon}
                    alt={
                      item.category === "Movie"
                        ? "Movie icon"
                        : "TV Series icon"
                    }
                    className="filter-custom-filter w-[11px] h-[11px]"
                  />
                  {item.category === "Movie" ? "Movie" : "TV Series"}
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                  {item.rating}
                </div>
                <span className="md:text-[18px] text-[14px] tracking-[0.312px]">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
