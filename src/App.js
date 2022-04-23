

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 px-4 py-2 border-r bg-white">
        <div>
          <img src="/logo.svg" alt="Logo" className="w-11 h-11" />
        </div>
      </div>

      <main className="flex-1 min-w-0">Main Content</main>
    </div>
  )
}

export default App;
