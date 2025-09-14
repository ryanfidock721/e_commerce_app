import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { ItemsGrid } from './components/items_grid'

function App() {
  const [products, setProducts] = useState([])



  return (
    <>
    
      <Header />
      <Nav />
      <ItemsGrid />

    </>
  )
}

export default App
