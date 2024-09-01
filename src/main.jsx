import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import './index.css'
import VideoList from './Component/Videos/VideoList.jsx'
import SingleVideoPage from './Component/SingleVideoPage/SingleVideoPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<VideoList />} />
      <Route path='watch/:videoId' element={<SingleVideoPage />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
