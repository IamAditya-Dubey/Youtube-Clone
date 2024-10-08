import moment from "moment"
import { valueConverter } from "../../../Store/store"
import { Link } from "react-router-dom"

export default function VideoType2({video}) {
  return (
    <div className="flex gap-2 py-2">
    <Link to={`/watch/${video.id}`} className="w-[40%] h-[100%]"><img src={video.snippet.thumbnails.medium.url} alt="poster" className="w-[100%] rounded-lg"/></Link>
    <div className="w-[73%]">
    <Link to={`/watch/${video.id}`}><h3 id="sidebarVideoTitle" className="text-[14px] overflow-hidden text-ellipsis line-clamp-2">
    {video.snippet.title}
      </h3></Link>
      <p id="channelSideName" className="text-[13px] text-[#606060] pt-2">
        {video.snippet.channelTitle}
      </p>
      <p className="text-[#606060] text-[13px]"><span>{valueConverter(video.statistics.viewCount)} views</span> &bull; <span>{moment(video.snippet.publishedAt).fromNow()}</span></p>
    </div>
    </div>
  )
}