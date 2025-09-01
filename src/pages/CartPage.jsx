// frontend/src/pages/CartPage.jsx
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <Link to="/products" className="text-blue-600 hover:underline">
          Go Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border rounded p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-green-700 font-bold">KSh {item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: KSh {total}</h2>
        <div className="space-x-2">
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
