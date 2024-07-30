export default function Trending() {
  return (
    <div className="p-4 w-full h-[50%]">
      <h3 className="text-[20px] tracking-[0.312px]
      ">Trending</h3>
      <div className="flex  gap-[16px] w-full h-full">
        <div
          className=" mt-[16px] rounded-[8px] w-full h-full"
          style={{
            backgroundImage:
              "url(/assets/thumbnails/beyond-earth/trending/small.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className=" mt-[16px] rounded-[8px] w-full h-full"
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
