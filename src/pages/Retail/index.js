import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Retail() {
  return (
    <AdminLayout>
  
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Retail Ocean Transportation</h1>
      <p class="lead">Efficient and Secure Retail Shipping Solutions Worldwide</p>
      <a href="#retail-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="retail-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Retail Facilities</h2>
      <div class="row">
        <div class="col-md-6">
          <p>We provide specialized logistics services to meet the needs of retail companies. Our advanced facilities ensure seamless supply chain management and efficient handling of high-volume retail goods. Our retail logistics services include:</p>
          <ul>
            <li>Warehousing solutions with inventory management systems for real-time stock updates.</li>
            <li>Cross-docking facilities to minimize storage time and expedite delivery.</li>
            <li>Handling of both small and large retail shipments with precision and care.</li>
            <li>Real-time tracking and reporting for complete visibility on all shipments.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://media.licdn.com/dms/image/D5612AQGt8PnxxoDrWA/article-cover_image-shrink_720_1280/0/1673846621210?e=2147483647&v=beta&t=n2min8PdcOIkktgLC3gi4ZsHSvp48jP9UazP-U4vDQg" width="500px" class="img-fluid" alt="Retail Warehouse"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="pricing" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Retail Shipping Pricing</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center h-100">
            <div class="card-header bg-primary text-white">
              <h3>Small Retail Shipments</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$500</h4>
              <p class="card-text">For shipments up to 500kg</p>
              <ul class="list-unstyled">
                <li>Standard retail handling</li>
                <li>Less than Container Load (LCL)</li>
                <li>2-week delivery time</li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary w-100">Select Plan</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center h-100">
            <div class="card-header bg-success text-white">
              <h3>Medium Retail Shipments</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$1200</h4>
              <p class="card-text">For shipments between 500kg and 3000kg</p>
              <ul class="list-unstyled">
                <li>Temperature-controlled containers available</li>
                <li>Full Container Load (FCL)</li>
                <li>1-week delivery time</li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-success w-100">Select Plan</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center h-100">
            <div class="card-header bg-danger text-white">
              <h3>Large Retail Shipments</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$2500</h4>
              <p class="card-text">For shipments over 3000kg</p>
              <ul class="list-unstyled">
                <li>Priority retail handling</li>
                <li>Customizable distribution options</li>
                <li>Express delivery within 5-7 days</li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-danger w-100">Select Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="distribution" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Retail Distribution Methods</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://pub.mdpi-res.com/sustainability/sustainability-14-06529/article_deploy/html/images/sustainability-14-06529-g003.png?1653572350" width="100px" alt="Standard Distribution" class="mb-3"/>
            <h5>Standard Distribution</h5>
            <p>Ideal for general retail goods, standard distribution ensures your products reach their destination efficiently and securely via Less than Container Load (LCL) services.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://www.researchgate.net/profile/John-Aloysius/publication/346441489/figure/fig2/AS:969986923323396@1608274312553/Closed-loop-sustainable-retail-supply-chain-the-circular-economy_Q320.jpg" width="100px" alt="Palletized Distribution" class="mb-3"/>
            <h5>Palletized Distribution</h5>
            <p>Suitable for medium-to-large shipments, palletized distribution speeds up handling and minimizes product damage during transportation.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://community.sap.com/legacyfs/online/storage/blog_attachments/2023/06/Circular-Economy-1.png" width="100px" alt="Custom Distribution" class="mb-3"/>
            <h5>Custom Distribution</h5>
            <p>For specialized retail goods, we offer custom distribution solutions tailored to meet specific delivery requirements, ensuring products are handled with the utmost care.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Contact Us for Tailored Solutions</h2>
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
              <textarea class="form-control" id="cargo" rows="3" placeholder="Describe your retail cargo"></textarea>
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

export default Retail