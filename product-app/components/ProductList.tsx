import React from 'react'

const ProductList: React.FC = () => {
  const products = [
    { id: 1, title: 'Cool Sneakers', price: 49.99 },
    { id: 2, title: 'Stylish Jacket', price: 89.99 },
    { id: 3, title: 'Wireless Headphones', price: 129.99 },
  ]

  return (
    <section className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map(item => (
          <li
            key={item.id}
            className="p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition"
          >
            <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
