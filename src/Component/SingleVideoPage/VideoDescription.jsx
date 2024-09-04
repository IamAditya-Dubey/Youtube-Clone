import { useCallback, useState } from "react"
import {valueConverter} from "../../Store/store.jsx"
import moment from "moment"

export default function VideoDescription({content, view}) {

  let [descriptionOpen, setDescriptionOpen] = useState(false);
  
  const descriptionToggle = useCallback(() => {
    if(!descriptionOpen) {
      setDescriptionOpen(true)
    } else if(descriptionOpen) {
      setDescriptionOpen(false)
    }
  }, [descriptionOpen])

  return (
    <div className="my-5 p-3 bg-[#00000010] rounded-2xl">
      <div className="views-period text-[14px] font-semibold font-serif pb-1">
        <span>{view? valueConverter(view) : 600} views </span><span className="ml-1"> {content? moment(content.publishedAt).fromNow(): "1 day ago"}</span>
      </div>
      <div className={`description text-[15px] ${descriptionOpen ? "" : "line-clamp-2"}`}>
      {content?content.description : "description"}
      </div>
      <div id="more" className="font-semibold cursor-pointer" onClick={descriptionToggle}>{descriptionOpen ? "Show less" : "...more"}</div>
    </div>
  )
}