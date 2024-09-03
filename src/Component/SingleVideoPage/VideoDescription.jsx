import { useCallback, useState } from "react"

export default function VideoDescription() {

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
        <span>23M views </span><span className="ml-1"> 3 days ago</span>
      </div>
      <div className={`description text-[15px] ${descriptionOpen ? "" : "line-clamp-2"}`}>
      Welcome to chai aur code, a coding/programming dedicated channel in Hindi language. Now you can learn best of programming concepts with industry standard practical guide in Hindi language.<br /><br />
      All source code is available at my Github account:<br />
      https://github.com/hiteshchoudhary
      </div>
      <div id="more" className="font-semibold cursor-pointer" onClick={descriptionToggle}>{descriptionOpen ? "Show less" : "...more"}</div>
    </div>
  )
}