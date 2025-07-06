import React from "react";
import "./WebinarH.css";

const webinars = [
  {
    title: "Title",
    date: "July 10, 2025",
    time: "10:00 AM",
    description: "decription",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 12, 2025",
    time: "2:00 PM",
    description: "decription",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 15, 2025",
    time: "5:00 PM",
    description: "decription",
    image: "/Media/iitiabhi1.jpg",
  },
  {
    title: "Title",
    date: "July 20, 2025",
    time: "7:00 PM",
    description: "decription",
    image: "/Media/iitiabhi1.jpg",
  },
];

const Webinar = () => {
  return (
    <div className="webinar-container">
      {webinars.map((webinar, index) => (
        <div key={index} className="webinar-card">
          <img
            src={webinar.image}
            alt={webinar.title}
            className="webinar-image"
          />
          <div className="webinar-content">
            <h3>{webinar.title}</h3>
            <p>📅 {webinar.date}</p>
            <p>⏰ {webinar.time}</p>
            <p>{webinar.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Webinar;
