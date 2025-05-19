import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AdminLogin from './pages/admin/AdminLogin';

// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
// import ProductBenefitsSection from "./components/ProductBenefitsSection";
// import ExperienceSection from "./components/ExperienceSection";
// import CallToActionSection from "./components/CallToActionSection";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin-login' element={<AdminLogin />} />
        </Routes>
      
    </div>
  );
}

