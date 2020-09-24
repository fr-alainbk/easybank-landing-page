import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__first">
          <img className="footer__logo" src=".././images/logo2.png" alt="logo" />
          <div className="footer__socialIcons">
            <img
              src=".././images/icon-facebook.svg"
              alt=""
              className="footer__icon"
            />
            <img
              src=".././images/icon-youtube.svg"
              alt=""
              className="footer__icon"
            />
            <img
              src=".././images/icon-twitter.svg"
              alt=""
              className="footer__icon"
            />
            <img
              src=".././images/icon-pinterest.svg"
              alt=""
              className="footer__icon"
            />
            <img
              src=".././images/icon-instagram.svg"
              alt=""
              className="footer__icon"
            />
          </div>
        </div>
        <div className="footer__second">
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className="footer__third">
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer__right">
        <button className="footer__button">Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
        <p className="footer__signature">
          Coded by{" "}
          <a
            className="footer__coderName"
            href="https://www.linkedin.com/in/franckbinde/"
            target="_blank"
          >
            Franck Binde
          </a>
          , Fullstack Developer
        </p>
      </div>
    </footer>
  );
}

export default Footer;
