import { useState, useEffect } from 'react'
import {supabase} from '../client'
import { ShoppingBasket } from 'lucide-react';
import 'ldrs/square'

export function ItemsGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

 useEffect(() => {
  async function fetchProducts() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Products')
        .select();

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  fetchProducts();
}, []);

  console.log('Products array:', products)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {loading && (
        <div id='loading' className='flex justify-center mt-10'>
          <l-square size='60' color="lime"></l-square>
        </div>
      )}

        <div className='grid grid-cols-4 gap-4 mt-4 m-20 p-10'>
          {currentPosts.map(product => (
            <div key={product.id} className='border p-4 rounded w-full max-w-sm bg-white shadow rounded p-4 transition-transform duration-200 hover:scale-105'>
              <img src={product.image_url} alt={product.name} className='w-full h-48 object-cover mb-4 rounded-sm' />
              <h2 className='text-center text-md text-zinc-600 font-bold'>{product.name}</h2>
              <p className='text-center text-lg font-bold text-neutral-900'>${product.price}</p>
              <button className='hover:cursor-pointer active:bg-lime-800 flex justify-center items-center w-full max-w-3xs p-1 rounded-md bg-lime-500'>
                <ShoppingBasket color='black' strokeWidth={1.25} />
              </button>
            </div>
          ))}
        </div>

    </>
  )
}
