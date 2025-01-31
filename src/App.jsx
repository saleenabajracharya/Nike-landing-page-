import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/Hero'
import { ContactUs } from './components/ContactUs'
function App() {
 
  return (
    <>
     <div>
      <Navbar/>
      <Hero/>
      <ContactUs/>
    </div>

    </>
  )
}

export default App
