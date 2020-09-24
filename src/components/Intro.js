import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__left">
        <h1>Next generation digital banking</h1>
        <h3>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much more.
        </h3>
        <button className="intro__button">Request Invite</button>
      </div>
      <div className="intro__right">
        <img
          className="intro__backgroundImg"
          src=".././images/bg-intro-desktop.svg"
          alt="background"
        />
        <img
          className="intro__frontImg"
          src=".././images/image-mockups.png"
          alt="mockups"
        />
      </div>
    </div>
  );
}

export default Intro;
