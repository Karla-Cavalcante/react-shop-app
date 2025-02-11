import React from 'react';
import { Link } from 'react-router-dom';
 

function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/" className="text-lg font-bold">Home</Link>
      <div className="flex items-center gap-4">
        <Link to="/shop" className="relative">
          Shop
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/checkout" className="bg-green-500 px-4 py-2 rounded">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;