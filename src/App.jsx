import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Contact from './pages/Contact'
import Footer from './components/Footer'

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
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App