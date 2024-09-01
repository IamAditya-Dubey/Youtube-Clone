import css from "./Cloud.module.css"

function Cloud() {
  return (
    <div className={css.cloudMain}>
    <div id="cloud-chipset" className={`flex gap-4 whitespace-nowrap overflow-x-scroll ${css.cloudAllItems}`}>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer cloud-active" >All</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Music</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Automobile</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Gaming</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Beauty</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Online Courses</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Earning Tips</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >News</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Sports</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Cooking</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Cooking</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Cooking</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Cooking</div>
    <div className="px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer" >Cooking</div>
    </div>
    </div>
  )
}

export default Cloud