import { X } from 'lucide-react'

export function Sidebar({ isSidebarOpen, setIsSidebarOpen, cart, setCart }) {
  if (!isSidebarOpen) return null;

  let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += product.price;
    });

  console.log('cart currently:', cart);

  return (
    <>
    <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-opacity-40"></div>

    {/*Cart Title*/}
    <div className="fixed right-0 top-0 h-full w-94 bg-white overflow-y-auto">
      <div className='flex flex-col'>
        <h2 className="p-4 pt-1 bg-cover bg-gray-800 text-6xl text-lime-400 text-white font-bold">Cart</h2>
      </div>

      <div className="p-4 pt-0 pb-2 flex flex-col justify-center items-center">
        <div>

          {/*Product + Price Map */}
          {cart.map((product, i) => (
            <div key={product.id} className="p-2 relative right-0 top-0 h-full w-84 bg-white">

              <div className='hover:bg-gray-400 flex flex-row place-content-between p-2 rounded-md shadow-md border-black bg-gray-100'>
                <div className='flex flex-row p-2 items-center'>
                  <img className='w-8 h-8 rounded-md mr-3' src={product.image_url} alt={product.name}></img>
                  <h3 className='text-black p-1'>{product.name}</h3>
                </div>
                <div className='flex flex-row p-2 items-center'>
                  <p className='text-black p-1'>${product.price}</p>
                  <button onClick={() => setCart(prev => prev.toSpliced(i, 1))}>
                    <X className='cursor-pointer text-red-400 h-auto w-5'/>
                  </button>
                </div>
              </div>
              
            </div>
          ))}

        </div>

        <div className='text-black p-2 mt-5 flex flex-row font-bold'>
          <h3 className='p-1 text-lime-400 text-lg'>Total:</h3>
            <p className='p-1 text-bold text-lg '>${totalPrice}</p>
        </div>
        
        {/* Checkout Button */}
        <button className='font-bold hover:cursor-pointer active:bg-lime-800 flex justify-center items-center w-full max-w-sm p-1 rounded-md bg-lime-500'>
          CHECKOUT
        </button>

      </div>

    </div>
  </>
  );
}
