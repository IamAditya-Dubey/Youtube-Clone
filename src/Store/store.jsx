import { createContext, useRef, useState } from "react";


export const SiteContext = createContext({
  isSidebarOpen: false,
});

export default function SiteContextProvider({children}) {
  let [ isSidebarOpen, setSidebarOpen ] = useState('')
  let [asideCollapse, setAsideCollapse] = useState(true)
  let [categoryId, setCategoryId] = useState(0)
  let [feedData, setFeedData] = useState([])
  const searchValue = useRef();
  return <SiteContext.Provider value={{isSidebarOpen, setSidebarOpen, asideCollapse, setAsideCollapse, categoryId, setCategoryId, feedData, setFeedData, searchValue}}>{children}</SiteContext.Provider>
}

export const valueConverter = (value) => {
 if(value >= 1000 && value <= 1000000) {
  return Math.floor(value/1000) + "K";
 } else if(value >= 1000000) {
  return (value/1000000).toFixed(2) + "M";
 } else {
  return value;
 }
}