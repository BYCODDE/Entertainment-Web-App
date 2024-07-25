import beyondEarth from "/assets/thumbnails/beyond-earth/trending/small.jpg";
export default function Trending() {
  return (
    <div className="flex items-start  w-full  flex-col p-[16px]">
      <h3 className="text-[20px] tracking-[0.312px]">Trending</h3>
      <img
        className=" mt-[16px]  rounded-[8px] w-full h-full max-w-[240px] max-h-[140px] "
        src={beyondEarth}
        alt="beyondEarth"
      />
    </div>
  );
}
