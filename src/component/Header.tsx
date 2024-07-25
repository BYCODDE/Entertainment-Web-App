import Logo from "/assets/logo.svg";
import Avatar from "/assets/image-avatar.png";
import homeIcon from "/assets/icon-nav-home.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import bookmarkIcon from "/assets/icon-nav-bookmark.svg";
export default function Header() {
  return (
    <div className="bg-custom-blue flex  justify-between items-center w-screen p-[16px]">
      <img className="w-[30px] h-[30px]" src={Logo} alt="Logo" />
      <div className="flex gap-[40px]">
        <img className="w-[30px] h-[30px]" src={homeIcon} alt="home-icon" />
        <img className="w-[30px] h-[30px]" src={movieIcon} alt="movie-icon" />
        <img className="w-[30px] h-[30px]" src={tvIcon} alt="tv-icon" />
        <img
          className="w-[30px] h-[30px]"
          src={bookmarkIcon}
          alt="bookmarkIcon"
        />
      </div>
      <img className="w-[35px] h-[35px]" src={Avatar} alt="Avatar" />
    </div>
  );
}
