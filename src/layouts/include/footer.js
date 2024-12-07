import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">ThiKana Group of Companies</span>
            </a>
            <p>Increasing complexity in global supply chains is making them inefficient, vulnerable and unsustainable. At Maersk, our strategic vision is to become the Global Integrator, offering truly integrated logistics solutions that connect, protect and simplify our customers’ supply chains.

Learn more about how we are accelerating a fundamental transition in global logistics.</p>
            <div className="social-links d-flex mt-4">
              <a href="index.html"><i className="bi bi-twitter-x"></i></a>
              <a href="index.html"><i className="bi bi-facebook"></i></a>
              <a href="index.html"><i className="bi bi-instagram"></i></a>
              <a href="index.html"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Who we are</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html">About us</a></li>
              <li><a href="index.html">Services</a></li>
              <li><a href="index.html">Terms of service</a></li>
              <li><a href="index.html">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="index.html">Web Design</a></li>
              <li><a href="index.html">Web Development</a></li>
              <li><a href="index.html">Product Management</a></li>
              <li><a href="index.html">Marketing</a></li>
              <li><a href="index.html">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A.K Khan Road</p>
            <p>Akborhsha</p>
            <p>Chittagong</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+8809696426844</span></p>
            <p><strong>Email:</strong> <span>crowncorp@yahoo.com</span></p>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>2024 © <span>copyright</span> <strong className="px-1 sitename">Crown</strong> <span>All Rights Reserved</span></p>
      </div>

    </footer>


  )
}

export default Footer