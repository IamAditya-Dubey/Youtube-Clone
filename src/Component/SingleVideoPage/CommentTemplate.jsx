import { useState } from "react";
import User from "../../assets/sub-2.png"
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";

export default function CommentTemplate() {
  const [isCommentLikeClick, setCommentLikeClick] = useState(false);
  const [isCommentDislikeClick, setCommentDislikeClick] = useState(false);
  return (
    <div className="flex gap-3 py-2">
      <img src={User} alt="user" className="w-[40px] h-[40px] rounded-full"/>
      <div>
        <p className="font-semibold">@username</p>
        <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate?</p>
        <div id="like-area" className="flex items-center">
            <div id="like">
              <button onClick={() => {
                setCommentDislikeClick(false);
                setCommentLikeClick((prev)=> !prev);
              }} className="flex items-center py-2 px-2 text-[16px] pr-4">{!isCommentLikeClick ? <BiLike style={{fontSize: "20px"}}/> : <BiSolidLike style={{fontSize: "20px"}}/>} <div>1M</div></button>
            </div>
            <div id="dislike">
            <button onClick={() => {
                setCommentDislikeClick((prev) => !prev);
                setCommentLikeClick(false);
              }}  className="flex items-center py-[10px] px-2 text-[18px] pr-4">{!isCommentDislikeClick ? <BiDislike  style={{fontSize: "20px"}} /> : <BiSolidDislike  style={{fontSize: "20px"}} />}</button>
            </div>
            </div>
      </div>
    </div>
  )
}