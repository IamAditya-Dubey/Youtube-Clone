import { useContext, useEffect, useState } from "react"
import { SiteContext } from "../../Store/store"
import Cloud from "../Videos/CategoryCloud/Cloud";
import SearchSingleVideo from "./SearchSingleVideo"
import { useParams } from "react-router-dom";
import { API_KEY } from "../../../secret";
import ChannelSearch from "./ChannelSearch";
import FetchLoader from "../FetchLoader/FetchLoader";

export default function SearchPage() {

  let {query} = useParams();
  const [SearchVideo, setSearchVideo] = useState('');
  let {asideCollapse, setAsideCollapse} = useContext(SiteContext);
  const [searchFetch, setSearchFetch] = useState(false);

  const fetchSearchVideo = async() => {
    setSearchFetch(true)
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query.replaceAll("+", " ")}&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => setSearchVideo(data.items))
    setSearchFetch(false)
  }

  useEffect(()=> {
    fetchSearchVideo()
  },[query])

  useEffect(()=> {
    setAsideCollapse(false)},
    []
  )

  return (
    <>
    <div className={`flex-row py-4 flex-wrap duration-300 ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      <Cloud></Cloud>
      {!searchFetch && <div className="pt-8">
        {SearchVideo ? SearchVideo.map(video => {
          if(video.id.kind === "youtube#channel") {
            return <ChannelSearch key={video.id.channelId} content={video.snippet} video={video}/>
          } else if(video.id.kind === "youtube#video")
          return <SearchSingleVideo key={video.id.videoId} content={video.snippet} video={video}/>
          }) : <SearchSingleVideo />}
      </div>}
      {searchFetch && <FetchLoader />}
    </div>
    </>
  )
}