import greatLands from "/assets/thumbnails/the-great-lands/regular/small.jpg";
import theDiary from "/assets/thumbnails/the-diary/regular/small.jpg";
import earthsUntouched from "/assets/thumbnails/earths-untouched/regular/small.jpg";
import nolandBeyond from "/assets/thumbnails/no-land-beyond/regular/small.jpg";
import bookMark from "/assets/icon-bookmark-empty.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
export default function Recommended() {
  return (
    <div className="flex   w-full h-full  flex-col p-[16px] overflow-hidden ">
      <h3 className="text-[20px] tracking-[0.312px] ">Recommended for you</h3>
      <div className="mt-[24px] flex justify-between gap-[15px]">
        <div className="flex flex-col gap-[15px]">
          <div className="relative">
            <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] top-[3%] ">
              <img src={bookMark} alt="bookMark" />
            </div>
            <img
              src={greatLands}
              alt="greatLands"
              className="rounded-[8px] max-h-[110px] max-w-[164px]"
            />
            <div className="opacity-50 flex  text-white items-center justify-start gap-[6px] mt-[10px] text-[11px] ">
              2019{" "}
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              <img
                src={movieIcon}
                alt="movieIcon"
                className="filter-custom-filter w-[11px] h-[11
                px]"
              />
              Movie
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>E
            </div>
            <span className="text-[14px] tracking-[0.312px]">
              The Great Lands
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] top-[3%] ">
              <img src={bookMark} alt="bookMark" />
            </div>
            <img
              src={earthsUntouched}
              alt="earthsUntouched"
              className="rounded-[8px] max-h-[110px] max-w-[164px]"
            />
            <div className="opacity-50 flex  text-white items-center justify-start gap-[6px] mt-[10px] text-[11px] ">
              2019{" "}
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              <img
                src={movieIcon}
                alt="movieIcon"
                className="filter-custom-filter w-[11px] h-[11
                px]"
              />
              Movie
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              18+
            </div>
            <span className="text-[14px] tracking-[0.312px]">
              Earth’s Untouched
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="relative">
            <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] top-[3%] ">
              <img src={bookMark} alt="bookMark" />
            </div>
            <img
              src={theDiary}
              alt="theDiary"
              className="rounded-[8px] max-h-[110px] max-w-[164px]"
            />
            <div className="opacity-50 flex  text-white items-center justify-start gap-[6px] mt-[10px] text-[11px] ">
              2019{" "}
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              <img
                src={tvIcon}
                alt="tvIcon"
                className="filter-custom-filter w-[11px] h-[11
                px]"
              />
              TV Series
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              PG
            </div>
            <span className="text-[14px] tracking-[0.312px]">The Diary</span>
          </div>
          <div className="relative">
            <div className="bg-[#10141E] bg-opacity-[0.500647] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute right-[3%] top-[3%] ">
              <img src={bookMark} alt="bookMark" />
            </div>
            <img
              src={nolandBeyond}
              alt="nolandBeyond"
              className="rounded-[8px] max-h-[110px] max-w-[164px]"
            />
            <div className="opacity-50 flex  text-white items-center justify-start gap-[6px] mt-[10px] text-[11px] ">
              2019{" "}
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>
              <img
                src={movieIcon}
                alt="movieIcon"
                className="filter-custom-filter w-[11px] h-[11
                px]"
              />
              Movie
              <div className="w-[3px] h-[3px] rounded-[50%] bg-[#FFF] "></div>E
            </div>
            <span className="text-[14px] tracking-[0.312px]">
              No Land Beyond
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
