import { ShoppingBasket } from 'lucide-react'

export function Sidebar({ isSidebarOpen, cart }) {
  if (!isSidebarOpen) return null;

  console.log('cart currently:', cart);

  return (
    <div className="relative right-0 top-0 h-full w-64 bg-white border-l shadow-sm">
      <div className="p-4 pt-0 pb-2 flex flex-col justify-center items-center">
        <h2 className="text-xl text-lime-400 text-black font-bold border-b border-zinc-400 p-2">Shopping Cart</h2>

        <div className='border-b border-zinc-400'>

          {cart.map(product => (
            <div key={product.id} className="p-2 relative right-0 top-0 h-full w-64 bg-white shadow-sm">

              <div className='flex flex-row place-content-between'>
                <h3 className='text-black p-1'>{product.name}</h3>
                <p className='text-black p-1'>${product.price}</p>
              </div>
              
            </div>
          ))}

        </div>

        <div className='text-black p-2 mt-5 flex flex-row font-bold'>
          <h3 className='p-1 text-lime-400 text-lg'>Total:</h3>
            <p className='p-1 text-bold text-lg '>$40</p>
        </div>

        <button className='font-bold hover:cursor-pointer active:bg-lime-800 flex justify-center items-center w-full max-w-sm p-1 rounded-md bg-lime-500'>
          CHECKOUT
        </button>

      </div>

    </div>
  );
}
