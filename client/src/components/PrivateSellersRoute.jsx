import React from "react";
import { Navigate } from "react-router-dom";

// currently the authentication is done using localStorage it should be replaced with a more secure method like JWT or OAuth
export default function PrivateSellersRoute({ children }) {
  const isSellerAuthenticated = localStorage.getItem("sellerLoggedIn") === "true";
  return isSellerAuthenticated ? children : <Navigate to="/sellers/dashboard" />;
}
