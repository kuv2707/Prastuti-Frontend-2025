import "./TestimonialCss.css";
import React from "react";
import MainTestimonial from "./MainTestimonial";
import MobileLayout from "./MobileLayout";

export default function Testimonial() {
  return (
    <div>
      <div className="inner-container">
        <div className="section-text-mask">
          <h4 className="h5 section-subtitle"> </h4>
        </div>
        <div className="section-text-mask">
          <h2 className="h3 section-title p-5">Testimonial</h2>
        </div>
      </div>
      <div className="MainTestimonial">
        <MainTestimonial />
      </div>
      <div className="showOnMobile">
        <MobileLayout />
      </div>
    </div>
  );
}
