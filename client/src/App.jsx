import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import AdminDash from './pages/AdminDash'
import BrandDash from './pages/BrandDash'
import InfluencerDash from './pages/InfluencerDash'
import SignInPage from './pages/SignInPage'
import BrandListing from './pages/BrandListing'
import InfluencerListing from './pages/InfluencerListing'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileSetup from './pages/ProfileSetup'

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
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
        </Routes>
        <Footer />
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
