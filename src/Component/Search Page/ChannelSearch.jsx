import User from "../../assets/user.jpg"

export default function ChannelSearch({content}) {
  return (
    <div id="channel-info-area" className="flex items-center py-3 justify-between w-[70%] lg:w-[60%] 2xl:w-[40%] gap-3">
            <img src={content.thumbnails.medium.url} className="rounded-full !h-[110px] !w-[110px]" alt="channel" />
            <div className="self-center pl-2 w-[70%]">
              <h3 className="font-sans font-semibold overflow-ellipsis mb-[-2px] pb-1 text-[18px]">{content.channelTitle}</h3>
              <p className="font-sans overflow-ellipsis text-[13px] line-clamp-2">{content.description}</p>
            </div>
            <button className="rounded-3xl ml-4 bg-black py-2 px-4 text-white text-[14px]">Subscribe</button>
          </div>
  )
}