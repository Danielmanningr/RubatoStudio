import React, { useState , useEffect } from 'react'
import '../styles/ui/hamburger.css'
import { Link, useLocation } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open'); // Clean up if the component unmounts
    };
  }, [isOpen]);

  // Close the menu when the location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className='hamb-container'>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <Link to="./Home">Home</Link>
        <Link to="./About">Who we are</Link>
        <Link to="./Services">What we do</Link>
        <Link to="./Contact">Contact us</Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;