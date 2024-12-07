import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Chemical() {
  return (
    <AdminLayout>
          <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1>Chemical Transportation</h1>
      <p className="lead">Safe and Secure Transport of Chemical Materials Worldwide</p>
      <a href="#chemical-info" className="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>


  <section id="chemical-info" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">How We Handle Chemical Materials</h2>
      <div className="row">
        <div className="col-md-6">
          <p>At Ocean Logistics, safety is our top priority when transporting chemical materials. Our specialized services ensure that hazardous and non-hazardous chemicals are handled, loaded, and transported in compliance with global safety standards.</p>
          <ul>
            <li>**Specialized Containers**: Use of ISO tanks and certified chemical containers to prevent leaks and contamination.</li>
            <li>**Temperature-Controlled Solutions**: Temperature management for sensitive chemicals to ensure stability during transport.</li>
            <li>**Strict Safety Protocols**: Strict loading and unloading protocols to minimize risks during transit.</li>
            <li>**Trained Personnel**: Our staff is certified to handle hazardous materials safely and efficiently.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://dfreight.org/wp-content/uploads/2023/08/An-Ultimate-Guide-to-Shipping-Chemicals-and-Plastics-DFreight.jpg" width="500px" className="img-fluid" alt="Chemical Logistics"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="distribution" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Safe Loading and Distribution Locations</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://www.emersonautomationexperts.com/wp-content/uploads/2023/09/complete-loading-unloading-solution.png" width="200px" alt="Loading" className="mb-3"/>
            <h5>Loading Methods</h5>
            <p>Our loading methods for chemical materials include the use of sealed, leak-proof containers and advanced handling equipment to ensure safe transport.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://fastercapital.com/i/Safety-regulations--Ensuring-Compliance-in-Primary-Distribution--The-Future-of-Safety-Regulations-in-Primary-Distribution.webp" width="200px" alt="Safe Locations" className="mb-3"/>
            <h5>Distribution to Safe Locations</h5>
            <p>We distribute chemical materials to certified and secure locations worldwide, including:</p>
            <ul className="list-unstyled">
              <li>Rotterdam, Netherlands</li>
              <li>Houston, USA</li>
              <li>Shanghai, China</li>
              <li>Dubai, UAE</li>
              <li>Singapore</li>
              <li>Antwerp, Belgium</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*zxAC5k8QjhqVw47KRgCnsA.jpeg" width="200px" alt="Global Reach" className="mb-3"/>
            <h5>Global Network</h5>
            <p>Our global network of safe distribution centers ensures that chemical materials reach their destinations safely and in compliance with all regulations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us for Safe Chemical Transportation</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label for="cargo" className="form-label">Chemical Cargo Details</label>
              <textarea className="form-control" id="cargo" rows="3" placeholder="Describe your chemical cargo"></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
    </AdminLayout>
  )
}

export default Chemical