// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import dummyProducts from '../data/dummyProducts';

// const HomePage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Load static products (replace with API call in future)
//     setProducts(dummyProducts);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Explore Computer Accessories</h1>

//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map(product => (
//             <div
//               key={product._id}
//               className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//             >
//               <div className="w-full h-48 flex items-center justify-center bg-gray-100">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="max-h-full max-w-full object-contain"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{product.name}</h2>
//                 <p className="text-gray-600">{product.description}</p>
//                 <p className="text-green-700 font-bold">KSh {product.price}</p>
//                 <Link
//                   to={`/product/${product._id}`}
//                   className="text-blue-500 hover:underline mt-2 block"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">No products available.</p>
//       )}
//     </div>
//   );
// };

// export default HomePage;

// // frontend/src/pages/HomePage.jsx
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const HomePage = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     // Fetch products from free API
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('https://fakestoreapi.com/products')
//         if (!res.ok) throw new Error('Failed to fetch products')
//         const data = await res.json()
//         setProducts(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   if (loading) return <p className="p-6">⏳ Loading products...</p>
//   if (error) return <p className="p-6 text-red-500">❌ {error}</p>

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Explore Computer Accessories</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{product.title}</h2>
//               <p className="text-gray-600">{product.description.slice(0, 60)}...</p>
//               <p className="text-green-700 font-bold">KSh {product.price * 150}</p>
//               <Link
//                 to={`/product/${product.id}`}
//                 className="text-blue-500 hover:underline mt-2 block"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HomePage



import React from 'react'
import { Link } from 'react-router-dom'
import dummyProducts from '../data/dummyProducts'

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Computer Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map(product => (
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

export default HomePage
