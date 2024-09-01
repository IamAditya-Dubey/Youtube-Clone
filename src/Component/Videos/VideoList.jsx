import { useContext, useEffect, useState } from "react";
import Cloud from "./CategoryCloud/Cloud";
import Video from "./Video/Video";
import { SiteContext } from "../../Store/store";
import css from "./VideoList.module.css"
import { API_KEY } from "../../../secret"
import FetchLoader from "../FetchLoader/FetchLoader"

function VideoList() {
  let {asideCollapse, setAsideCollapse, categoryId, setFeedData, feedData} = useContext(SiteContext);
  let [isFetching, setIsFetching] = useState(false);

  useEffect(()=> {
    setAsideCollapse(false)},
    []
  )

  useEffect(() => {
    setIsFetching(true)
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`)
    .then((res) => 
      { return res.json()}
    )
    .then((data) => {setFeedData(data.items); setIsFetching(false)})
  }, [categoryId])

  return (
    <div className={`flex-row py-4 flex-wrap duration-300 ${!asideCollapse ? "ContainerWidth" : "ContainerWidthCollapsed"}`}>
      <Cloud></Cloud>
      <div className={`${css.VideoFeed} pt-8`}>
        {feedData && !isFetching && feedData.map((feed) => <Video key={feed.id} feed={feed}></Video>)}
        {feedData && isFetching && <FetchLoader />}
        {!feedData && <h2>Nothing to show...</h2>}
      </div>
    </div>
  );
}

export default VideoList;