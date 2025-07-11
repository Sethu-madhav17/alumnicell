import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./ProgramH.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Title",
    date: "July 10, 2025",
    time: "10:00 AM",
    description: "description",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 12, 2025",
    time: "2:00 PM",
    description: "description",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 15, 2025",
    time: "5:00 PM",
    description: "description",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 20, 2025",
    time: "7:00 PM",
    description: "description",
    image: "/Media/iitiabhi1.jpg",
  },
];

const Program = () => {
  useGSAP(() => {
		// gsap code here...
		gsap.from('.program-container', 
      
      {
        y:50,
      opacity: 0,
      duration: 0.1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: '.program-container',
        scroller: 'body',
        start: 'top 40%', // Animation starts when top of the card reaches 60% of the viewport
        end:'top 50%',
        scrub:2,
      } 

      }); // <-- automatically reverted
	},); // <-- scope for selector text (optional)

  return (
    <div className="program-container">
      {programs.map((program, index) => (
        <div key={index} className="program-card">
          <img
            src={program.image}
            alt={program.title}
            className="program-image"
          />
          <div className="program-content">
            <h3>{program.title}</h3>
            <p>📅 {program.date}</p>
            <p>⏰ {program.time}</p>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
