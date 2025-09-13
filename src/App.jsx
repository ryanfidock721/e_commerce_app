import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {supabase} from './client'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  async function fetchProducts() {
    const { data } = await supabase
      .from('Products')
      .select()
    setProducts(data)
  }
  console.log(products)
  console.log('Product:', products[0]?.name)
    console.log('Price:', products[0]?.price)
  console.log(products[1]?.name)
  console.log(products[2]?.name)




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fetchProducts}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
