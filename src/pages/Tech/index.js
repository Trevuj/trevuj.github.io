import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Tech() {
  return (
    <AdminLayout>
  
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Technology Transportation</h1>
      <p class="lead">Safe and Efficient Shipping for High-Tech Products Globally</p>
      <a href="#tech-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="tech-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Managing Sensitive Technology Products</h2>
      <div class="row">
        <div class="col-md-6">
          <p>Shipping sensitive technology products requires specialized handling and logistics. We ensure secure transportation of electronics, computer components, and high-tech devices with real-time monitoring and protective packaging.</p>
          <ul>
            <li><strong>Advanced Packaging:</strong> Shock-proof and moisture-resistant packaging to protect delicate items.</li>
            <li><strong>Real-Time Tracking:</strong> GPS and IoT devices monitor shipments throughout their journey.</li>
            <li><strong>Temperature Control:</strong> Climate-controlled containers for sensitive electronics.</li>
          </ul>
          <p>We utilize cutting-edge logistics technologies to streamline transportation from one country to another, ensuring timely and safe deliveries.</p>
        </div>
        <div class="col-md-6">
          <img src="https://miro.medium.com/v2/resize:fit:960/1*ui22ciOk4nHXM0CJG3lL3w.jpeg" class="img-fluid" alt="Technology Logistics"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="distribution" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Loading, Distribution & Technologies Used</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://static.vecteezy.com/system/resources/previews/013/478/827/original/loading-pallets-box-forklift-isometric-warehouse-truck-cardboard-box-in-logistics-business-delivery-truck-isolate-vector.jpg" width="200px" alt="Loading" class="mb-3"/>
            <h5>Loading Methods</h5>
            <p>We use specialized equipment to load sensitive products, ensuring they are securely stowed and protected during transit.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://img.freepik.com/premium-vector/forklift-loading-pallet-boxes-into-truck_441769-68.jpg" width="200px" alt="Distribution" class="mb-3"/>
            <h5>Distribution Countries</h5>
            <p>We distribute technology products to major markets worldwide, including:</p>
            <ul class="list-unstyled">
              <li>United States</li>
              <li>Germany</li>
              <li>China</li>
              <li>Japan</li>
              <li>South Korea</li>
              <li>India</li>
              <li>United Kingdom</li>
              <li>Singapore</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://as2.ftcdn.net/v2/jpg/02/58/81/75/1000_F_258817506_q4dqSGdIxgErBtDMcriiD3VJskutnriU.jpg" width="200px" alt="Technologies Used" class="mb-3"/>
            <h5>Technologies Used in Logistics</h5>
            <p>We employ the latest technologies to enhance our logistics services:</p>
            <ul class="list-unstyled">
              <li>GPS Tracking Systems</li>
              <li>Internet of Things (IoT) Sensors</li>
              <li>Blockchain for Secure Documentation</li>
              <li>Automated Warehouse Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="pricing" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Products and Pricing</h2>

      
      <h3 class="mb-3">Computer Parts</h3>
      <div class="table-responsive mb-5">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Part Name</th>
              <th>Description</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Motherboard</td>
              <td>Advanced motherboard for gaming PCs</td>
              <td>$250</td>
            </tr>
            <tr>
              <td>Graphics Card</td>
              <td>High-performance GPU</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>Multi-core CPU</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>RAM Module</td>
              <td>16GB DDR4 Memory</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>SSD</td>
              <td>1TB Solid State Drive</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <h3 class="mb-3">Garments Products</h3>
      <div class="table-responsive mb-5">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price per Unit (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T-Shirts</td>
              <td>Cotton T-Shirts in various sizes</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Jeans</td>
              <td>Denim jeans for men and women</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Jackets</td>
              <td>Water-resistant outerwear</td>
              <td>$35</td>
            </tr>
            <tr>
              <td>Dresses</td>
              <td>Summer dresses in assorted styles</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Socks</td>
              <td>Cotton ankle socks (pack of 5)</td>
              <td>$8</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <h3 class="mb-3">Hospital Instruments</h3>
      <div class="table-responsive mb-5">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Instrument Name</th>
              <th>Description</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stethoscope</td>
              <td>High-quality acoustic stethoscope</td>
              <td>$70</td>
            </tr>
            <tr>
              <td>Sphygmomanometer</td>
              <td>Blood pressure monitor</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Surgical Tools Set</td>
              <td>Complete set of surgical instruments</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>Ultrasound Machine</td>
              <td>Portable diagnostic ultrasound device</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>ECG Machine</td>
              <td>12-lead electrocardiogram machine</td>
              <td>$3,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <h3 class="mb-3">IT Sector Products</h3>
      <div class="table-responsive mb-5">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Server Rack</td>
              <td>42U Server rack cabinet</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>Network Switch</td>
              <td>24-port Gigabit Ethernet switch</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Firewall Appliance</td>
              <td>Enterprise security firewall</td>
              <td>$2,500</td>
            </tr>
            <tr>
              <td>Backup Storage</td>
              <td>10TB NAS device</td>
              <td>$1,000</td>
            </tr>
            <tr>
              <td>Cloud Software License</td>
              <td>Annual subscription for cloud services</td>
              <td>$800</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <h3 class="mb-3">AI Instruments</h3>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Instrument Name</th>
              <th>Description</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Development Kit</td>
              <td>Hardware kit for AI model development</td>
              <td>$1,500</td>
            </tr>
            <tr>
              <td>Neural Compute Stick</td>
              <td>USB-based deep learning accelerator</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Robotics Platform</td>
              <td>Programmable robot for AI applications</td>
              <td>$2,000</td>
            </tr>
            <tr>
              <td>GPU Server</td>
              <td>High-performance server with GPUs</td>
              <td>$10,000</td>
            </tr>
            <tr>
              <td>Edge AI Device</td>
              <td>AI processing at the edge</td>
              <td>$800</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>

  
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Contact Us for Technology Logistics</h2>
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
              <textarea class="form-control" id="cargo" rows="3" placeholder="Describe your technology cargo"></textarea>
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

export default Tech