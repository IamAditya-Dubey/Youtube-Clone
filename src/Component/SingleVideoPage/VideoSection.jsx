import ChannelInfo from "./ChannelInfo";
import VideoComments from "./VideoComments";
import VideoDescription from "./VideoDescription";
import {useState, useEffect} from "react"
import {API_KEY} from "../../../secret.js"

export default function VideoSection({videoId}) {
  
    const [videoData, setVideoData] = useState([]);
  
useEffect(()=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {console.log(videoData); setVideoData(data.items[0])})
}, [videoId])
  
  return (
    <> 
    <div id="videoArea" className=" w-[90%] md:w-[55%] 2xl:max-w-[45%]">
        <iframe className="rounded-2xl w-[100%] h-[15%] max-h-400px min-h-200px" src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3 className="py-3 text-xl font-bold">{videoData.snippet.title}+</h3>
        <ChannelInfo />
        <VideoDescription />
        <VideoComments />
      </div>
    </>
  )
}