import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Savor the Flavor, Relish the Experience!"
  

It emphasizes both the delicious taste of the food and the overall experience of enjoying it. If you need a specific theme or style, feel free to let me know!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "A Delight for the Senses! – The flavors in every bite were perfectly balanced, making this a memorable dining experience. Highly recommend!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ali hussasin</h2>
      </div>
    </div>
  );
};

export default Testimonial;
