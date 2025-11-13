import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import TopHeader from "./components/TopHeader.jsx";
import BottomHeader from "./components/BottomHeader.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="header-wrapper">
          <TopHeader />
          <BottomHeader />
        </div>
        <div className="content-wrapper">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Home />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
