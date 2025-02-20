import React from 'react'
import ProductList from '../components/ProductList'

export default function Home() {
  // const products = [
  //   { id: 1, title: 'Cool Sneakers', price: 49.99 },
  //   { id: 2, title: 'Stylish Jacket', price: 89.99 },
  //   { id: 3, title: 'Wireless Headphones', price: 129.99 },]
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black py-4 px-6">
        <h1 className="text-2xl font-bold">Product App Home</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800 px-4 sm:px-8 md:px-16 py-8">
        <ProductList />
      </main>

      {/* Footer (optional) */}
      <footer className="bg-black text-sm text-gray-400 py-4 px-6">
        © {new Date().getFullYear()} Product App
      </footer>
    </div>
  )
}
