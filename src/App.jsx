import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SignIn from './components/SignInAllPages/SignIn'
import Register from './components/SignInAllPages/Register'
import ForgetPassword from './components/SignInAllPages/ForgetPassword'
import OTP from './components/SignInAllPages/OTP'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        {/* Add padding to account for fixed navbar */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/otp" element={<OTP />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App