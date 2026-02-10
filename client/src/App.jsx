import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AdminDash from "./pages/AdminDash";
import BrandDash from "./pages/BrandDash";
import InfluencerDash from "./pages/InfluencerDash";
import SignInPage from "./pages/SignInPage";
import BrandListing from "./pages/BrandListing";
import InfluencerListing from "./pages/InfluencerListing";
import ProfileSetup from "./pages/ProfileSetup";
import InProfileDetail from "./pages/InProfileDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/branddash" element={<BrandDash />} />
        <Route path="/influencerdash" element={<InfluencerDash />} />

        <Route path="/profilesetup" element={<ProfileSetup />} />

        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/brandlist" element={<BrandListing />} />
        <Route path="/influlist" element={<InfluencerListing />} />
        <Route path="/profile/:id" element={<InProfileDetail />} />

      </Routes>

      <Footer />

      <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
/>


    </div>

      
    </>
  );
};

export default App;
