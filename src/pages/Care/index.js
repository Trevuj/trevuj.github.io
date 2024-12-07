import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Care() {
  return (
    <AdminLayout>

  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Pharma & Healthcare Transportation</h1>
      <p class="lead">Safe and Reliable Shipping for Pharmaceutical and Healthcare Products</p>
      <a href="#pharma-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="pharma-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Managing Sensitive Pharma & Healthcare Products</h2>
      <div class="row">
        <div class="col-md-6">
          <p>Transporting pharmaceutical and healthcare products requires precision, care, and adherence to global regulatory standards. Our logistics solutions for this industry ensure temperature control, stability, and safety during transit. We specialize in handling sensitive products such as:</p>
          <ul>
            <li>**Temperature-Sensitive Pharmaceuticals**: Managed using advanced refrigerated containers to maintain cold chain integrity.</li>
            <li>**Medical Devices and Equipment**: Carefully packed and transported to ensure safety and compliance.</li>
            <li>**Vaccines and Biologics**: Transported under strict temperature-controlled conditions to prevent degradation.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://ecommercefastlane.com/wp-content/uploads/2024/08/Smart-warehouse-management-system-using-augmented-reality-technology.jpeg" width="500px" class="img-fluid" alt="Pharma & Healthcare Logistics"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="distribution" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Safe Loading and Global Distribution</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://www.letmeship.com/wp-content/uploads/2024/01/Refrigerated-transport-loading-1024x683.jpg" width="200px" alt="Loading" class="mb-3"/>
            <h5>Loading and Handling</h5>
            <p>Pharma and healthcare products are loaded in temperature-controlled containers with real-time monitoring to ensure safe transit.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://media.licdn.com/dms/image/D4D12AQGz4GiRXwH3Tw/article-cover_image-shrink_600_2000/0/1662619082922?e=2147483647&v=beta&t=3WHuHQqd7CBSWxYc_Kd5fgiPsQFXPSUyOdPegH-Oa70" width="200px" alt="Global Distribution" class="mb-3"/>
            <h5>Global Distribution Network</h5>
            <p>We distribute to key markets, including:</p>
            <ul class="list-unstyled">
              <li>United States</li>
              <li>Germany</li>
              <li>India</li>
              <li>Canada</li>
              <li>Brazil</li>
              <li>Japan</li>
              <li>Australia</li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://thumbs.dreamstime.com/z/dock-worker-carefully-loads-large-refrigerated-container-onto-ship-careful-not-to-damage-delicate-perishable-goods-inside-315169345.jpg" width="200px" alt="Compliance" class="mb-3"/>
            <h5>Compliance and Safety</h5>
            <p>Our logistics services comply with all international regulatory standards, ensuring that your healthcare products arrive safely and legally.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Contact Us for Pharma & Healthcare Logistics</h2>
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
              <textarea class="form-control" id="cargo" rows="3" placeholder="Describe your pharmaceutical cargo"></textarea>
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

export default Care