import './App.css'
import { Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import FeedPage from './pages/FeedPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/feed' element={<FeedPage/>} />
      </Routes>
    </div>
  )
}

export default App
