import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Air() {
  return (
    <AdminLayout>
  
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Freight Facilities</h1>
      <p class="lead">Efficient, Affordable, and Reliable Freight Load Solutions</p>
      <a href="#freight-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>


  <section id="freight-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Freight Load Options</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://www.agi.global/wp-content/uploads/2024/04/Air-Freight-101.png" width="250px" class="card-img-top" alt="Full Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Full Container Load (FCL)</h5>
              <p class="card-text">With FCL, you book the entire container for your shipment, ensuring minimal handling and reduced transit time. Perfect for large cargo loads.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://www.maersk.com/~/media_sc9/maersk/news/press-releases/images/2024/02/12/maersk-airfreight_1024x576.jpg?w=877&hash=70D6CBFD46A0D598660AFB0B64B6F07D" width="250px" class="card-img-top" alt="Less than Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Less than Container Load (LCL)</h5>
              <p class="card-text">For smaller shipments, LCL allows you to share container space with other cargo, making it a cost-effective solution without the need for a full container.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="pricing" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Freight Pricing Plans</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center h-100">
            <div class="card-header bg-primary text-white">
              <h3>Basic</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$500</h4>
              <p class="card-text">For small shipments under 500kg.</p>
              <ul class="list-unstyled">
                <li>Less than Container Load (LCL)</li>
                <li>Standard cargo handling</li>
                <li>1 Week delivery time</li>
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
              <h3>Standard</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$1200</h4>
              <p class="card-text">For shipments under 2000kg.</p>
              <ul class="list-unstyled">
                <li>Full Container Load (FCL)</li>
                <li>Priority handling</li>
                <li>5 Days delivery time</li>
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
              <h3>Premium</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$2500</h4>
              <p class="card-text">For large shipments over 2000kg.</p>
              <ul class="list-unstyled">
                <li>Full Container Load (FCL)</li>
                <li>Express handling</li>
                <li>3 Days delivery time</li>
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

  
  <section id="contact" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Get a Custom Quote</h2>
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
              <label for="cargo" class="form-label">Cargo Description</label>
              <textarea class="form-control" id="cargo" rows="3" placeholder="Describe your cargo"></textarea>
            </div>
            <button type="submit" class="btn btn-light w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>

    </AdminLayout>
  )
}

export default Air