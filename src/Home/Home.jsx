import React from 'react'
import Typewriter from '../Components/Typewriter/Typewriter'
import './Home.css'
import Introtext from '../Components/Introtext/Introtext'
import Eventh from '../Components/Eventh/Eventh'
import Webinar from '../Components/WebinarH/WebinarH'
import Program from '../Components/ProgramH/ProgramH'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
		// gsap code here...
		gsap.from('.pr', 
      
      {
      y:50,
      opacity:0,
      duration:0.8,
      delay:0.5,
      stagger:0.15,
       scrollTrigger: {
        trigger: '.pr',
        scroller: 'body',
        start: 'top 60%', // Animation starts when top of the card reaches 60% of the viewport
        end:'top 60%',
        scrub:2,}

      }); // <-- automatically reverted
      	gsap.from('.web', 
      
      {
      y:50,
      opacity:0,
      duration:0.8,
      delay:0.5,
      stagger:0.15,
       scrollTrigger: {
        trigger: '.web',
        scroller: 'body',
        start: 'top 60%', // Animation starts when top of the card reaches 60% of the viewport
        end:'top 40%',
        scrub:2,}

      });
      gsap.from('.eve', 
      
      {
      y:50,
      opacity:0,
      duration:1,
      delay:1,
      stagger:0.15,
       scrollTrigger: {
        trigger: '.eve',
        scroller: 'body',
        start: 'top 40%', // Animation starts when top of the card reaches 60% of the viewport
        end:'top 40%',
        scrub:2,}

      });
      gsap.from('.saathih', 
      
      {
      y:100,
      opacity:0,
      duration:1,
      delay:1,
      stagger:0.15,
       scrollTrigger: {
        trigger: '.saathih',
        scroller: 'body',
        start: 'top 80%', // Animation starts when top of the card reaches 60% of the viewport
        end:'top 40%',
        scrub:2,}

      });
	},);
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
  <img className='bubble' src='/Media/bubble.png'></img>
    <img className='bubble1' src='/Media/bubble.png'></img>
  <p className='titlec pr'>PROGRAMS</p>
  <Program/>
  <p className='titlec web'>WEBINARS</p>
   <Webinar/>
  <p className='titlec eve'>EVENTS</p>
   <Eventh/>

   <div  className="saathih"> <img className='bubble' src='/Media/bubble.png'></img>
    <img className='bubble1' src='/Media/bubble.png'></img>
    <img src='/Media/Saathi1.png' alt='saathi' style={{ borderRadius: "15px" }}></img>
   <button className="register-button">
        REGISTER NOW
      </button>
   </div>
  </>
  )
}

export default Home
