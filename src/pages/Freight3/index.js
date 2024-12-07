import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Freight3() {
  return (
    <AdminLayout>
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1 className="display-4">Highway Freight Pricing List</h1>
      <p className="lead">Comprehensive pricing details for highway freight services, including container sizes and taxes. Efficient and affordable transportation across major routes.</p>
    </div>
  </header>

  
  <section id="pricing" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Freight Pricing by Major Routes (Including Taxes)</h2>
      <p className="text-center mb-5">Our services provide competitive pricing based on container sizes and taxes (TEX) for various routes. We ensure reliable freight services across different regions.</p>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Route</th>
              <th>Departure City</th>
              <th>Destination City</th>
              <th>Distance (KM)</th>
              <th>Estimated Time (Days)</th>
              <th>Price (20ft Container) (USD)</th>
              <th>Price (40ft Container) (USD)</th>
              <th>Taxes (TEX) (%)</th>
              <th>Additional Notes</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <td>Route 1</td>
              <td>Los Angeles, USA</td>
              <td>San Francisco, USA</td>
              <td>610</td>
              <td>1</td>
              <td>$450</td>
              <td>$750</td>
              <td>5%</td>
              <td>Year-round flat terrain; minimal traffic.</td>
            </tr>
      
            <tr>
              <td>Route 2</td>
              <td>New York, USA</td>
              <td>Chicago, USA</td>
              <td>1,270</td>
              <td>2</td>
              <td>$850</td>
              <td>$1,450</td>
              <td>7%</td>
              <td>Winter delays due to snow and icy conditions.</td>
            </tr>
        
            <tr>
              <td>Route 3</td>
              <td>Dallas, USA</td>
              <td>Houston, USA</td>
              <td>385</td>
              <td>1</td>
              <td>$300</td>
              <td>$500</td>
              <td>3%</td>
              <td>Heavy traffic during peak hours.</td>
            </tr>
        
            <tr>
              <td>Route 4</td>
              <td>Toronto, Canada</td>
              <td>Vancouver, Canada</td>
              <td>4,360</td>
              <td>6</td>
              <td>$2,100</td>
              <td>$3,600</td>
              <td>6%</td>
              <td>Mountainous terrain; extreme weather possible.</td>
            </tr>
        
            <tr>
              <td>Route 5</td>
              <td>Berlin, Germany</td>
              <td>Paris, France</td>
              <td>1,050</td>
              <td>2</td>
              <td>$900</td>
              <td>$1,500</td>
              <td>8%</td>
              <td>Delays due to border crossing checks.</td>
            </tr>
        
            <tr>
              <td>Route 6</td>
              <td>Sydney, Australia</td>
              <td>Melbourne, Australia</td>
              <td>870</td>
              <td>1</td>
              <td>$500</td>
              <td>$850</td>
              <td>4%</td>
              <td>Low traffic; smooth highway.</td>
            </tr>
    
            <tr>
              <td>Route 7</td>
              <td>Beijing, China</td>
              <td>Shanghai, China</td>
              <td>1,200</td>
              <td>2</td>
              <td>$850</td>
              <td>$1,400</td>
              <td>5%</td>
              <td>Heavy traffic in industrial zones.</td>
            </tr>
          
            <tr>
              <td>Route 8</td>
              <td>Mumbai, India</td>
              <td>Delhi, India</td>
              <td>1,460</td>
              <td>3</td>
              <td>$950</td>
              <td>$1,600</td>
              <td>9%</td>
              <td>Delays during monsoon season.</td>
            </tr>
        
            <tr>
              <td>Route 9</td>
              <td>Cape Town, South Africa</td>
              <td>Johannesburg, South Africa</td>
              <td>1,400</td>
              <td>3</td>
              <td>$1,000</td>
              <td>$1,700</td>
              <td>6%</td>
              <td>Rugged terrain; ensure proper packaging.</td>
            </tr>
          
            <tr>
              <td>Route 10</td>
              <td>Rio de Janeiro, Brazil</td>
              <td>São Paulo, Brazil</td>
              <td>430</td>
              <td>1</td>
              <td>$400</td>
              <td>$700</td>
              <td>4%</td>
              <td>High traffic due to industrial zones.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section id="info" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Important Information</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Container Sizes</h4>
            <p>We provide both 20ft and 40ft container sizes for all routes. Prices vary depending on the route, container size, and additional services required.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Taxes (TEX)</h4>
            <p>Taxes vary depending on the country and route. Rates typically range from 3% to 9%, as shown in the pricing table.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Additional Services</h4>
            <p>Additional services, such as insurance, expedited shipping, and customs clearance, are available upon request. These services may incur extra costs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </AdminLayout>
  )
}

export default Freight3