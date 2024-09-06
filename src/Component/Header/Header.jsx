import 'regenerator-runtime/runtime'
import Logo from "../../assets/logo.png";
import Upload from "../../assets/upload.png"
import Explore from "../../assets/explore.png"
import Notification from "../../assets/notification.png"
import User1 from "../../assets/sub-1.png"
import {Link, useNavigate} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import css from "./Header.module.css"
import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../Store/store";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import micOn from "../../assets/mic-on.mp3"
import micOff from "../../assets/mic-off.mp3"

function Header() {

  const[isSearchMob, setSearchMob] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript ,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    if(searchValue.current.value) {
    navigate(`/results/${searchValue.current.value.replaceAll(" ", "+")}`);
    window.scrollTo(0, 0);
    }
  }

  let {setSidebarOpen, isSidebarOpen, asideCollapse, setAsideCollapse, searchValue} = useContext(SiteContext)

  useEffect(() => {
    if(transcript){searchValue.current.value = transcript;}
  }, [transcript])

  const micListen = () => {
    resetTranscript();
    if(!browserSupportsSpeechRecognition) {
      alert("Browser doesn't support speech recognition")
    } else if(listening) {
      new Audio(micOff).play();
      SpeechRecognition.stopListening();
      resetTranscript();
        if(searchValue.current.value){
          new Audio(micOff).play();
          navigate(`/results/${searchValue.current.value.replaceAll(" ", "+")}`);
          window.scrollTo(0, 0);}
    } else if(!listening) {
      new Audio(micOn).play();
      SpeechRecognition.startListening();
        let searchTimer = setTimeout(()=>{
          if(searchValue.current.value){
          navigate(`/results/${searchValue.current.value.replaceAll(" ", "+")}`);
          window.scrollTo(0, 0);
          resetTranscript();
        } else {
            SpeechRecognition.stopListening();
            resetTranscript();
          }
          clearTimeout(searchTimer);
        }, 5000)
    }
  }

  return (
    <nav id={css.navigation} className={isSearchMob ? "!p-0" : ""}>
      <div className={`${css.logoArea} ${isSearchMob ? "gap-[5px] md:gap-[25px]" : "gap-[25px]"}`}>
        <div className={`${css.menuIcon} ${isSearchMob ? "md:block hidden" : ""}`}><RxHamburgerMenu style={{fontSize: "25px"}} onClick={() => {
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
        <Link to="/"><img src={Logo} alt="logo" className={isSearchMob && 'hidden md:block'}/></Link>
        <div onClick={() => {setSearchMob(false)}} className={isSearchMob ? "self-start max-w-[10px] cursor-pointer pr-[20px] text-[30px] md:hidden" : "hidden"}>&#8672;</div>
      </div>
      <div className={`${css.middleArea} ${isSearchMob && css.searchClick}`}>
      <form className={`${css.searchBar}`} onSubmit={(e) => searchSubmit(e)}>
        <input type="text" placeholder="Search" ref={searchValue}/>
        <button onClick={() => setSearchMob(true)} className="md:py-[7px] md:pr-4 md:pl-6 md:bg-gray-50 md:border-l-[1px] md:border-gray-200 md:rounded-r-3xl">
          <CiSearch className={css.searchIcon} />
        </button>
        </form>
        <div onClick={micListen}>
        <IoMdMic className={`${css.micIcon} ${isSearchMob ? css.searchClickMob : ""}`} style={{color: listening ? "red" : ""}} />
      </div>
      </div>
      <div className={`${css.rightArea}`}>
        <div className={css.extraIcons}><img src={Upload} alt="upload" /></div>
        <div className={css.extraIcons}><img src={Explore} alt="explore" /></div>
        <div className={css.extraIcons}><img src={Notification} alt="notification" /></div>
        <div><img className={`${css.avatarImg} ${isSearchMob ? "md:block hidden" : ""}`} style={{width: "35px", height:"35px"}} src={User1} alt="user" /></div>
      </div>
    </nav>
  );
}

export default Header;
