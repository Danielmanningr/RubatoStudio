import React from 'react';
import '../styles/components/Main.css';
import Button from '../ui/button';

function MainSection () {
  return (
    <main>
      <div class="custom-shape-divider-top-1737848688">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='content-container'>
        <section className="intro">
          <div>
            <Button text="Sign up - It's free" className="btn-primary"/>
          </div>
        </section>

        <section className="services">
          <h3 className="services-title">Our Services</h3>
          <div className="services-list">
            <ul className='alternating-list'>
              <li>Customised Workflow</li>
              <li>Limitless Automation</li>
              <li>Simple User Interface</li>
              <li>Dedicated Support</li>
              <li className='end-of-list'>Built-in Client Management and CRM</li>
            </ul>
          </div>
        </section>

        <section className="about">
          <h3>About Us</h3>
          <p>We are a passionate team dedicated to providing top-notch services.</p>
        </section>
      </div>
    </main>
  );
};

export default MainSection;