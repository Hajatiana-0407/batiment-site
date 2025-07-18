import './App.css'
import ArticleSingle from './components/ArticleSingle'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:id' element={<ArticleSingle />} />
      </Routes>
    </>
  )
}

export default App
