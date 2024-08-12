import Logo from "/assets/logo.svg";
import Avatar from "/assets/image-avatar.png";
import homeIcon from "/assets/icon-nav-home.svg";
import homeIconWhite from "/assets/icon-nav-home-white.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import movieIconWhite from "/assets/icon-nav-movies-white.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import tvIconWhite from "/assets/icon-nav-tv-white.svg";
import bookmarkIcon from "/assets/icon-nav-bookmark.svg";
import bookmarkIconWhite from "/assets/icon-nav-bookmarkWhite.svg";
import { useData } from "../App";
export default function Header() {
  const { home, movie, tv, marked, setMarked, setHome, setMovie, setTv } =
    useData();

  return (
    <div className="bg-custom-blue flex  justify-between items-center w-full p-[16px]">
      <img className="w-[30px] h-[30px]" src={Logo} alt="Logo" />
      <div className="flex gap-[40px]">
        <img
          className="w-[30px] h-[30px]  hover:cursor-pointer"
          src={home ? homeIconWhite : homeIcon}
          alt="home-icon"
          onClick={() => {
            setHome(true);
            setMovie(false);
            setTv(false);
            setMarked(false);
          }}
        />
        <img
          className="w-[30px] h-[30px]  hover:cursor-pointer"
          src={movie ? movieIconWhite : movieIcon}
          alt="movie-icon"
          onClick={() => {
            setHome(false);
            setMovie(true);
            setTv(false);
            setMarked(false);
          }}
        />
        <img
          className="w-[30px] h-[30px] hover:cursor-pointer"
          src={tv ? tvIconWhite : tvIcon}
          alt="tv-icon"
          onClick={() => {
            setHome(false);
            setMovie(false);
            setTv(true);
            setMarked(false);
          }}
        />
        <img
          className="w-[30px] h-[30px]  hover:cursor-pointer"
          src={marked ? bookmarkIconWhite : bookmarkIcon}
          alt="bookmarkIcon"
          onClick={() => {
            setHome(false);
            setMovie(false);
            setTv(false);
            setMarked(true);
          }}
        />
      </div>
      <img className="w-[35px] h-[35px]" src={Avatar} alt="Avatar" />
    </div>
  );
}
