import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useLocation, Link} from 'react-router-dom';

function Dashboard() {
  const activeMenu = (e) => {
    document.querySelectorAll('.submenu').forEach(
        function (e) {
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if (childElement && childElement.classList.contains('submenu')) {
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
  return (
    <AdminLayout>
        {/* Hero Section */}
  <section id="hero" className="hero section accent-background">

<div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

  <div className="carousel-item active">
    <img src="https://geodis.com/se/sites/default/files/styles/w1000xh500/public/2022-02/air-ocean_blog.jpg.webp?itok=O03kgRjE" alt=""/>
    <div className="carousel-container">
      <h2>Welcome to ThiKana</h2>
      <p>"And O my people, give full measure and weight in justice and do not deprive the people of their due and do not commit abuse on the earth, spreading corruption" Surah:Hud-85 </p>
      <a href="#featured-services" className="btn-get-started">Get Started</a>
    </div>
  </div>{/* End Carousel Item */}

</div>

</section>{/* /Hero Section */}

{/* Featured Services Section */}
<section id="featured-services" className="featured-services section light-background">

<div className="container">

  <div className="row gy-4">

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-activity icon"></i></div>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Sailing")}`}>
                  <Link to="/Sailing" className="sidebar-link">Schedules</Link></h4>
        <p>As markets change constantly, you need a logistical solution that is reliable and mitigates uncertainty without compromising on your convenience.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Clogin")}`}>
                  <Link to="/Clogin" className="sidebar-link">Connect to ThiKana</Link></h4>
        <p>Receive emissions reporting and optimisation insights across all carriers and modes.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
        <h4><a href="https://www.maersk.com/newpaths/#discover-what-truly-integrated-logistics-is-all-about" className="stretched-link">Who we are!</a></h4>
        <p>Global logistics at your fingertips.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-broadcast icon"></i></div>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Track")}`}>
                  <Link to="/Track" className="sidebar-link">Cargo Tracking</Link></h4>
        <p>Streamline your B2B data transfers to make faster and more informed decisions.</p>
      </div>
    </div>{/* End Service Item */}

  </div>

</div>

</section>{/* /Featured Services Section */}

{/* About Section */}
<section id="about" className="about section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>About Us</h2>
  <p>Logistics made easy through digital solutions</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row gy-4">
    <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
      <img src="assests/img/about.jpg" className="img-fluid" alt=""/>
      <a href="https://youtu.be/L6lVAMJzRGo?si=yY2YDo97flVRmIJ_" className="glightbox pulsating-play-btn"></a>
    </div>
    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
      <h3>True industry-leading customer experience isn’t a vision. It’s a passion. A passion for our customers whose business is dependent on moving the right products to the right market at the right time.</h3>
      <p className="fst-italic">
      With the new East West network, our ambition is to deliver a flexible and well-connected ocean network that aims to provide unmatched and industry-leading reliability above 90 percent (as measured by SeaIntel) when the new network is fully phased in.
      </p>
      <ul>
        <li><i className="bi bi-check2-all"></i> <span>An intuitive platform to manage all your shipments and tasks in one place.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Instant and transparent prices so you can plan and budget with peace of mind.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Book shipments in just a few steps and easily add extra services like inland transportation and customs services.</span></li>
      </ul>
      <p>
        Crown Go is for small and medium businesses looking for simple and reliable global transportation solutions. You don’t need to be a shipping expert to get started with Crown Go.
      </p>
    </div>
  </div>

</div>

</section>{/* /About Section */}

{/* Why Us Section */}
<section id="why-us" className="why-us section">

<div className="container">

  <div className="row no-gutters">

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="100">
      <span>01</span>
      <h4>Automotive logistics services</h4>
      <p>At Maersk, we ensure that your automotive logistics runs smoothly by making sure that your components, technology and raw materials are always at hand to keep your assembly line moving.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="200">
      <span>02</span>
      <h4>Industry sectors</h4>
      <p>Regardless of your industry, your commodity, or your key markets, Maersk offers global and local logistics solutions that enable small and large businesses to grow. </p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="300">
      <span>03</span>
      <h4>Creating services tailored to you</h4>
      <p>From plastics to paint, beauty to home care products and even automotive parts, the chemical supply chain comprises a myriad of products.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="400">
      <span>04</span>
      <h4>End-to-end control of your retail supply chain</h4>
      <p>Access the key enablers for a reliable supply chain to drive precision and deliver personalised customer experiences throughout your retail supply chain process flow.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="400">
      <span>05</span>
      <h4>Supply Chain Services</h4>
      <p>Maersk provides a range of integrated supply chain and logistics products designed to meet the needs of all types of businesses. Contact us today and learn how we can help you adapt to the ever-changing demands of global supply chains.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="600">
      <span>06</span>
      <h4>E-Commerce Logistics</h4>
      <p>Optimise your end-to-end e-commerce logistics, with order fulfilment, last-mile&nbsp;and cross-border delivery.</p>
    </div>{/* End Card Item */}

  </div>

</div>

</section>{/* /Why Us Section */}

{/* Clients Section */}
<section id="call-to-action" className="call-to-action section accent-background">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h3>Notify Your Status</h3>
        <p>Please let us know about your Scenarios </p>
      </div>
      <div className="col-12 d-flex justify-content-between align-items-center">
      <a onClick={activeMenu} className={`cta-btn align-middle btn-vendors sidebar-item ${isLinkActive("/Staff")}`}>
      <Link to="/Staff" className="sidebar-link text-white">Staffs</Link> </a>
        <a onClick={activeMenu} className={`cta-btn align-middle btn-vendors sidebar-item ${isLinkActive("/Vendors")}`}>
          <Link to="/Vendors" className="sidebar-link text-white">Vendors</Link>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="services section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Logistics Solutions</h2>
  <p>We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping. This is why we offer solutions addressing the entire product journey</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row g-5">

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item item-cyan position-relative">
        <i className="bi bi-activity icon"></i>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Forcast")}`}>
            <Link to="/Forcast" className="sidebar-link">Environmental Impact Tracker</Link></h4>
        <p>Build robust processes and business continuity plans within your supply chain to be able to bounce back from disruptions.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item item-orange position-relative">
        <i className="bi bi-broadcast icon"></i>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Calculator")}`}>
        <Link to="/Calculator" className="sidebar-link">Cost Calculator</Link></h4>
        <p>Empowering you with the ability to place inventory according to market demand rather than building buffer inventory.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item item-teal position-relative">
        <i className="bi bi-easel icon"></i>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Alert")}`}>
        <Link to="/Alert" className="sidebar-link">Notifications</Link></h4>
        <p>Increase inventory speed to market, ensuring that your product gets to the shelves precisely on time and as planned.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item item-red position-relative">
        <i className="bi bi-bounding-box-circles icon"></i>
        <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/History")}`}>
        <Link to="/History" className="sidebar-link">Order History</Link></h4>
        <p>Reduce frictions within your supply chain with fewer handovers thanks to a reliable partner who ensures cost-efficiency.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div className="service-item item-indigo position-relative">
        <i className="bi bi-calendar4-week icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Customisation</a></h3>
        <p>Experience customised processes with seamless system data communication between our systems and yours.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div className="service-item item-pink position-relative">
        <i className="bi bi-chat-square-text icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Sustainability</a></h3>
        <p>Get better alternatives to specific supply chain processes to help your businesses’ overall sustainability goals.</p>
      </div>
    </div>{/* End Service Item */}

  </div>

