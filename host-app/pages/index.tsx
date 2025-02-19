import dynamic from 'next/dynamic'

const ProductList = dynamic(() => import('productApp/ProductList'), { ssr: false })

const Basket = dynamic(() => import('basketApp/Basket'), { ssr: false });




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black py-4 px-6">
        <h1 className="text-2xl font-bold">Host App Home</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800 px-4 sm:px-8 md:px-16 py-8">
       <ProductList />
       <Basket />
      </main>

      {/* Footer (optional) */}
      <footer className="bg-black text-sm text-gray-400 py-4 px-6">
        © {new Date().getFullYear()} Host App
      </footer>
    </div>
  );
}
