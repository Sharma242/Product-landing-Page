import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        "Fueling Hope, One Meal at a Time."
        </h1>
        <p className="primary-text">
        "Hunger is more than just an empty stomach; it’s a barrier to growth, potential, and survival. Every individual deserves access to nutritious food, a basic necessity that fuels dreams, fosters health, and empowers lives. Together, we can break the cycle of hunger by turning compassion into action—sharing meals, offering hope, and building a future where no one sleeps hungry. Small efforts lead to big changes, and with unity, we can nourish not just bodies, but also the spirit of humanity, one meal at a time."
        </p>
        <p className="primary-text">
        "Ending Hunger, Nurturing Lives."
        </p>
        <div className="about-buttons-container">
        <a 
  href="https://www.linkedin.com/in/ayush-sharma-017012166/" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: 'none' }}
>
  <button className="secondary-button">Learn More</button>
</a>

<a 
  href="https://www.youtube.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none" }}
>
  <button className="watch-video-button">
    <BsFillPlayCircleFill /> Watch Video
  </button>
</a>


        </div>
      </div>
    </div>
  );
};

export default About;
