// App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { ItemsGrid } from './components/items_grid'
import { Admin_Page } from './components/admin'
import { About } from './components/about'
import { Pagination } from './components/pagination'
import { Sidebar } from './components/sidebar'


function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  return (
    <Router>
      <Header />
      <Nav setIsSidebarOpen={setIsSidebarOpen} />

      {loading && (
        <div id='loading' className='flex justify-center mt-10'>
          <l-square size='60' color="lime"></l-square>
        </div>
      )}

      <div className='flex flex-row'>
        <Routes>
          <Route path="/" element={<ItemsGrid currentPage={currentPage} setLoading={setLoading} setCart={setCart} />} />
          <Route path="/admin" element={<Admin_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/items_grid" element={

            <div>
              <ItemsGrid currentPage={currentPage} />
              <Pagination setCurrentPage={setCurrentPage} />
            </div>

            } />
          <Route path="/pagination" element={<Pagination setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Sidebar isSidebarOpen={isSidebarOpen} cart={cart} />
        </div>
      

    </Router>
  )
}

export default App
