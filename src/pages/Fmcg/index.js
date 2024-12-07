import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Fmcg() {
  return (
    <AdminLayout>
           
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1>FMCG - Fast-Moving Consumer Goods</h1>
      <p className="lead">Efficient, Secure, and Fast Delivery Solutions for Your FMCG Needs</p>
      <a href="#fmcg-info" className="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="fmcg-info" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">FMCG Facilities</h2>
      <div className="row">
        <div className="col-md-6">
          <p>Our logistics services cater to a wide range of FMCG products, ensuring fast, reliable, and temperature-controlled transportation for perishables and other goods. Our services include:</p>
          <ul>
            <li>Refrigerated containers for temperature-sensitive items like dairy, meat, and beverages.</li>
            <li>Expedited delivery routes to reduce shelf-life deterioration and ensure freshness.</li>
            <li>Advanced tracking for real-time monitoring of your shipments.</li>
            <li>Global distribution hubs to facilitate fast delivery across regions.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*oBIuRgIr1n7ox8lS" width="500px" className="img-fluid" alt="FMCG Warehouse"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="pricing" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">FMCG Pricing Plans</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-header bg-primary text-white">
              <h3>Basic Plan</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">$800</h4>
              <p className="card-text">For small FMCG shipments under 1000kg.</p>
              <ul className="list-unstyled">
                <li>Standard loading</li>
                <li>Less than Container Load (LCL)</li>
                <li>2-week delivery time</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary w-100">Select Plan</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-header bg-success text-white">
              <h3>Standard Plan</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">$1500</h4>
              <p className="card-text">For shipments between 1000kg and 5000kg.</p>
              <ul className="list-unstyled">
                <li>Temperature-controlled containers</li>
                <li>Full Container Load (FCL)</li>
                <li>1-week delivery time</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-success w-100">Select Plan</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-header bg-danger text-white">
              <h3>Premium Plan</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">$3000</h4>
              <p className="card-text">For large shipments over 5000kg.</p>
              <ul className="list-unstyled">
                <li>Priority handling</li>
                <li>Customizable shipping options</li>
                <li>Express delivery within 3-5 days</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-danger w-100">Select Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="loading-methods" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">FMCG Loading Methods</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://cdn-trans.info/uploads/2019/07/8f57951d5f61f23999949a487ed.jpg" width="200px" alt="Standard Loading" className="mb-3"/>
            <h5>Standard Loading</h5>
            <p>For general FMCG goods, standard loading ensures quick and efficient packing with optimal container utilization.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://www.transportify.com.ph/wp-content/uploads/sites/5/2020/11/supply-chain-solutions-fmcg-company-delivery-app-og-1.jpg" width="200px" alt="Palletized Loading" className="mb-3"/>
            <h5>Palletized Loading</h5>
            <p>Ideal for large FMCG loads, palletized loading ensures fast handling, proper stacking, and increased cargo protection.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon-box text-center">
            <img src="https://www.logisticsmiddleeast.com/2021/07/GAC-Contract-Logistics-MEA18.jpg" width="200px" alt="Temperature-Controlled Loading" className="mb-3"/>
            <h5>Temperature-Controlled Loading</h5>
            <p>For perishable FMCG items, temperature-controlled loading ensures your goods are kept at the right temperature throughout the journey.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us for Custom Solutions</h2>
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
              <label for="cargo" className="form-label">Cargo Details</label>
              <textarea className="form-control" id="cargo" rows="3" placeholder="Describe your FMCG cargo"></textarea>
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

export default Fmcg