import './App.css'
import { Route, Routes } from "react-router-dom"
import { LandingPage, FeedPage, VideoDetailPage, ChannelDetailPage, SearchFeed } from './pages'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/feed' element={<FeedPage/>} />
        <Route path='/feed/search/:searchItem' element={<SearchFeed/>}/>
        <Route path='/feed/video/:id' element={ <VideoDetailPage/> } />
        <Route path='/feed/channel/:id' element={<ChannelDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App