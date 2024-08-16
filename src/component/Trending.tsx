import { useRef, useEffect } from "react";
import movieIcon from "/assets/icon-nav-movies.svg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import bookMarkFull from "/assets/icon-bookmark-full.svg";
import { useData } from "../App";

export default function Trending() {
  const { data, setData } = useData();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem("trendingData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [setData]);

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

  const handleBookmarkClick = (index: number) => {
    if (data) {
      // Create new data array with updated bookmark status
      const newData = data.map((item, i) =>
        i === index ? { ...item, isBookmarked: !item.isBookmarked } : item
      );

      // Save updated data to localStorage
      localStorage.setItem("trendingData", JSON.stringify(newData));

      // Update state
      setData(newData);
    }
  };

  // Debug: Check the data in state
  useEffect(() => {
    console.log("Current data from state:", data);
  }, [data]);

  // Debug: Check data from localStorage
  useEffect(() => {
    console.log(
      "Data from localStorage:",
      localStorage.getItem("trendingData")
    );
  }, []);

  return (
    <div className="p-4 w-full">
      <h3 className="md:text-[32px] text-[20px] tracking-[0.312px]">
        Trending
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="xl:justify-center scrollbar-hide flex gap-[16px] w-full h-full overflow-x-auto"
        >
          {data?.map((item, index) =>
            item.isTrending ? (
              <div
                key={item.title}
                className="xl:w-[470px] xl:h-[230px] mt-[16px] rounded-[8px] p-[8px] min-w-[240px] max-h-[140px] relative"
                style={{
                  backgroundImage: `url(${item?.thumbnail.trending?.small})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%]">
                  <img
                    src={item.isBookmarked ? bookMarkFull : bookMark}
                    alt="bookmark"
                    onClick={() => handleBookmarkClick(index)}
                  />
                </div>
                <div className="md:text-[15px] opacity-50 flex text-white items-center justify-start mt-[60px] text-[10px] gap-[3px]">
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
                <span className="xl:text-[24px] md:text-[22px] text-[15px] tracking-[0.312px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
