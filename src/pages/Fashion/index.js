import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Fashion() {
  return (
    <AdminLayout>
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Fashion and Lifestyle Logistics</h1>
      <p class="lead">Streamlined Solutions for Your Fashion and Lifestyle Products</p>
      <a href="#fashion-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="fashion-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">How We Support Fashion and Lifestyle Products</h2>
      <div class="row">
        <div class="col-md-6">
          <p>Our logistics solutions are tailored to meet the unique needs of the fashion and lifestyle industry. We ensure that your products, from high-end fashion items to everyday lifestyle goods, are transported efficiently and securely across the globe. Our services include:</p>
          <ul>
            <li>**Temperature-Controlled Shipping**: Protects delicate fabrics and high-value items from temperature fluctuations during transit.</li>
            <li>**Fast and Reliable Delivery**: Expedited shipping options to ensure timely arrivals for fashion shows, retail launches, and other key events.</li>
            <li>**Specialized Handling**: Careful handling of delicate or high-value items to prevent damage during loading and unloading.</li>
            <li>**Global Reach**: Efficient distribution networks to major fashion capitals and lifestyle hubs around the world.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://img.freepik.com/premium-photo/modern-clothing-store-with-neon-lights-cyber-monday-generated-by-ai_664580-604.jpg" width="400px" />
        </div>
      </div>
    </div>
  </section>

  
  <section id="distribution" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Loading and Distribution</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://techpacker.com/blog/content/images/2024/04/Ultimate-guide-to-supply-chain-management--3-.png" width="200px" alt="Loading" class="mb-3"/>
            <h5>Loading Methods</h5>
            <p>Our loading methods include specialized racks for hanging garments, secure packaging for luxury items, and climate-controlled containers to maintain product quality.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2022/february/chicago-booth-supply-chain.jpg?cx=0.22&cy=0.23&cw=1880&ch=783&hash=ABF664CC98FFA590C7C45501FE576571" width="200px" alt="Distribution" class="mb-3"/>
            <h5>Distribution Countries</h5>
            <p>We distribute to key fashion and lifestyle markets including:</p>
            <ul class="list-unstyled">
              <li>United States</li>
              <li>United Kingdom</li>
              <li>France</li>
              <li>Italy</li>
              <li>China</li>
              <li>Japan</li>
              <li>Australia</li>
              <li>Brazil</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/supply-chains-101-header.png" width="200px" alt="Global Reach" class="mb-3"/>
            <h5>Global Reach</h5>
            <p>With a network of trusted partners and facilities, we ensure that your fashion and lifestyle products reach their destinations efficiently, regardless of distance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Contact Us for Customized Solutions</h2>
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
              <label for="cargo" class="form-label">Cargo Details</label>
              <textarea class="form-control" id="cargo" rows="3" placeholder="Describe your fashion and lifestyle cargo"></textarea>
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

export default Fashion