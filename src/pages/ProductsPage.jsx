// frontend/src/pages/ProductsPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import dummyProducts from '../data/dummyProducts'

const ProductsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-700 font-bold">KSh {product.price}</p>
              <Link
                to={`/product/${product._id}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
