// ItemsGrid.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { ShoppingBasket } from 'lucide-react'
import { Modal } from './modal'
import 'ldrs/square'

export function ItemsGrid({ currentPage, setLoading, setCart }) {
  const [products, setProducts] = useState([])
  const postsPerPage = 12
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const { data, error } = await supabase.from('Products').select()
        if (error) throw error
        setProducts(data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = products.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-4 gap-4 m-25 mt-4 p-10 w-full max-w-7xl'>
          {currentPosts.map(product => (
            <div key={product.id} className='border p-4 rounded w-full max-w-sm bg-white shadow transition-transform duration-200 hover:scale-105 cursor-pointer'>
              <img src={product.image_url} alt={product.name} onClick={() => setSelected(product)} className='w-full h-48 object-cover mb-4 rounded-sm' />
              <h2 className='text-center text-md text-zinc-600 font-bold'>{product.name}</h2>
              <p className='text-center text-lg font-bold text-neutral-900'>${product.price}</p>
              <button onClick={() => setCart(prevCart => [...prevCart, product])} className='hover:cursor-pointer active:bg-lime-800 flex justify-center items-center w-full max-w-md p-1 rounded-md bg-lime-500'>
                <ShoppingBasket color='black' strokeWidth={1.25} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <img src={selected.image_url} alt={selected.name} className='mx-auto h-full max-h-100 object-cover mb-4 rounded-sm' />
            <div className='p-2 flex flex-row gap-2 place-content-around'>
              <p className='text-black'>Rated {selected.rating}/5!</p>
            </div>
            <div className='p-2 flex flex-row gap-2 place-content-around'>
              <h2 className='text-center text-2xl text-zinc-600 font-bold'>{selected.name}</h2>
              <p className='text-center text-2xl font-bold text-neutral-900'>£{selected.price}</p>
            </div>

            <p className='text-black p-2 ml-11 mr-11'>{selected.description}</p>

            <div className='justify-center items-center flex p-2'>
              <button className='hover:cursor-pointer active:bg-lime-800 flex justify-center items-center w-full max-w-sm p-1 rounded-md bg-lime-500'>
                <ShoppingBasket color='black' strokeWidth={1.25} />
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
