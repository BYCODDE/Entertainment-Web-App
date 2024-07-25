import Header from "../component/Header";
import Search from "../component/Search";
export default function Home() {
  return (
    <div className="bg-custom-black flex justify-center items-center min-h-screen flex-col w-screen ">
      <Header />
      <Search />
    </div>
  );
}
