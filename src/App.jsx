import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import SiteContextProvider from "./Store/store";

function App() {
  return (
    <SiteContextProvider>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </SiteContextProvider>
  );
}

export default App;
