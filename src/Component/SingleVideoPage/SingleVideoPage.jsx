import { useCallback, useContext, useEffect, useState } from "react";
import { SiteContext } from "../../Store/store";
import { useParams } from "react-router-dom";
import RelSideBar from "./Sidebar/RelSidebar";
import VideoSection from "./VideoSection";
import {API_KEY} from "../../../secret.js"
import FetchLoader from "../FetchLoader/FetchLoader.jsx";

function SingleVideoPage() {
  let {videoId} = useParams()
  let {asideCollapse, setAsideCollapse, searchValue} = useContext(SiteContext);
  const [videoData, setVideoData] = useState("");
  const[videoFetching, setVideoFetching] = useState(false)

  useEffect(()=> {
    setAsideCollapse(true)
    window.scrollTo(0, 0)
    searchValue.current.value = ""
  },
    []
  )
    
  const videoContentFetch = useCallback( async() => {
    setVideoFetching(true)
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => setVideoData(data.items[0]))
  setVideoFetching(false)
  }, [videoId])

useEffect(()=>{
videoContentFetch()
}, [videoId])

  return (
    <div className={`duration-300 flex flex-wrap py-4 gap-5 justify-center px-3 2xl:px-0 w-100% h-auto ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      {!videoFetching && <><VideoSection videoId={videoId} videoData={videoData} />
      <RelSideBar catId={videoData ? videoData.snippet.categoryId : 24} /></>}
      {videoFetching && <FetchLoader />}
    </div>
  )
}

export default SingleVideoPage;