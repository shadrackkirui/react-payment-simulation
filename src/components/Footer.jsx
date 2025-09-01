// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
//       <p className="text-sm">&copy; {new Date().getFullYear()} CompShop. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand / Copy */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} CompShop. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex space-x-6">
          <Link to="/about" className="hover:text-gray-400 text-sm">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-sm">
            Contact Us
          </Link>
          <Link to="/privacy" className="hover:text-gray-400 text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
