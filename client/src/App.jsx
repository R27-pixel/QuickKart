// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProductBenefitsSection from "./components/ProductBenefitsSection";
import ExperienceSection from "./components/ExperienceSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductBenefitsSection />
      <ExperienceSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}