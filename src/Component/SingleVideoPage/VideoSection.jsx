import ChannelInfo from "./ChannelInfo";
import VideoComments from "./VideoComments";
import VideoDescription from "./VideoDescription";

export default function VideoSection({videoId}) {
  return (
    <> 
    <div id="videoArea" className=" w-[90%] md:w-[55%] 2xl:max-w-[45%]">
        <iframe className="rounded-2xl w-[100%] h-[15%] max-h-400px min-h-200px" src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 className="py-3 text-xl font-bold">C++ Course launch | Chai aur C++</h3>
        <ChannelInfo />
        <VideoDescription />
        <VideoComments />
      </div>
    </>
  )
}