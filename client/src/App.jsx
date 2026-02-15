import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AdminDash from "./pages/AdminDash";
import BrandDash from "./pages/BrandDash";
import InfluencerDash from "./pages/InfluencerDash";
import SignInPage from "./pages/SignInPage";
import BrandListing from "./pages/BrandListing";
import InfluencerListing from "./pages/InfluencerListing";
import InProfileDetail from "./pages/InProfileDetail";
import BrandProfileSetup from "./pages/BrandProfileSetup";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrandDetail from "./pages/BrandDetail";
import InfluProfileSetup from "./pages/InfluProfileSetup";


const App = () => {

  const location = useLocation();

  // Routes where Navbar & Footer should be hidden
  const hideLayoutRoutes = ["/signinpage"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">

        {!hideLayout && <Navbar />}


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />

          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/branddash" element={<BrandDash />} />
          <Route path="/influencerdash" element={<InfluencerDash />} />

          

          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/brandlist" element={<BrandListing />} />
          <Route path="/influlist" element={<InfluencerListing />} />
          <Route path="/profile/:id" element={<InProfileDetail />} />
          <Route path="/brand/:id" element={<BrandDetail />} />

          <Route path="/influ-profile-setup" element={<InfluProfileSetup />} />
          <Route path="/brand-profile-setup" element={<BrandProfileSetup />} />

        </Routes>

        {!hideLayout && <Footer />}

        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick />


      </div>


    </>
  );
};

export default App;




























































