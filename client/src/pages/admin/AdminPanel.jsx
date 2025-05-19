import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  // Dummy data; later replace with API calls
  useEffect(() => {
    setUsers([
      { id: 1, name: "User One", spam: false },
      { id: 2, name: "Spam User", spam: true },
    ]);
    setProducts([
      { id: 101, name: "Product One", spam: false },
      { id: 102, name: "Spam Product", spam: true },
    ]);
  }, []);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex justify-between items-center p-2 border-b ${
                user.spam ? "bg-red-100" : ""
              }`}
            >
              <span>{user.name}</span>
              {user.spam && (
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => removeUser(user.id)}
                >
                  Remove Spam
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className={`flex justify-between items-center p-2 border-b ${
                product.spam ? "bg-red-100" : ""
              }`}
            >
              <span>{product.name}</span>
              {product.spam && (
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove Spam
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
