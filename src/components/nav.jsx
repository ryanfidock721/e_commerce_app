export function Nav() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-center">
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline p-20">Home</a></li>
                <li><a href="#" className="hover:underline p-20">Products</a></li>
                <li><a href="#" className="hover:underline p-20">About</a></li>
                <li><a href="#" className="hover:underline p-20">Contact</a></li>
            </ul>
        </nav>
    )
}