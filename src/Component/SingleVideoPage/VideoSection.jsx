import ChannelInfo from "./ChannelInfo";
import VideoComments from "./VideoComments";
import VideoDescription from "./VideoDescription";

export default function VideoSection({videoId, videoData}) {
  

  
  return (
    <> 
    <div id="videoArea" className=" w-[90%] md:w-[55%] 2xl:max-w-[45%]">
        <iframe className="rounded-2xl w-[100%] h-[50vw] md:h-[30vw] max-h-400px min-h-200px" src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3 className="py-3 text-xl font-bold">{videoData?videoData.snippet.title : "Title Here"}</h3>
        <ChannelInfo channelId={videoData?videoData.snippet.channelId : null} like={videoData?videoData.statistics.likeCount: 0}/>
        <VideoDescription content={videoData ? videoData.snippet : null} view={videoData?videoData.statistics.viewCount: null}/>
        <VideoComments commentCount={videoData?videoData.statistics.commentCount: null} singleVideoId={videoId}/>
      </div>
    </>
  )
}