import SearchIcon from "/assets/icon-search.svg";

export default function Search() {
  return (
    <div className="bg-custom-black flex  justify-between items-center w-full p-[16px]">
      <div className="flex gap-[16px] ">
        <img src={SearchIcon} alt="" />
        <input
          className=" focus:outline-none  opacity-70 tracking-[0.5px]  bg-custom-black"
          type="text"
          placeholder="Search for movies or TV series "
        />
      </div>
    </div>
  );
}
