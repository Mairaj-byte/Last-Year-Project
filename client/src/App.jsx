import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminDash from './pages/AdminDash'
import BrandDash from './pages/BrandDash'
import InfluencerDash from './pages/InfluencerDash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/admindash' element={<AdminDash />} />
        <Route path='/branddash' element={<BrandDash />} />
        <Route path='/influencerdash' element={<InfluencerDash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

