import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProductBenefitsSection from "./components/ProductBenefitsSection";
import ExperienceSection from "./components/ExperienceSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";
import PrivateAdminRoute from "./components/PrivateAdminRoute";

import SellerSignUp from "./pages/sellers/SignUp";
import SellerCreateProfile from "./pages/sellers/CreateProfile";
import SellerDashboard from "./pages/sellers/SellerDashboard";
import SellerAddProduct from "./pages/sellers/AddProduct";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Header />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeatureSection />
                <ProductBenefitsSection />
                <ExperienceSection />
                <CallToActionSection />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-panel"
            element={
              <PrivateAdminRoute>
                <AdminPanel />
              </PrivateAdminRoute>
            }
          />

          {/* Seller Routes */}
          <Route path="/sellers/signup" element={<SellerSignUp />} />
          <Route path="/sellers/create-profile" element={<SellerCreateProfile />} />
          <Route path="/sellers/dashboard" element={<SellerDashboard />} />
          <Route path="/sellers/add-product" element={<SellerAddProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
