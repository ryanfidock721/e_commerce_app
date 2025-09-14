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
    <div className='grid grid-cols-4 gap-4 mt-4 m-20'>
      {products.map(product => (
        <div key={product.id} className='border p-4 rounded'>
          <img src={product.image_url} alt={product.name} className='w-full h-48 object-cover mb-4' />
          <h2 className='text-lg font-bold'>{product.name}</h2>
          <p className='text-gray-600'>${product.price}</p>
        </div>
      ))}
    </div>
  )
}
