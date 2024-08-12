import Logo from "/assets/logo.svg";
import Avatar from "/assets/image-avatar.png";
import homeIcon from "/assets/icon-nav-home.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import bookmarkIcon from "/assets/icon-nav-bookmark.svg";
import { useData } from "../App";
export default function Header() {
  const { setHome, setMovie, setTv } = useData();

  return (
    <div className="bg-custom-blue flex  justify-between items-center w-full p-[16px]">
      <img className="w-[30px] h-[30px]" src={Logo} alt="Logo" />
      <div className="flex gap-[40px]">
        <img
          className="w-[30px] h-[30px]"
          src={homeIcon}
          alt="home-icon"
          onClick={() => {
            setHome(true);
            setMovie(false);
            setTv(false);
          }}
        />
        <img
          className="w-[30px] h-[30px]"
          src={movieIcon}
          alt="movie-icon"
          onClick={() => {
            setHome(false);
            setMovie(true);
            setTv(false);
          }}
        />
        <img
          className="w-[30px] h-[30px]"
          src={tvIcon}
          alt="tv-icon"
          onClick={() => {
            setHome(false);
            setMovie(false);
            setTv(true);
          }}
        />
        <img
          className="w-[30px] h-[30px]"
          src={bookmarkIcon}
          alt="bookmarkIcon"
          onClick={() => {
            setHome(false);
            setMovie(false);
            setTv(false);
          }}
        />
      </div>
      <img className="w-[35px] h-[35px]" src={Avatar} alt="Avatar" />
    </div>
  );
}
