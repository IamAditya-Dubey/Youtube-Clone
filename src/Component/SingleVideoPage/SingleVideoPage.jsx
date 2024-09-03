import { useContext, useEffect } from "react";
import { SiteContext } from "../../Store/store";
import { useParams } from "react-router-dom";
import RelSideBar from "./Sidebar/RelSidebar";
import VideoSection from "./VideoSection";

function SingleVideoPage() {
  let {videoId} = useParams()
  let {asideCollapse, setAsideCollapse} = useContext(SiteContext);

  useEffect(()=> {
    setAsideCollapse(true)},
    []
  )

  return (
    <div className={`duration-300 flex flex-wrap py-4 gap-5 justify-center px-3 2xl:px-0 w-100% h-auto ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      <VideoSection videoId={videoId} />
      <RelSideBar />
    </div>
  )
}

export default SingleVideoPage;