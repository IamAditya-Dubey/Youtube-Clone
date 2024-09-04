import { useState } from "react";
import User from "../../assets/user.jpg"
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";

export default function CommentTemplate({commentContent}) {
  const [isCommentLikeClick, setCommentLikeClick] = useState(false);
  const [isCommentDislikeClick, setCommentDislikeClick] = useState(false);
  return (
    <div className="flex gap-3 py-2">
      <img src={commentContent ? commentContent.authorProfileImageUrl : User} alt="user" className="w-[40px] h-[40px] rounded-full"/>
      <div>
        <p className="font-semibold">{commentContent ? commentContent.authorDisplayName : "@user"}</p>
        <p className="mt-1">{commentContent ? commentContent.textOriginal : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut ratione odio ut. Quisquam, dolores ratione voluptatibus cumque error recusandae?"}</p> 
        <div id="like-area" className="flex items-center">
            <div id="like">
              <button onClick={() => {
                setCommentDislikeClick(false);
                setCommentLikeClick((prev)=> !prev);
              }} className="flex items-center py-2 px-2 text-[16px] pr-4">{!isCommentLikeClick ? <BiLike style={{fontSize: "20px"}}/> : <BiSolidLike style={{fontSize: "20px"}}/>} <div>{commentContent ? commentContent.likeCount : "1M"}</div></button>
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