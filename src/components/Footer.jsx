import React from "react";
import "../styles/components/Footer.css";
import Button from "../ui/button.jsx";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <div class="footer-wrapper content-container">
      {/* <div class="overlap-container">
        Try today
        <Button text="Sign up" className="btn-primary"/>
      </div> */}
      <div class="footer">
        <div class="footer-content">
          <ul>
            <li>
              <h6>Useful Links</h6>
              <Link to="./Home">Homepage</Link>
              <br></br>
              <Link to="./About">About</Link>
              <br></br>
              <Link to="./Services">Our Services</Link>
            </li>
            <li>
              <h6>Contact Us</h6>
              <Link to="./Contact">Contact us</Link>
            </li>
            <li>
              <h6>Legal</h6>
            </li>
            <li>
              <h6>Follow</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
