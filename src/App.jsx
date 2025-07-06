import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
       
    </>
  )
}

export default App
