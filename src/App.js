import * as React from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './pages/Container';
import Fmcg from './pages/Fmcg';
import Retail from './pages/Retail';
import Fashion from './pages/Fashion';
import Chemical from './pages/Chemical';
import Auto from './pages/Auto';
import Care from './pages/Care';
import Tech from './pages/Tech';
import Lcl from './pages/Lcl';
import Air from './pages/Air';
import House from './pages/House';
import Sailing from './pages/Sailing';
import Track from './pages/Track';
import Freight1 from './pages/Freight1';
import Freight2 from './pages/Freight2';
import Freight3 from './pages/Freight3';
import Insurance from './pages/Insurance';
import Airfreight from './pages/Airfreight';
import Sailingfreight from './pages/Sailingfreight';
import Highwayfreight from './pages/Highwayfreight';
import Warehouse from './pages/Warehouse';
// import Clogin from './pages/Clogin';
// import Signup from './pages/Signup';
import Forget from './pages/Forget';
import Staff from './pages/Staff';
import Vendors from './pages/Vendors';
import Freights from './pages/Freights';
import Forcast from './pages/Forcast';
import Calculator from './pages/Calculator';
import Alert from './pages/Alert';
import History from './pages/History';
import Showhistory from './pages/History/Showhistory';
function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Container" element={<Container />} />
          <Route path="/Fmcg" element={<Fmcg />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Chemical" element={<Chemical />} />
          <Route path="/Auto" element={<Auto />} />
          <Route path="/Care" element={<Care />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Lcl" element={<Lcl />} />
          <Route path="/Air" element={<Air />} />
          <Route path="/House" element={<House />} />
          <Route path="/Sailing" element={<Sailing />} />
          <Route path="/Track" element={<Track />} />
          <Route path="/Freight1" element={<Freight1 />} />
          <Route path="/Freight2" element={<Freight2 />} />
          <Route path="/Freight3" element={<Freight3 />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Airfreight" element={<Airfreight />} />
          <Route path="/Sailingfreight" element={<Sailingfreight />} />
          <Route path="/Highwayfreight" element={<Highwayfreight />} />
          <Route path="/Warehouse" element={<Warehouse />} />
          {/* <Route path="/clogin" element={<Clogin />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/Vendors" element={<Vendors />} />
          <Route path="/Freights" element={<Freights />} />
          <Route path="/Forcast" element={<Forcast />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Alert" element={<Alert />} />
          <Route path="/History" element={<History />} />
          <Route path={"/History/add"} element={<Showhistory />} />
          <Route path={"/History/edit/:id"} element={<Showhistory />} />
        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
