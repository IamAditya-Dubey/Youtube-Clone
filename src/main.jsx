import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import './index.css'
import VideoList from './Component/Videos/VideoList.jsx'
import SingleVideoPage from './Component/SingleVideoPage/SingleVideoPage.jsx'
import SearchPage from './Component/Search Page/SearchPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<VideoList />} />
      <Route path='watch/:videoId' element={<SingleVideoPage />}/>
      <Route path='results/:query' element={<SearchPage />}/>
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
