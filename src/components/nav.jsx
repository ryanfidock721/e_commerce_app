import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'

export function Nav(setIsSidebarOpen) {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-center">
            <ul className="flex space-x-4 items-center">
                <li><Link to='/homepage' className="hover:underline p-20">Home</Link></li>
                <li><Link to='/items_grid' className="hover:underline p-20">Products</Link></li>
                <li><Link to='/about' className="hover:underline p-20">About</Link></li>
                <li><Link to='/homepage' className="hover:underline p-20">Contact</Link></li>
                <li><Link to='/admin' className="hover:underline p-20">Admin Page</Link></li>
                <li><button onClick={() => setIsSidebarOpen(prev => !prev)} className='p-2 rounded-full hover:cursor-pointer hover:bg-white active:bg-lime-400'><ShoppingCart className='w-5 h-5' /></button></li>
            </ul>
        </nav>
    )
}