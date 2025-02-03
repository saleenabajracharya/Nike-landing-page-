import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/Hero'
import { ContactUs } from './components/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 
  return (
    <>
     <div>
     <Router>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Hero/>} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>

    </>
  )
}

export default App
