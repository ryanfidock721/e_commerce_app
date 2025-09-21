export function Sidebar({ isSidebarOpen }) {
  if (!isSidebarOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-white border-l shadow-sm">
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">Categories</h2>
          </div>
        </nav>
      </aside>
    </div>
  );
}
