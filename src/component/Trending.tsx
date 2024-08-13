import React, { useRef, useEffect } from "react";
import movieIcon from "/assets/icon-nav-movies.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import { useData } from "../App";

export default function Trending() {
  const { data } = useData();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const onWheel = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault();
        scrollContainer.scrollBy({
          left: event.deltaY < 0 ? -800 : 800,
          behavior: "smooth",
        });
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", onWheel);
      }
    };
  }, []);

  return (
    <div className="p-4 w-full">
      <h3 className="text-[20px] tracking-[0.312px]">Trending</h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-[16px] w-full h-full overflow-x-auto"
        >
          {data?.map(
            (item) =>
              item.isTrending && (
                <div
                  key={item.title}
                  className="mt-[16px] rounded-[8px] p-[8px] min-w-[240px] max-h-[140px] relative"
                  style={{
                    backgroundImage: `url(${item?.thumbnail.trending?.small})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%]">
                    <img src={bookMark} alt="bookmark" />
                  </div>
                  <div className="opacity-50 flex text-white items-center justify-between mt-[60px] text-[10px] gap-[3px]">
                    {item.year}
                    <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                    <img
                      src={movieIcon}
                      alt="movieIcon"
                      className="filter-custom-filter"
                    />
                    {item.category}
                    <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF]"></div>
                    {item.rating}
                  </div>
                  <span className="text-[15px] tracking-[0.312px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
