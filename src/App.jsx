import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorite from './components/Favorite'
import PlaceList from './components/PlaceList'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite/:placesId" element={<Favorite/>} />
          <Route path="/placelist" element={<PlaceList/>} />
          <Route path="/etc/loading" element={<Loading/>} />
          <Route path="/etc/notfound" element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default App
