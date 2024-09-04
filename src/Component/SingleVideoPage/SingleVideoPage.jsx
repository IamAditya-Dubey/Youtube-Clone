import { useCallback, useContext, useEffect, useState } from "react";
import { SiteContext } from "../../Store/store";
import { useParams } from "react-router-dom";
import RelSideBar from "./Sidebar/RelSidebar";
import VideoSection from "./VideoSection";
import {API_KEY} from "../../../secret.js"

function SingleVideoPage() {
  let {videoId} = useParams()
  let {asideCollapse, setAsideCollapse} = useContext(SiteContext);
  const [videoData, setVideoData] = useState("");

  useEffect(()=> {
    setAsideCollapse(true)
    window.scrollTo(0, 0)
  },
    []
  )
    
  const videoContentFetch = useCallback( async() => {
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => setVideoData(data.items[0]))
  }, [videoId])

useEffect(()=>{
videoContentFetch()
}, [videoId])

  return (
    <div className={`duration-300 flex flex-wrap py-4 gap-5 justify-center px-3 2xl:px-0 w-100% h-auto ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      <VideoSection videoId={videoId} videoData={videoData} />
      <RelSideBar catId={videoData ? videoData.snippet.categoryId : 24} />
    </div>
  )
}

export default SingleVideoPage;