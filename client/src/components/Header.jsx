import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white-300 text-black px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">QuickKart</div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="#" className="hover:underline">
          About
        </Link>
        <Link to="#" className="hover:underline">
          Contact
        </Link>
       <Link to="/sellers/signup" className="bg-white text-purple-900 px-4 py-1 rounded hover:bg-gray-100">
           Sellers
        </Link>
        <Link
          to="/admin-login"
          className="bg-white text-purple-900 px-4 py-1 rounded hover:bg-gray-100"
        >
          Admin Panel
        </Link>
        <Link>Login</Link>
      </nav>
    </header>
  );
}
