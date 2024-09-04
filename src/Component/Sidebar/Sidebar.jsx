import { MdHomeFilled, MdSportsCricket } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BsFire } from "react-icons/bs";
import { IoBagHandleSharp, IoGameController } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";
import { FaClapperboard, FaNewspaper  } from "react-icons/fa6";
import { GiHanger } from "react-icons/gi";
import {Link} from "react-router-dom"
import User1 from "../../assets/sub-1.png"
import User2 from "../../assets/sub-2.png"
import User3 from "../../assets/sub-3.png"
import User4 from "../../assets/sub-4.png"
import User5 from "../../assets/sub-5.png"
import css from "./Sidebar.module.css"
import { useContext } from "react";
import { SiteContext } from "../../Store/store";

function Sidebar() {

  let {isSidebarOpen, asideCollapse, categoryId, setCategoryId} = useContext(SiteContext);

  return (
  <aside className={`${css.asideRight} ${isSidebarOpen ? css.asideOpen : ""} ${asideCollapse ? css.sideCollapse : ""}`}>
    <ul className="py-3">
      <Link to="/"><li className={`${css.menuList} ${(categoryId===0) ? "active" : ""}`} onClick={() => {
        setCategoryId(0)
      }}>
      <div className={css.menuIcon}><MdHomeFilled /></div>
      <div className={css.menuName}>Home</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===24) ? "active" : ""}`} onClick={() => {
        setCategoryId(24)
      }}>
      <div className={css.menuIcon}><SiYoutubeshorts /></div>
      <div className={css.menuName}>Shorts</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===20) ? "active" : ""}`} onClick={() => {
        setCategoryId(20)
      }}>
      <div className={css.menuIcon}><IoGameController /></div>
      <div className={css.menuName}>Gaming</div>
      </li></Link>
    </ul>
    <hr />
    <h3 className={`pl-[12px] py-4 font-semibold ${css.titleName}`}>Explore</h3>
    <ul className="pb-3">
    <Link to="/"><li className={`${css.menuList} ${(categoryId===26) ? "active" : ""}`} onClick={() => {
        setCategoryId(26)
      }}>
      <div className={css.menuIcon}><IoBagHandleSharp /></div>
      <div className={css.menuName}>Shopping</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===10) ? "active" : ""}`} onClick={() => {
        setCategoryId(10)
      }}>
      <div className={css.menuIcon}><IoMdMusicalNote /></div>
      <div className={css.menuName}>Music</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===1) ? "active" : ""}`} onClick={() => {
        setCategoryId(1)
      }}>
      <div className={css.menuIcon}><FaClapperboard /></div>
      <div className={css.menuName}>Movies</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===25) ? "active" : ""}`} onClick={() => {
        setCategoryId(25)
      }}>
      <div className={css.menuIcon}><FaNewspaper /></div>
      <div className={css.menuName}>News</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===17) ? "active" : ""}`} onClick={() => {
        setCategoryId(17)
      }}>
      <div className={css.menuIcon}><MdSportsCricket  /></div>
      <div className={css.menuName}>Sports</div>
      </li></Link>
      <Link to="/"><li className={`${css.menuList} ${(categoryId===22) ? "active" : ""}`} onClick={() => {
        setCategoryId(22)
      }}>
      <div className={css.menuIcon}><GiHanger  /></div>
      <div className={css.menuName}>People & Blogs</div>
      </li></Link>
    </ul>
    <hr />
    <h3 className={`pl-[12px] py-4 font-semibold ${css.titleName}`}>Subscriptions</h3>
    <ul>
      <li className={`${css.menuList}`}>
      <div className={css.menuIcon}><img style={{width: "25px", borderRadius: "50%"}} src={User1} alt="user" /></div>
      <div className={css.menuName}>PewDiePie</div>
      </li>
      <li className={css.menuList}>
      <div className={css.menuIcon}><img style={{width: "25px", borderRadius: "50%"}} src={User2} alt="user" /></div>
      <div className={css.menuName}>MrBeast</div>
      </li>
      <li className={css.menuList}>
      <div className={css.menuIcon}><img style={{width: "25px", borderRadius: "50%"}} src={User3} alt="user" /></div>
      <div className={css.menuName}>Justin Bieber</div>
      </li>
      <li className={`${css.menuList} ${css.active}`}>
      <div className={css.menuIcon}><img style={{width: "25px", borderRadius: "50%"}} src={User4} alt="user" /></div>
      <div className={css.menuName}>5-Minute Crafts</div>
      </li>
      <li className={css.menuList}>
      <div className={css.menuIcon}><img style={{width: "25px", borderRadius: "50%"}} src={User5} alt="user" /></div>
      <div className={css.menuName}>Nas Daily</div>
      </li>
    </ul>
    <div className="copyrightArea">
    <p className={`text-[13px] px-3 py-4 ${css.footer}`}>&copy; YouTube LLC</p>
    </div>
  </aside>
  )
}

export default Sidebar;