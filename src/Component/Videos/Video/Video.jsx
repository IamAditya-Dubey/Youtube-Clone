import moment from "moment"
import { valueConverter } from "../../../Store/store";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../../secret";
import { Link } from "react-router-dom";

function Video({feed}) {

  const [channelDp, setChannelDp] = useState('')

  // const getChannelDp = (channelId) => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
  // .then((res) => res.json())
  // .then((data) => setChannelDp(data.items[0].snippet.thumbnails.medium.url))
  // }

  // useEffect(()=> {
  //   getChannelDp(feed.snippet.channelId);
  // }, [])

  return (
    <div className="singleVideo w-auto pt-2 pb-1">
      <Link to={`/watch/${feed.id}`}><img className="w-[100%] rounded-xl" src={feed.snippet.thumbnails.medium.url} alt="img" /></Link>
      <div id="videoTitleArea" className="py-2 flex gap-3">
        {channelDp && <img className="w-[40px] h-[40px] rounded-full self-start mt-[2px]" src={channelDp} alt="logo" />}
        <div id="videoTextArea">
        <Link to={`/watch/${feed.id}`}><h3 className="font-[550] text-[1.1rem] text-[#0f0f0f] line-clamp-2 text-ellipsis md:text-[0.9rem]">{feed.snippet.title}</h3></Link>
        <p className="text-[#606060] overflow-ellipsis md:text-[0.85rem]">{feed.snippet.channelTitle}</p>
        <p className="text-[#606060] overflow-ellipsis md:text-[0.85rem]">{valueConverter(feed.statistics.viewCount)} views &bull; {moment(feed.snippet.publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  )
}

export default Video;