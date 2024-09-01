import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../Store/store";
import { useParams } from "react-router-dom";
import { BiLike, BiDislike  } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike  } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import Poster from "../../assets/thumbnai.jpg"
import User from "../../assets/sub-1.png"

function SingleVideoPage() {
  let {videoId} = useParams()
  let {asideCollapse, setAsideCollapse} = useContext(SiteContext);
  const [isLikeClick, setLikeClick] = useState(false);
  const [isDislikeClick, setDislikeClick] = useState(false);

  useEffect(()=> {
    setAsideCollapse(true)},
    []
  )

  return (
    <div className={`duration-300 flex py-4 gap-5 justify-center px-3 2xl:px-0 w-100% h-auto ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      <div id="videoArea" className=" w-[50%] 2xl:max-w-[45%]">
        <img className="rounded-2xl w-[100%]" src={Poster} alt="poster"/>
        <h3 className="py-3 text-xl font-bold">C++ Course launch | Chai aur C++</h3>
        <div id="channel-info-and-like-area" className="flex items-center justify-between flex-wrap">
          <div id="channel-info-area" className="flex items-center">
            <img src={User} className="rounded-full !h-[42px] !w-[42px]" alt="channel" />
            <div className="self-center pl-2">
              <h3 className="font-sans font-semibold overflow-ellipsis mb-[-2px]">Sur Sarita</h3>
              <p className="font-sans overflow-ellipsis text-[12px]">398M subscribers</p>
            </div>
            <button className="rounded-3xl ml-4 bg-black py-2 px-4 text-white text-[14px]">Subscribe</button>
          </div>
          <div id="like-area" className="flex items-center">
            <div id="dislike">
              <button onClick={() => {
                setDislikeClick(false);
                setLikeClick((prev)=> !prev);
              }} className="flex items-center bg-[#0000000c] py-2 px-2 text-[16px] pr-4 rounded-tl-[20px] rounded-bl-[20px]">{!isLikeClick ? <BiLike style={{fontSize: "20px"}}/> : <BiSolidLike style={{fontSize: "20px"}}/>} <div>1M</div></button>
            </div>
            <div id="dislike">
            <button onClick={() => {
                setDislikeClick((prev) => !prev);
                setLikeClick(false);
              }}  className="flex items-center border-l-[1px] bg-[#0000000c] py-[10px] px-2 text-[18px] pr-4 rounded-tr-[20px] rounded-br-[20px]">{!isDislikeClick ? <BiDislike  style={{fontSize: "20px"}} /> : <BiSolidDislike  style={{fontSize: "20px"}} />}</button>
            </div>
            <div id="More">
            <button className="flex items-center border-l-[1px] bg-[#0000000c] p-[10px] text-[18px] rounded-full ml-3"><HiDotsHorizontal  style={{fontSize: "20px"}} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] 2xl:max-w-[20%] bg-slate-950">Text</div>
    </div>
  )
}

export default SingleVideoPage;