// frontend/src/pages/CheckoutPage.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext)
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">No items to checkout 🛒</h1>
        <Link to="/products" className="text-blue-600 hover:underline">
          Go Shopping
        </Link>
      </div>
    )
  }

  const handlePayment = () => {
    alert('✅ Payment simulated! Thank you for your purchase.')
    clearCart()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>
              {item.name} - <span className="text-green-700">KSh {item.price}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: KSh {total}</h2>
        <div className="space-x-2">
          <Link
            to="/cart"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Cart
          </Link>
          <button
            onClick={handlePayment}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
