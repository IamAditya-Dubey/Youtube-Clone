import { useState } from "react"

export default function ChannelSearch({content}) {

  const [isSubscribed, setSubscribed] = useState(false);

  return (
    <div id="channel-info-area" className="flex items-center py-3 justify-between w-[70%] lg:w-[60%] 2xl:w-[40%] gap-3">
            <img src={content.thumbnails.medium.url} className="rounded-full !h-[110px] !w-[110px]" alt="channel" />
            <div className="self-center pl-2 w-[70%]">
              <h3 className="font-sans font-semibold overflow-ellipsis mb-[-2px] pb-1 text-[18px]">{content.channelTitle}</h3>
              <p className="font-sans overflow-ellipsis text-[13px] line-clamp-2">{content.description}</p>
            </div>
            <button onClick={() => setSubscribed(prev => !prev)} style={isSubscribed ? {backgroundColor: "rgba(0, 0, 0, 0.1)", color: "black", border: "1px solid rgba(0, 0, 0, 0.12)"} : {backgroundColor: "black", color: "white"}} className="rounded-3xl ml-4 py-2 px-4 text-[14px]">{isSubscribed ? "Subscribed" : "Subscribe"}</button>
          </div>
  )
}