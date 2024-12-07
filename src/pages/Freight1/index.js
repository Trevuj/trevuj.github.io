import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Freight1() {
  return (
    <AdminLayout>
        
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1 className="display-4">Air Freight Pricing List</h1>
      <p className="lead">Detailed pricing for international air freight services, including cargo charges, airport taxes, and handling fees. Delivering your cargo to any global destination swiftly and securely.</p>
    </div>
  </header>

  
  <section id="pricing" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Air Freight Pricing by Major Airports (Including Taxes and Charges)</h2>
      <p className="text-center mb-5">Explore our competitive air freight rates based on cargo weight, taxes, handling charges, and airport fees. We ensure seamless transportation between global hubs.</p>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Route</th>
              <th>Origin Airport</th>
              <th>Destination Airport</th>
              <th>Cargo Weight (per ton)</th>
              <th>Price (per ton) (USD)</th>
              <th>Airport Charges (USD)</th>
              <th>Cargo Handling Charges (USD)</th>
              <th>Taxes (%)</th>
              <th>Additional Information</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>Route 1</td>
              <td>LAX (Los Angeles, USA)</td>
              <td>JFK (New York, USA)</td>
              <td>1 ton</td>
              <td>$1,200</td>
              <td>$150</td>
              <td>$50</td>
              <td>5%</td>
              <td>Direct flight; no stopovers, quick clearance.</td>
            </tr>
            
            <tr>
              <td>Route 2</td>
              <td>ORD (Chicago, USA)</td>
              <td>LHR (London, UK)</td>
              <td>1 ton</td>
              <td>$2,400</td>
              <td>$300</td>
              <td>$80</td>
              <td>7%</td>
              <td>Premium service; includes expedited handling.</td>
            </tr>
          
            <tr>
              <td>Route 3</td>
              <td>DXB (Dubai, UAE)</td>
              <td>BOM (Mumbai, India)</td>
              <td>1 ton</td>
              <td>$1,800</td>
              <td>$180</td>
              <td>$70</td>
              <td>4%</td>
              <td>Fast customs clearance at both airports.</td>
            </tr>
            
            <tr>
              <td>Route 4</td>
              <td>SIN (Singapore)</td>
              <td>SYD (Sydney, Australia)</td>
              <td>1 ton</td>
              <td>$2,200</td>
              <td>$250</td>
              <td>$90</td>
              <td>6%</td>
              <td>Includes temperature-controlled cargo handling.</td>
            </tr>
            
            <tr>
              <td>Route 5</td>
              <td>FRA (Frankfurt, Germany)</td>
              <td>NRT (Tokyo, Japan)</td>
              <td>1 ton</td>
              <td>$3,000</td>
              <td>$350</td>
              <td>$100</td>
              <td>8%</td>
              <td>Additional charges for dangerous goods handling.</td>
            </tr>
            
            <tr>
              <td>Route 6</td>
              <td>PEK (Beijing, China)</td>
              <td>LAX (Los Angeles, USA)</td>
              <td>1 ton</td>
              <td>$2,800</td>
              <td>$320</td>
              <td>$90</td>
              <td>7%</td>
              <td>Handling charge includes customs clearance.</td>
            </tr>
            
            <tr>
              <td>Route 7</td>
              <td>JNB (Johannesburg, South Africa)</td>
              <td>LHR (London, UK)</td>
              <td>1 ton</td>
              <td>$2,900</td>
              <td>$300</td>
              <td>$80</td>
              <td>5%</td>
              <td>Delays may occur due to weather conditions.</td>
            </tr>
            
            <tr>
              <td>Route 8</td>
              <td>ATL (Atlanta, USA)</td>
              <td>GRU (São Paulo, Brazil)</td>
              <td>1 ton</td>
              <td>$3,200</td>
              <td>$350</td>
              <td>$110</td>
              <td>6%</td>
              <td>Additional airport charges for oversized cargo.</td>
            </tr>
            
            <tr>
              <td>Route 9</td>
              <td>YVR (Vancouver, Canada)</td>
              <td>HKG (Hong Kong)</td>
              <td>1 ton</td>
              <td>$2,700</td>
              <td>$330</td>
              <td>$100</td>
              <td>7%</td>
              <td>Dedicated cargo service with minimal delays.</td>
            </tr>
            
            <tr>
              <td>Route 10</td>
              <td>CDG (Paris, France)</td>
              <td>JFK (New York, USA)</td>
              <td>1 ton</td>
              <td>$2,500</td>
              <td>$280</td>
              <td>$85</td>
              <td>5%</td>
              <td>Fast track customs for priority shipments.</td>
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
            <h4>Cargo Weight & Pricing</h4>
            <p>Air freight pricing is based on cargo weight per ton. Pricing can vary depending on distance, route, and special handling requirements. The rates shown are for standard cargo services.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Taxes (TEX)</h4>
            <p>Taxes are applied based on the country and route. Rates typically range from 4% to 8%, as shown in the pricing table. Airport and government taxes may vary by destination.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box p-4 bg-white shadow-sm">
            <h4>Additional Charges</h4>
            <p>Airport charges and cargo handling fees are applicable to every shipment. These fees include airport facility usage, cargo unloading, and customs clearance handling where necessary.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    </AdminLayout>
  )
}

export default Freight1