import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("seller_token");
};

export default function SellerRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/sellers/login" />;
}
