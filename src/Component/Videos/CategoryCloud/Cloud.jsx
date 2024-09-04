import { useContext } from "react"
import css from "./Cloud.module.css"
import { SiteContext } from "../../../Store/store"
import { Link } from "react-router-dom";

function Cloud() {

  let {categoryId, setCategoryId} = useContext(SiteContext);

  return (
    <div className={css.cloudMain}>
    <div id="cloud-chipset" className={`flex gap-4 whitespace-nowrap overflow-x-scroll ${css.cloudAllItems}`}>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===0) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(0)
      }}>All</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===10) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(10)
      }}>Music</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===2) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(2)
      }}>Automobile</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===20) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(20)
      }}>Gaming</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===22) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(22)
      }}>Beauty</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===25) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(25)
      }}>Online Courses</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===33) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(33)
      }}>Earning Tips</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===25) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(25)
      }}>News</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===27) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(27)
      }}>Sports</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===26) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(26)
      }}>Cooking</div></Link>
    <Link to="/"><div className={`px-4 py-1 bg-black bg-opacity-10 rounded-[8px] cursor-pointer ${(categoryId===22) ? "cloud-active" : ""}`} onClick={() => {
        setCategoryId(22)
      }}>People & Blog</div></Link>
    </div>
    </div>
  )
}

export default Cloud;