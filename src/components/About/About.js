import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      {/* <video autoPlay muted loop className="myVideo">
      <source src={bgv} type="video/mp4"/>
      <source src={bgv} type="video/ogg"/>

      </video> */}
      <div id="about">
        <h1 className="aboutHead font-Manrope font-extrabold text-6xl ">
          About Us
        </h1>
        <h4 class="aboutPara  text-xl text-justify lg:text-1.5xl sm:w-[60%]">
          From humble beginnings as a paper presentation contest in 2001,
          Prastuti has blossomed into a prestigious event igniting the minds of
          countless young engineers. Professor S.N. Mahendra's vision laid the
          foundation for this annual fiesta, hosted by the Electrical
          Engineering Society of IIT (BHU), Varanasi.
        </h4>

        <h4 class="aboutPara text-xl text-justify lg:text-1.5xl sm:w-[60%]">
          Prastuti's mission? : To nurture the research instincts and analytical
          spirit of budding technical minds across India. And as technology has
          galloped forward, so has Prastuti. We've pushed the boundaries,
          introducing cutting-edge events in fields like Power Electronics, AI,
          and Software Development, giving participants a front-row seat to the
          technological revolution.
        </h4>

        <h4 class="aboutPara text-xl text-justify lg:text-1.5xl sm:w-[60%]">
          Mark your calendars! This year, from <strong>DATE</strong> Prastuti
          returns, bigger and better than ever. Get ready to embark on a
          thrilling journey through the latest technological advancements,
          competing in innovative challenges across diverse disciplines.
        </h4>
      </div>
    </>
  );
};

export default About;
