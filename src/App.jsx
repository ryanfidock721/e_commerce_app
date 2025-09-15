import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { ItemsGrid } from './components/items_grid'
import { Admin_Page } from './components/admin'
import { About } from './components/about'

function App() {
  const [products, setProducts] = useState([])



  return (
    <>
      <Router>
        
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<ItemsGrid />} />
          <Route path="/admin" element={<Admin_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/items_grid" element={<ItemsGrid />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
