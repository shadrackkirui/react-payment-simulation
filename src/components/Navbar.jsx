//  import React, { useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/UserProvider'
// import { CartContext } from '../context/CartProvider'

// const Navbar = () => {
//   const { user, setUser } = useContext(UserContext)   // ✅ use correct context
//   const { cartItems } = useContext(CartContext)       // ✅ use correct context
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     setUser(null)
//     navigate('/login')
//   }

//   return (
//     <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold text-white">
//         CompShop
//       </Link>

//       <div className="space-x-4 flex items-center">
//         <Link to="/products" className="hover:text-gray-300">
//           Products
//         </Link>

//         <Link to="/cart" className="hover:text-gray-300">
//           Cart ({cartItems.length})
//         </Link>

//         {user ? (
//           <>
//             <span className="text-sm">Hi, {user.name}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-gray-300">
//               Login
//             </Link>
//             <Link to="/register" className="hover:text-gray-300">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// frontend/src/components/Navbar.jsx
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { CartContext } from '../context/CartProvider'

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <Link to="/" className="text-xl font-bold text-white">
        CompShop
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4 flex items-center">
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>

        <Link to="/cart" className="hover:text-gray-300">
          Cart ({cartItems.length})
        </Link>

        {user ? (
          <>
            <span className="text-sm">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
