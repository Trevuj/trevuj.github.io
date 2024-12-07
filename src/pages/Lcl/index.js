import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Lcl() {
  return (
    <AdminLayout>
  
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>About Container Load</h1>
      <p class="lead">Comprehensive Guide to Full Container Load (FCL) and Less than Container Load (LCL) Shipping</p>
      <a href="#services" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="services" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Types of Container Loads</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://img.seabaycargo.com/article/202304/FCL.webp" width="250px" class="card-img-top" alt="Full Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Full Container Load (FCL)</h5>
              <p class="card-text">FCL refers to a shipment where an entire container is used exclusively for one customer’s cargo. It ensures minimal handling and faster transit times.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://img.seabaycargo.com/article/202304/LCL.webp" width="250px" class="card-img-top" alt="Less than Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Less than Container Load (LCL)</h5>
              <p class="card-text">LCL is a cost-effective solution where cargo from multiple shippers is consolidated into one container. Ideal for small shipments that don’t require a full container.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Cargo Facilities</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://media.licdn.com/dms/image/D4D12AQHivjBecq9-nw/article-cover_image-shrink_720_1280/0/1715187137528?e=2147483647&v=beta&t=WOfhUcOsRkBK77T_K49XwLgBx36xvJidK61OQTJfPNA" width="200px" alt="Warehousing" class="mb-3"/>
            <h5>Global Warehousing</h5>
            <p>We provide secure, climate-controlled warehousing facilities at major ports worldwide to safeguard your cargo before or after shipping.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://shippingxps.com/wp-content/uploads/2023/05/custome-procecss-800x540.png" width="200px" alt="Customs" class="mb-3"/>
            <h5>Customs Clearance</h5>
            <p>Expert handling of all customs documentation and clearance procedures to ensure smooth, hassle-free transport of goods across borders.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://www.wilmarinc.com/hubfs/AdobeStock_320335514-1.jpeg" width="150px" alt="Tracking" class="mb-3"/>
            <h5>Real-Time Tracking</h5>
            <p>Track your shipment in real time with our advanced tracking system, providing visibility from loading to delivery at the destination port.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Get in Touch</h2>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" class="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>

    </AdminLayout>
  )
}

export default Lcl