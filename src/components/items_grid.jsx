import { useState, useEffect } from 'react'
import {supabase} from '../client'

export function ItemsGrid() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('Products')
        .select()

      if (error) {
        console.error(error)
        return
      }

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 mt-4'>
      {products.map(product => (
        <div key={product.id} className='border p-4 rounded'>
          <h2 className='text-lg font-bold'>{product.name}</h2>
          <p className='text-gray-600'>${product.price}</p>
        </div>
      ))}
    </div>
  )
}
