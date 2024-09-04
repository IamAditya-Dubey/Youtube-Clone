import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import User from "../../assets/sub-1.png"
import { useState } from "react";
import { API_KEY } from "../../../secret.js"

export default function ChannelInfo() {
  const [isLikeClick, setLikeClick] = useState(false);
  const [isDislikeClick, setDislikeClick] = useState(false);
  const [Channelinfo, setChannelinfo] = useState([]);
  
  const getChannelDp = (channelId) => {
     fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
   .then((res) => res.json())
   .then((data) => setChannelinfo(data.items))
  }
  
  return (
    <>
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
            <div id="like">
              <button onClick={() => {
                setDislikeClick(false);
                setLikeClick((prev)=> !prev);
              }} className="flex items-center bg-[#00000018] py-2 px-2 text-[16px] pr-4 rounded-tl-[20px] rounded-bl-[20px]">{!isLikeClick ? <BiLike style={{fontSize: "20px"}}/> : <BiSolidLike style={{fontSize: "20px"}}/>} <div>1M</div></button>
            </div>
            <div id="dislike">
            <button onClick={() => {
                setDislikeClick((prev) => !prev);
                setLikeClick(false);
              }}  className="flex items-center border-l-[1px] border-[#0000003d] bg-[#00000018] py-[10px] px-2 text-[18px] pr-4 rounded-tr-[20px] rounded-br-[20px]">{!isDislikeClick ? <BiDislike  style={{fontSize: "20px"}} /> : <BiSolidDislike  style={{fontSize: "20px"}} />}</button>
            </div>
            <div id="More">
            <button className="flex items-center bg-[#00000018] p-[10px] text-[18px] rounded-full ml-3"><HiDotsHorizontal  style={{fontSize: "20px"}} /></button>
            </div>
          </div>
        </div>
    </>
  )
}