import 'regenerator-runtime/runtime'
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import SiteContextProvider from "./Store/store";
import { useSpeechRecognition } from 'react-speech-recognition'

function App() {

  const {
    transcript,
    listening
  } = useSpeechRecognition();

  return (
    <SiteContextProvider>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
      {listening && <div id="voiceContainer" className="w-[80vw] h-[60vh] bg-[#f7f7f7] shadow-2xl rounded-lg z-[9999] fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex justify-center items-center text-2xl">
        {transcript}
      </div>}
    </SiteContextProvider>
  );
}

export default App;
