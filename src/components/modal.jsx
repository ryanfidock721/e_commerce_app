export function Modal({ open, onClose, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background overlay with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal content */}
      <div className="relative bg-white rounded-xl p-6 max-w-lg w-full shadow-lg">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
        </button>
        {children}
      </div>
    </div>
  )
}
