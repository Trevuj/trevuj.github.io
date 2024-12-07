import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Freight2() {
  return (
    <AdminLayout>
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1 className="display-4">Shipping Freight Pricing List</h1>
      <p className="lead">Comprehensive shipping freight rates with container size, capacity, and vessel information. Move your cargo across the globe reliably and efficiently.</p>
    </div>
  </header>

  
  <section id="pricing" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Shipping Freight Pricing by Major Ports (Container Sizes and Vessel Names)</h2>
      <p className="text-center mb-5">Check out our detailed sea freight rates based on container sizes, weight capacities, and vessel names. We provide transparent pricing for seamless shipping between major ports worldwide.</p>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Route</th>
              <th>Origin Port</th>
              <th>Destination Port</th>
              <th>Vessel Name</th>
              <th>Container Size</th>
              <th>Capacity (in tons)</th>
              <th>Price (USD)</th>
              <th>Port Charges (USD)</th>
              <th>Cargo Handling Fees (USD)</th>
              <th>Taxes (%)</th>
              <th>Additional Information</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>Route 1</td>
              <td>Shanghai (China)</td>
              <td>Los Angeles (USA)</td>
              <td>Evergreen Marine</td>
              <td>40 ft</td>
              <td>25 tons</td>
              <td>$3,200</td>
              <td>$400</td>
              <td>$150</td>
              <td>6%</td>
              <td>Regular schedule, suitable for electronics and textiles.</td>
            </tr>
            
            <tr>
              <td>Route 2</td>
              <td>Hamburg (Germany)</td>
              <td>New York (USA)</td>
              <td>Maersk Line</td>
              <td>20 ft</td>
              <td>18 tons</td>
              <td>$2,800</td>
              <td>$350</td>
              <td>$100</td>
              <td>5%</td>
              <td>Expedited service with priority berthing.</td>
            </tr>
            
            <tr>
              <td>Route 3</td>
              <td>Singapore</td>
              <td>Dubai (UAE)</td>
              <td>Hapag-Lloyd</td>
              <td>40 ft</td>
              <td>30 tons</td>
              <td>$4,500</td>
              <td>$450</td>
              <td>$200</td>
              <td>7%</td>
              <td>Temperature-controlled containers available.</td>
            </tr>
            
            <tr>
              <td>Route 4</td>
              <td>Rotterdam (Netherlands)</td>
              <td>Santos (Brazil)</td>
              <td>COSCO Shipping</td>
              <td>20 ft</td>
              <td>16 tons</td>
              <td>$3,000</td>
              <td>$370</td>
              <td>$120</td>
              <td>5%</td>
              <td>Best for agricultural products and grains.</td>
            </tr>
            
            <tr>
              <td>Route 5</td>
              <td>Tokyo (Japan)</td>
              <td>Sydney (Australia)</td>
              <td>MOL (Mitsui O.S.K.)</td>
              <td>40 ft</td>
              <td>28 tons</td>
              <td>$4,800</td>
              <td>$500</td>
              <td>$180</td>
              <td>8%</td>
              <td>Includes dangerous goods handling charges.</td>
            </tr>
            
            <tr>
              <td>Route 6</td>
              <td>Dubai (UAE)</td>
              <td>Mumbai (India)</td>
              <td>OOCL (Orient Overseas)</td>
              <td>20 ft</td>
              <td>20 tons</td>
              <td>$2,600</td>
              <td>$300</td>
              <td>$110</td>
              <td>4%</td>
              <td>Short transit time, ideal for urgent cargo.</td>
            </tr>
            
            <tr>
              <td>Route 7</td>
              <td>Durban (South Africa)</td>
              <td>London (UK)</td>
              <td>CMA CGM</td>
              <td>40 ft</td>
              <td>26 tons</td>
              <td>$3,500</td>
              <td>$420</td>
              <td>$160</td>
              <td>6%</td>
              <td>Fast customs processing for general cargo.</td>
            </tr>
            
            <tr>
              <td>Route 8</td>
              <td>Hong Kong</td>
              <td>Vancouver (Canada)</td>
              <td>Yang Ming Marine</td>
              <td>40 ft</td>
              <td>27 tons</td>
              <td>$4,200</td>
              <td>$460</td>
              <td>$170</td>
              <td>7%</td>
              <td>Available with breakbulk cargo handling.</td>
            </tr>
            
            <tr>
              <td>Route 9</td>
              <td>Busan (South Korea)</td>
              <td>Long Beach (USA)</td>
              <td>APL (American President Lines)</td>
              <td>20 ft</td>
              <td>18 tons</td>
              <td>$2,900</td>
              <td>$380</td>
              <td>$130</td>
              <td>5%</td>
              <td>Seamless loading for oversized equipment.</td>
            </tr>
            
            <tr>
              <td>Route 10</td>
              <td>Sydney (Australia)</td>
              <td>Shanghai (China)</td>
              <td>MSC (Mediterranean Shipping Co.)</td>
              <td>40 ft</td>
              <td>29 tons</td>
              <td>$5,000</td>
              <td>$520</td>
              <td>$190</td>
              <td>8%</td>
              <td>Temperature-controlled and high-security cargo available.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section id="info" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Important Shipping Information</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Container Sizes and Capacities</h4>
            <p>We offer a variety of container sizes: 20 ft and 40 ft options. Container capacity ranges from 16 to 30 tons depending on the container and vessel type.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Taxes and Fees</h4>
            <p>Taxes vary from 4% to 8% depending on the origin and destination ports. Port charges and cargo handling fees are applied for each shipment, as shown in the pricing table.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Vessel Information</h4>
            <p>Our shipping routes use vessels from leading carriers such as Maersk, COSCO, Evergreen, and others. Vessel-specific information is provided to help plan your shipment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </AdminLayout>
  )
}

export default Freight2