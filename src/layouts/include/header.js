import { useLocation, Link} from 'react-router-dom';
import React from 'react';

function Header() {
  
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
  
    <header id="header" className="header sticky-top">
    <div className="topbar d-flex align-items-center accent-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">ahmedmukut19@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+08801400170806</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="index.html" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="index.html" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="index.html" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="index.html" className="linkedin"><i className="bi bi-linkedin"></i></a>
        
        </div>
      </div>
    </div>{/* End Top Bar */}
    
    <div className="branding d-flex align-items-cente">
    
      <div className="container position-relative d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          
          <h1 className="sitename">THIKANA LOGISTICS LTD.</h1>
          </Link>
    
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Logistics Solutions</a></li>
            <li><a href="#portfolio">Services</a></li>
            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/freights")}`}>
                  <Link to="/freights" className="sidebar-link">Order Here</Link>
            </li>
            <li><a href="#contact">Box</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
    
      </div>
    
    </div>
    
          </header> 
  )
}

export default Header