import { useState } from 'react'

export function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex justify-center mt-8 bg-red-200 p-4">
            <button>Last Page</button>
            <button>Page 1</button>
            <button>Next Page</button>
        </div>
    );
}