import React from "react";
import "./Sponsor.css";
import image1 from "./algo-removebg-preview.png";
import image2 from "./altair-removebg-preview.png";
export default function Spons() {
  return (
    <div className="SponsContainer" id="sponsors">
      <div className="title mt-[20px]">
        <h1>Our Sponsors</h1>
      </div>
      <div className="line">
        <div className="sponscard">
          <a
            href="https://altair.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={image2} className="altair" alt="" />
          </a>
          <h1 className="cardtitle"> Title Sponsor</h1>
        </div>
      </div>
      <div className="line">
        <div className="sponscard">
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"
              alt=""
              className="ieee"
            />
          </a>
          <h1 className="cardtitle"> Learning Partner</h1>
        </div>

        <div className="sponscard">
          <a
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="./sponsorimage/gfg.png" alt="" className="gfg" />
          </a>
          <h1 className="cardtitle"> Events Partner</h1>
        </div>
      </div>
      <div className="line">
        <div className="sponscard">
          <a
            href="https://algozenith.com/home"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={image1} alt="" className="algo" />
          </a>
          <h1 className="cardtitle"> Events Partner</h1>
        </div>
      </div>
    </div>
  );
}
