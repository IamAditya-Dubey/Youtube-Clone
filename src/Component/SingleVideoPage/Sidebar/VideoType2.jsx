import Poster from "../../../assets/thumbnai.jpg"

export default function VideoType2() {
  return (
    <div className="flex gap-2 py-2">
    <img src={Poster} alt="poster" className="w-[40%] rounded-lg"/>
    <div className="w-[73%]">
      <h3 id="sidebarVideoTitle" className="text-[14px]">
    Going indepth of Hello World! | Learning C++
      </h3>
      <p id="channelSideName" className="text-[13px] text-[#606060] pt-2">
        Sur Sarita
      </p>
      <p className="text-[#606060] text-[13px]"><span>12M views</span> &bull; <span>3 days ago</span></p>
    </div>
    </div>
  )
}