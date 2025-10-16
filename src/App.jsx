import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorite from './components/Favorite'
import PlaceList from './components/PlaceList'
import Home from './components/Home'
import Loading from './components/Loading'
import NouFound from './components/NouFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="/placelist" element={<PlaceList/>} />
          <Route path="/etc/loading" element={<Loading/>} />
          <Route path="/etc/notfound" element={<NouFound/>} />
        </Routes>
    </>
  )
}

export default App
