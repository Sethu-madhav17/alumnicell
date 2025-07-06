import React from 'react'
import Typewriter from '../Components/Typewriter/Typewriter'
import './Home.css'
import Introtext from '../Components/Introtext/Introtext'
import Eventh from '../Components/Eventh/Eventh'
import Webinar from '../Components/WebinarH/WebinarH'
import Program from '../Components/ProgramH/ProgramH'
const Home = () => {
  return (
    <>
    <div className="banner">
    <div className="content-wrapper">
        
          <div className="textbox">
            <h2 className="text ">Welcome To</h2>
            <Typewriter />
          </div>
          <img
           src="/Media/iitiabhi1.jpg"
            alt="iitiabhinandan"
            className="iitabhi1 "
          />
        </div>
        </div>
        <Introtext />
        <div className="polygon-wrapper">
    <div className="polygon-shadow"></div>
    <div className="polygon-main">
    </div>
  </div>
  <p className='titlec'>PROGRAMS</p>
  <Program/>
  <p className='titlec'>WEBINARS</p>
   <Webinar/>
  <p className='titlec'>EVENTS</p>
   <Eventh/>
   <div  className="saathih"><img src='/Media/Saathi1.png' alt='saathi' style={{ borderRadius: "15px" }}></img></div>
  </>
  )
}

export default Home
