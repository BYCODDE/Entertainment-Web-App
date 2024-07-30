import beyondEarth from "/assets/thumbnails/beyond-earth/trending/small.jpg";
import bottomGear from "/assets/thumbnails/bottom-gear/trending/small.jpg";
export default function Trending() {
  return (
    <div className="">
      <h3 className="text-[20px] tracking-[0.312px] ml-[20px]">Trending</h3>
      <div className="flex items-start  w-full pt-[0]  p-[16px]  gap-[16px] overflow-hidden">
        <img
          className=" mt-[16px]  rounded-[8px] w-full h-full max-w-[240px] max-h-[140px] "
          src={beyondEarth}
          alt="beyondEarth"
        />
        <img
          className=" mt-[16px]  rounded-[8px] w-full h-full max-w-[240px] max-h-[140px] "
          src={bottomGear}
          alt="bottomGear"
        />
      </div>
    </div>
  );
}
