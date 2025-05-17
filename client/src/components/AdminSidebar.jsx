import React from "react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-purple-400">Dashboard</a>
        <a href="#" className="block hover:text-purple-400">Users</a>
        <a href="#" className="block hover:text-purple-400">Products</a>
        <a href="#" className="block hover:text-purple-400">Logout</a>
      </nav>
    </aside>
  );
}
