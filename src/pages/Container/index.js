import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Container() {
  return (
    <AdminLayout>
 
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1>OCEAN TRANSPORT CONTAINER</h1>
      <p className="lead">Efficient and Secure Transportation of Goods Across the Seas</p>
      <a href="#services" className="btn btn-light btn-lg">Explore Services</a>
    </div>
  </header>

  
  <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Transportation Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://www.one-line.com/sites/g/files/lnzjqr776/files/inline-images/bg.jpg" width="200px" height="250px" className="card-img-top" alt="Container Shipping"/>
            <div className="card-body">
              <h5 className="card-title">Container Shipping</h5>
              <p className="card-text">We provide containerized shipping solutions to ensure your goods are transported safely across the world, using our vast fleet of ocean vessels.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://image.cnbcfm.com/api/v1/image/107149511-1668071326472-gettyimages-997042320-148347209.jpeg?v=1668140224" width="200px" height="250px" className="card-img-top" alt="Bulk Cargo"/>
            <div className="card-body">
              <h5 className="card-title">Bulk Cargo Shipping</h5>
              <p className="card-text">Our specialized bulk shipping services handle large quantities of goods like raw materials and bulk liquids, ensuring efficient transport and handling.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://containerwest.com/wp-content/uploads/2022/06/refrigerated-container7.jpg" width="250px" height="250px" className="card-img-top" alt="Refrigerated Shipping"/>
            <div className="card-body">
              <h5 className="card-title">Refrigerated Shipping</h5>
              <p className="card-text">Transport perishable goods with our state-of-the-art refrigerated containers, maintaining product integrity from origin to destination.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Logistics Facilities</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Global Warehousing</h3>
          <p>Our warehousing solutions span the globe, offering secure storage and inventory management to ensure that your goods are stored safely at every step of the journey.</p>
        </div>
        <div className="col-md-6">
          <h3>Customs Clearance & Documentation</h3>
          <p>We provide comprehensive customs clearance and documentation services, ensuring your cargo meets all regulatory requirements, making the shipping process smooth and stress-free.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Tracking & Visibility</h3>
          <p>Stay informed with real-time tracking and visibility on your shipments, ensuring you always know the status and location of your goods, from dispatch to delivery.</p>
        </div>
        <div className="col-md-6">
          <h3>24/7 Customer Support</h3>
          <p>Our customer support team is available 24/7 to assist you with any inquiries, providing expert assistance for all your logistics needs, day or night.</p>
        </div>
      </div>
    </div>
  </section>

    </AdminLayout>
  )
}

export default Container