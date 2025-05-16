import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateAdminRoute({ children }) {
  const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";
  return isAdminAuthenticated ? children : <Navigate to="/admin-login" />;
}
