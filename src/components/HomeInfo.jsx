import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! I am <span className="font-semibold">Camilo Usuga</span> 👋🏻 <br />A
      software developer from Colombia 🇨🇴
    </h1>
  ),
  2: (
    <InfoBox
      text="Passionate about software development. focused on the frontend with React and learning about 3D animation with Threejs"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I have developed multiple personal projects, take a look."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Are you looking for a developer? Contact me."
      link="/contact"
      btnText="Let's talk."
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
