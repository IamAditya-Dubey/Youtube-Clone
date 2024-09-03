import Logo from "../../assets/logo.png";
import Upload from "../../assets/upload.png"
import Explore from "../../assets/explore.png"
import Notification from "../../assets/notification.png"
import User1 from "../../assets/sub-1.png"
import {Link} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import css from "./Header.module.css"
import { useContext } from "react";
import { SiteContext } from "../../Store/store";

function Header() {

  let {setSidebarOpen, isSidebarOpen, asideCollapse, setAsideCollapse} = useContext(SiteContext)

  return (
    <nav id={`${css.navigation}`}>
      <div className={`${css.logoArea}`}>
        <div className={css.menuIcon}><RxHamburgerMenu style={{fontSize: "25px"}} onClick={() => {
          if(isSidebarOpen) {
            setSidebarOpen(false)
          } else if(!isSidebarOpen){
            setSidebarOpen(true)
          } if(asideCollapse) {
            setAsideCollapse(false)
          } else if(!asideCollapse) {
            setAsideCollapse(true)
          }

        }}/></div>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
      </div>
      <div className={`${css.middleArea}`}>
      <div className={`${css.searchBar}`}>
        <input type="text" placeholder="Search"/>
        <div className="md:py-[7px] md:pr-4 md:pl-6 md:bg-gray-50 md:border-l-[1px] md:border-gray-200 md:rounded-r-3xl">
          <CiSearch className={css.searchIcon} />
        </div>
        </div>
        <div>
        <IoMdMic className={css.micIcon} />
      </div>
      </div>
      <div className={`${css.rightArea}`}>
        <div className={css.extraIcons}><img src={Upload} alt="upload" /></div>
        <div className={css.extraIcons}><img src={Explore} alt="explore" /></div>
        <div className={css.extraIcons}><img src={Notification} alt="notification" /></div>
        <div><img className={css.avatarImg} style={{width: "35px", height:"35px"}} src={User1} alt="user" /></div>
      </div>
    </nav>
  );
}

export default Header;
