import { ShoppingBasket } from 'lucide-react'

export function Sidebar({ isSidebarOpen }) {
  if (!isSidebarOpen) return null;

  return (
    <div className="relative right-0 top-0 h-full w-64 bg-white border-l shadow-sm">
      <div className="p-4 pt-0 pb-2 flex flex-col justify-center items-center">
        <h2 className="text-xl text-lime-400 text-black font-bold border-b border-zinc-400 p-2">Shopping Cart</h2>

        <div className='border-b border-zinc-400'>

          <div className='flex flex-row'>
            <h3 className='text-black p-1'>Item 1 x 4:</h3>
              <p className='text-black p-1'>$10</p>
          </div>

          <div className='flex flex-row'>
            <h3 className='text-black p-1'>Item 2 x 4:</h3>
              <p className='text-black p-1'>$34</p>
          </div>

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
