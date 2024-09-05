import moment from "moment/moment"
import Poster from "../../assets/thumbnai.jpg"
import { Link } from "react-router-dom"

export default function SearchSingleVideo({content, video}) {
  if(video) {
  return (
    <div className="flex gap-4 py-2">
    <Link to={`/watch/${video.id.videoId}`} className="w-[30%]"><img src={content ? content.thumbnails.medium.url : Poster} alt="poster" className="w-[100%] rounded-lg"/></Link>
    <div className="w-[70%] md:w-[40%]">
    <Link to={`/watch/${ video.id.videoId}`}><h3 id="sidebarVideoTitle" className="text-[13px] md:text-[17px] overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-3">
    {content ? content.title : "Title here"}
      </h3></Link>
      <p id="channelSideName" className="text-[11px] md:text-[15px] text-[#606060] py-1 md:py-2 lg:py-3">
        {content ? content.channelTitle : "channel"}
      </p>
      <p className="text-[#606060] text-[11px] md:text-[15px]"><span>{content ? moment(content.publishedAt).fromNow() : "1 day ago"}</span></p>
    </div>
    </div>
  )} else {
    return (
      <center><h3>Nothing to Show</h3></center>
    )
  }
}