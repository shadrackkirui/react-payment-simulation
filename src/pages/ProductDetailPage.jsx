import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'
import dummyProducts from '../data/dummyProducts'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  // Find product from shared dummy data
  const product = dummyProducts.find((p) => p._id === id)

  if (!product) {
    return <p className="p-6 text-red-500">❌ Product not found.</p>
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert(`✅ ${product.name} added to cart!`)
  }

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto border rounded-lg shadow-md p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-green-700 font-bold text-xl mb-4">
          KSh {product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
