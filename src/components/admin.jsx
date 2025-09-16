import {supabase} from '../client'
import { useState } from 'react'
import { ImageUp } from 'lucide-react';
import 'ldrs/square'

export function Admin_Page() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value);
    }
    
    function handlePriceChange(event) {
        setPrice(event.target.value);
    }
    
    async function saveNewProduct() {
        const { data, error } = await supabase
            .from('Products')
            .insert([
    { name: name, price: price, image_url: `https://lbwgmqvvtmvjfagdrwzk.supabase.co/storage/v1/object/public/Product_Images/Images/${file.name}` }
  ]);
      console.log('Product saved!')

    }

    async function uploadFile(file) {
        setLoading(true)

        const { data, error } = await supabase.storage.from('Product_Images').upload(`Images/${file.name}`, file)
        if (error) {
            alert('Error uploading file: ', error.message)
            setLoading(false)
            console.log(error?.status, error?.message, error);

            // Handle error
        } else {
            alert('File uploaded successfully!')
            setLoading(false)
            // Handle success
        }
     }

    function handleFileUpload(event) {
        const uploadedFile = event.target.files?.[0];
        setFile(uploadedFile);
        }

        console.log('File to be uploaded:', file)

    return (
        <div className='flex justify-center p-10 m-10'>
            <div className='p-5'>
                <div className='flex flex-col p-6 gap-6 bg-slate-600 text-white'>
                    <input type='text' placeholder='Product Name' onChange={handleNameChange} className='bg-zinc-800'></input>
                    <input type='number' placeholder='Sale Price' onChange={handlePriceChange} className='bg-zinc-800'></input>
                    
                    <input id='fileInput' type='file' onChange={handleFileUpload} className='hidden'></input>

                    <label htmlFor='fileInput' className="cursor-pointer">
                        <ImageUp color="white" size={48} />
                    </label>

                    {loading && (
                        <div id='loading' className='flex justify-center'>
                        <l-square size='30' color="white"></l-square>
                        </div>
                    )}
                    
                    <button onClick={() => {saveNewProduct(); uploadFile(file)}} className='bg-white text-black hover:cursor-pointer'>Save Product</button>
                </div>
            </div>
        </div>
    )
}