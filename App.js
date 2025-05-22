// App.js
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaHome, FaInfo, FaImages, FaPhone } from "react-icons/fa";
import "./App.css";
import logo from './assets/LOGO.jpg';
import heroImage from './assets/segal-jewelry-NsH-CvU0deg-unsplash.jpg'; // new image

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <div className="brand">Soni Rameshbhai & Son</div>
          </div>
          <nav className="nav">
            <Link to="#home"><FaHome /><span>Home</span></Link>
            <Link to="#product"><FaInfo /><span>Product Info</span></Link>
            <Link to="#gallery"><FaImages /><span>Images</span></Link>
            <Link to="#contact"><FaPhone /><span>Contact Us</span></Link>
          </nav>
        </header>

        {/* Combined Hero Section */}
        <section
          className="hero"
          id="home"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-content">
            <h1>Timeless Craftsmanship</h1>
            <p>Experience the elegance of Surat’s finest jewellery, where tradition meets artistry.</p>
          </div>
        </section>

        <section className="section" id="product">
          <h2>Our Products</h2>
          <p>We specialize in gold, diamond, and traditional jewellery designs, crafted with unmatched precision and legacy craftsmanship passed down through generations.</p>
        </section>

        <section className="section" id="gallery">
          <h2>Gallery</h2>
          <p>Explore our collection showcasing the beauty of intricate designs and the elegance of handcrafted jewellery from our Surat studio.</p>
        </section>

        <section className="section" id="contact">
          <h2>Contact Us</h2>
          <p>
            Soni Rameshbhai & Son Jewellers<br />
            Main Market, Surat, Gujarat<br />
            Phone: +91-98765-43210<br />
            Email: contact@sonijewellers.in
          </p>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Soni Rameshbhai & Son. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
