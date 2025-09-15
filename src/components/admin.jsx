import {supabase} from '../client'

export function Admin_Page() {
    
    async function saveNewProduct() {
        const { data, error } = await supabase
            .from('Products')
            .insert([
    { name: 'Microwave', price: 50 }
  ]);
      console.log('Product saved!')

    }

    return (
        <div className='flex justify-center p-10 m-10'>
            <div className='p-5'>
                <div className='flex flex-col p-6 gap-6 bg-slate-600 text-white'>
                    <input type='text' placeholder='Product Name' className='bg-zinc-800'></input>
                    <input type='number' placeholder='Sale Price' className='bg-zinc-800'></input>
                    <button onClick={() => saveNewProduct()} className='bg-white text-black hover:cursor-pointer'>Save Product</button>
                </div>
            </div>
        </div>
    )
}