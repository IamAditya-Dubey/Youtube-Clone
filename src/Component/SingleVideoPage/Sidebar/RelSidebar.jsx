import { useEffect, useState } from "react";
import VideoType2 from "./VideoType2";
import { API_KEY } from "../../../../secret";
import FetchLoader from "../../FetchLoader/FetchLoader";

function RelSideBar({catId}) {
  let [relVideo, setRelVideo] = useState('');
  let [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true)
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${catId}&key=${API_KEY}`)
    .then((res) => 
      { return res.json()}
    )
    .then((data) => {setRelVideo(data.items); setIsFetching(false)})
  }, [catId])

  return (
    <div className="flex-row w-[90%] md:w-[35%] 2xl:max-w-[20%] md:mt-0 mt-[95px]">
      {relVideo && !isFetching && relVideo.map((video) => <VideoType2 key={video.id} video={video} />)}
        {relVideo && isFetching && <FetchLoader />}
        {!relVideo && <center><h2>Nothing to show...</h2></center>}
    </div>
  )
}

export default RelSideBar;