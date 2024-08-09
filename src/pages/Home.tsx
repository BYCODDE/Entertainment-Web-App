import Header from "../component/Header";
import Search from "../component/Search";
import Trending from "../component/Trending";
import Recommended from "../component/Recommended";
export default function Home() {
  return (
    <div className="bg-custom-black flex justify-center items-center  flex-col w-screen  h-screen ">
      <Header />
      <Search />
      <Trending />
      <Recommended />
    </div>
  );
}