</div>

</section>{/* /Services Section */}

{/* Call To Action Section */}
<section id="call-to-action" className="call-to-action section accent-background">

  <div className="container">

    <div className="row" data-aos="zoom-in" data-aos-delay="100">
      <div className="col-xl-9 text-center text-xl-start">
        <h3>Call To Action</h3>
        <p>Nature Avobe all, Be Sustainable with Diadem Marine CORP.</p>
      </div>
      <div className="col-xl-3 cta-btn-container text-center">
        <a className="cta-btn align-middle" href="/Insurance">Insurance</a>
          <a onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Insurance")}`}>
            <Link to="/Insurance" className="sidebar-link"></Link></a>
      </div>
    </div>
  </div>

</section>{/* /Call To Action Section */}


{/* Portfolio Section */}
<section id="portfolio" className="portfolio section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Services</h2>
  <p>From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller - Maersk is developing solutions that meet customer needs from one end of the supply chain to the other.</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" className="filter-active"><i>A House Of Freight Specialist!</i></li>
    </ul>{/* End Portfolio Filters */}

    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-1.jpg" width="400px" height="100px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Container")}`}>
            <Link to="/Container" className="sidebar-link">Ocean Transport Container</Link></h4>
            <p>Efficient and Secure Transportation of Goods Across the Seas</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-1.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Auto")}`}>
            <Link to="/Auto" className="sidebar-link">Automotive</Link></h4>
            <p>Safe and Efficient Shipping of Automotive Parts Globally</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/branding-1.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Retail")}`}>
            <Link to="/Retail" className="sidebar-link">Retail</Link></h4>
            <p>Efficient and Secure Retail Shipping Solutions Worldwide</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/books-1.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Air")}`}>
            <Link to="/Air" className="sidebar-link">Air Freight</Link></h4>
            <p>Efficient, Affordable, and Reliable Freight Load Solutions</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-2.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 href="portfolio-details.html" title="More Details">Industry</h4>
            <p>Regardless of your industry, your commodity, or your key markets, Maersk offers global and local logistics solutions that enable small and large businesses to grow.</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-2.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Care")}`}>
            <Link to="/Care" className="sidebar-link">Pharma & Helthcare</Link></h4>
            <p>Safe and Reliable Shipping for Pharmaceutical and Healthcare Products</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="https://img.freepik.com/premium-photo/modern-clothing-store-with-neon-lights-cyber-monday-generated-by-ai_664580-606.jpg?w=360" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Fashion")}`}>
            <Link to="/Fashion" className="sidebar-link">Fashion & Life Style</Link></h4>
            <p>Streamlined Solutions for Your Fashion and Lifestyle Products</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="" data-gallery="portfolio-gallery-app" className="glightbox"><img src="https://ware2go.co/wp-content/uploads/2021/07/image-1200x800-1.jpeg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/House")}`}>
            <Link to="/House" className="sidebar-link">Warehousing and Distribution</Link></h4>
            <p>Reliable Global Warehousing and Efficient Distribution for All Your Cargo Needs</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-3.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Lcl")}`}>
            <Link to="/Lcl" className="sidebar-link">Less-than-Container Load (LCL)</Link></h4>
            <p>Comprehensive Guide to Full Container Load (FCL) and Less than Container Load (LCL) Shipping</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-3.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Tech")}`}>
            <Link to="/Tech" className="sidebar-link">Technology</Link></h4>
            <p>Safe and Efficient Shipping for High-Tech Products Globally</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/branding-3.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Chemical")}`}>
            <Link to="/Chemical" className="sidebar-link">Chemical</Link></h4>
            <p>Safe and Secure Transport of Chemical Materials Worldwide</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/books-3.jpg" width="400px" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4 onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Fmcg")}`}>
            <Link to="/Fmcg" className="sidebar-link">FMCG</Link></h4>
            <p>Efficient, Secure, and Fast Delivery Solutions for Your FMCG Needs</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

    </div>{/* End Portfolio Container */}

  </div>

</div>

</section>{/* /Portfolio Section */}

{/* Team Section */}
<section id="team" className="team section light-background">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Freight Fees</h2>
  <p>The cost of freight in is a portion of the cost of goods sold that include the cost of raw supplies, shipping fees, and other transportation-related costs. </p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row">

    <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <img src="https://highwaymotor.com/wp-content/uploads/2020/05/1.jpg" className="img-fluid" alt=""/>
        <div className="member-content">
        <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Freight3")}`}>
        <Link to="/Freight3" className="sidebar-link"><h4>Highway Freight</h4></Link></p>
              <span>Our services provide competitive pricing based on container sizes and taxes (TEX) for various routes. We ensure reliable freight services across different regions.</span>

        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-4 col-md-6 d-flex " data-aos="fade-up" data-aos-delay="200">
      <div className="member">
        <img src="https://www.carseurope.net/wp-content/uploads/2015/06/car-sea-freight1.jpg" className="img-fluid" alt=""/>
        <div className="member-content">
        <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Freight2")}`}>
        <Link to="/Freight2" className="sidebar-link"><h4>Shipping Freight</h4></Link></p>
          <span>Comprehensive shipping freight rates with container size, capacity, and vessel information. Move your cargo across the globe reliably and efficiently.</span>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
      <div className="member">
        <img src="https://www.maersk.com/~/media_sc9/maersk/solutions/transportation-services/air-freight/media-folder/air-freight-services_720x405_v3.jpg?h=405&w=720&hash=4F74EC323DD1457F5CE960D733C8B3DB" width="600px" className="img-fluid" alt=""/>
        <div className="member-content">
        <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Freight1")}`}>
        <Link to="/Freight1" className="sidebar-link"><h4>Air Freight</h4></Link></p>
          <span>Explore our competitive air freight rates based on cargo weight, taxes, handling charges, and airport fees. We ensure seamless transportation between global hubs.</span>
        </div>
      </div>
    </div>{/* End Team Member */}

  </div>

</div>

</section>{/* /Team Section */}

{/* Contact Section */}
<section id="contact" className="contact section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Complaint Box</h2>
  <p>The worst person to be around is the one who complains about everything and appreciates nothing; The Unhappy, Negative Soul who is quick to find fault with even the best of intentions.</p>
</div>{/* End Section Title */}

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-5">

      <div className="info-wrap">
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>A.K khan Road, Akborhsha, Chittagong</p>
          </div>
        </div>{/* End Info Item */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p>+8809696426844</p>
          </div>
        </div>{/* End Info Item */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p>crowncorp@yahoo.com</p>
          </div>
        </div>{/* End Info Item */}

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>

    <div className="col-lg-7">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">Your Name</label>
            <input type="text" name="name" id="name-field" className="form-control" required=""/>
          </div>

          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">Your Email</label>
            <input type="email" className="form-control" name="email" id="email-field" required=""/>
          </div>

          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
          </div>

          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">Message</label>
            <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>{/* End Contact Form */}

  </div>

</div>

</section>{/* /Contact Section */}
    </AdminLayout>
  )
}

export default Dashboard