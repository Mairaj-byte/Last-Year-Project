import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'

import LandingPage from './pages/LandingPage'
import AdminDash from './pages/AdminDash'
import BrandDash from './pages/BrandDash'
import InfluencerDash from './pages/InfluencerDash'
import SignInPage from './pages/SignInPage'
import Signup from './pages/Signup'
import BrandListing from './pages/BrandListing'
import InfluencerListing from './pages/InfluencerListing'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      {/* Main Content */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/branddash" element={<BrandDash />} />
          <Route path="/influencerdash" element={<InfluencerDash />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/brandlist" element={<BrandListing />} />
          <Route path="/influlist" element={<InfluencerListing />} />
        </Routes>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
