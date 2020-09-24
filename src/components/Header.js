import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img src=".././images/logo.svg" alt="logo" />
      </div>

      <nav className={showMenu ? `header__options` : `header__hide`}>
        <a href="#" className="header__option">
          Home
        </a>
        <a href="#" className="header__option">
          About
        </a>
        <a href="#" className="header__option">
          Contact
        </a>

        <a href="#articles" className="header__option">
          Blog
        </a>
        <a href="#" className="header__option">
          Careers
        </a>
      </nav>
      <button className="header__button">Request Invite</button>

      <div onClick={() => setShowMenu(!showMenu)} className="header__Link-toggle">
        {showMenu ? (
          <img src=".././images/icon-close.svg" alt="close" />
        ) : (
          <img src=".././images/icon-hamburger.svg" alt="hamburger" />
        )}
      </div>
    </header>
  );
}

export default Header;
