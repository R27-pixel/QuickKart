import React from "react";
import { Navigate } from "react-router-dom";

// currently the authentication is done using localStorage it should be replaced with a more secure method like JWT or OAuth
export default function PrivateAdminRoute({ children }) {
  const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";
  return isAdminAuthenticated ? children : <Navigate to="/admin-login" />;
}
