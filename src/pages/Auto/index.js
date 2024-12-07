import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Auto() {
  return (
    <AdminLayout>
  
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1>Automotive Transportation</h1>
      <p className="lead">Safe and Efficient Shipping of Automotive Parts Globally</p>
      <a href="#auto-info" className="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="auto-info" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Automotive Parts & Prices</h2>
      <div className="table-responsive mb-5">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Part Name</th>
              <th>Description</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engine</td>
              <td>V8 Engine for high-performance cars</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>6-speed automatic transmission</td>
              <td>$2,500</td>
            </tr>
            <tr>
              <td>Brake Pads</td>
              <td>Ceramic brake pads for enhanced safety</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>Suspension</td>
              <td>Adjustable shock absorbers and struts</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>Exhaust System</td>
              <td>Stainless steel exhaust system</td>
              <td>$800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section id="distributors" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Country Distributors</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>USA</h4>
          <p>Distributor: Auto Parts Solutions, Inc.</p>
        </div>
        <div className="col-md-4">
          <h4>Germany</h4>
          <p>Distributor: German Auto Distributors GmbH</p>
        </div>
        <div className="col-md-4">
          <h4>Japan</h4>
          <p>Distributor: Nippon Auto Supplies Co., Ltd.</p>
        </div>
        <div className="col-md-4">
          <h4>UK</h4>
          <p>Distributor: British Auto Imports Ltd.</p>
        </div>
        <div className="col-md-4">
          <h4>India</h4>
          <p>Distributor: Bharat Motors Pvt. Ltd.</p>
        </div>
        <div className="col-md-4">
          <h4>Australia</h4>
          <p>Distributor: Aussie Automotive Solutions</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="loading-unloading" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Loading & Unloading Services</h2>
      <p>We offer secure loading and unloading services to ensure your automotive parts are transported safely and efficiently:</p>
      <ul>
        <li><strong>Loading:</strong> Our specialized loading equipment secures automotive parts to prevent damage during transport.</li>
        <li><strong>Unloading:</strong> At the destination port, we carefully unload and inspect the parts for any damage.</li>
      </ul>
    </div>
  </section>

  
  <section id="warehouse" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Warehouse Facilities & Charges</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Facility Type</th>
              <th>Capacity</th>
              <th>Charges (Per Day)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Storage</td>
              <td>Up to 1,000 kg</td>
              <td>$150/day</td>
            </tr>
            <tr>
              <td>Climate-Controlled Storage</td>
              <td>1,000-5,000 kg</td>
              <td>$300/day</td>
            </tr>
            <tr>
              <td>Heavy-Duty Storage</td>
              <td>5,000 kg and above</td>
              <td>$500/day</td>
            </tr>
            <tr>
              <td>Handling & Sorting</td>
              <td>-</td>
              <td>$100/day</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us for Automotive Logistics</h2>
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
              <textarea className="form-control" id="cargo" rows="3" placeholder="Describe your automotive cargo"></textarea>
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

export default Auto