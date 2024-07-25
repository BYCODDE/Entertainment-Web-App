import Header from "../component/Header";
import Recommended from "../component/Recommended";
import Search from "../component/Search";
import Trending from "../component/Trending";
export default function Home() {
  return (
    <div className="bg-custom-black flex justify-center items-center h-screen flex-col w-screen ">
      <Header />
      <Search />
      <Trending />
      <Recommended />
    </div>
  );
}
