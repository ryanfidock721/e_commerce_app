import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { RotateCcw } from 'lucide-react'

export function Pagination({ setCurrentPage }) {
  return (
    <div className="flex justify-center p-4 gap-4">
      <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className='p-2 bg-lime-500 rounded-md text-white font-bold active:bg-lime-500 hover:bg-lime-600 hover:cursor-pointer shadow-lg'>
        <ChevronLeft />
      </button>
      <button onClick={() => setCurrentPage(1)} className='p-2 bg-lime-500 rounded-md text-white font-bold hover:bg-lime-600 active:bg-lime-500 hover:cursor-pointer shadow-lg'>
        <RotateCcw />
      </button>
      <button onClick={() => setCurrentPage(p => p + 1)} className='p-2 bg-lime-500 rounded-md text-white font-bold active:bg-lime-500 hover:bg-lime-600 hover:cursor-pointer shadow-lg'>
        <ChevronRight />
      </button>
    </div>
  )
}
