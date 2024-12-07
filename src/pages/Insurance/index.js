import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Insurance() {
  const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', product_name: '', weight: '', destination: '', bank_name: '', cargo_serial_number: '', claim_period: ''});
  const navigate = useNavigate();
  const { id } = useParams();

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/insurance/${id}`).then(function (response) {
          setInputs(response.data.data);
      });
  }

  useEffect(() => {
      if (id) {
          getDatas();
      }
  }, []);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputs)

      try {
          let apiurl = '';
          if (inputs.id != '') {
              apiurl =`/insurance/edit/${inputs.id}`;
          } else {
              apiurl =`/insurance/create`;
          }

          let response = await axios({
              method: 'post',
              responsiveType: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs
          });
          navigate('/insurance')
      }
      catch (e) {
          console.log(e);
        }
      }

  return (
    <AdminLayout>
  <header class="py-5 bg-success text-white text-center">
    <div class="container">
      <h1>Insurance Policies</h1>
      <p>Comprehensive coverage for all your transportation needs</p>
    </div>
  </header>

  
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Highway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Highway transportation insurance protects against damage to goods during road transit. This policy covers accidents, theft, and weather damage that may affect the cargo being transported by trucks or trailers.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Airway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Airway transportation insurance offers protection for cargo during air transport. This coverage ensures compensation in the event of loss or damage to the goods due to air accidents, handling errors, or delays.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Seaway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Seaway insurance provides comprehensive protection for goods transported by sea. This includes coverage against piracy, rough weather, sinking, or damage during loading and unloading at ports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">File an Insurance Claim</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form onSubmit={handleSubmit}>
            
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
            </div>

            
            <div class="mb-3">
              <label for="company_name" class="form-label">Company Name</label>
              <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
            </div>

            
            <div class="mb-3">
              <label for="product" class="form-label">Product Name</label>
              <input defaultValue={inputs.product_name} name="product_name" onChange={handleChange} type="text" id="product_name" className="form-control" required />
            </div>

            
            <div class="mb-3">
              <label for="weight" class="form-label">Weight</label>
              <input defaultValue={inputs.weight} name="weight" onChange={handleChange} type="text" id="weight" className="form-control" required />
            </div>

            
            
            <div class="mb-3">
              <label for="destination" class="form-label">Destination</label>
              <input defaultValue={inputs.destination} name="destination" onChange={handleChange} type="text" id="destination" className="form-control" required />
            </div>

            <div class="mb-3">
              <label for="country" class="form-label">Bank Name</label>
              <input defaultValue={inputs.bank_name} name="bank_name" onChange={handleChange} type="text" id="bank_name" className="form-control" required />
            </div>

            
            <div class="mb-3">
              <label for="product" class="form-label">Cargo Serial Number</label>
              <input defaultValue={inputs.cargo_serial_number} name="cargo_serial_number" onChange={handleChange} type="text" id="cargo_serial_number" className="form-control" required/>
            </div>

            <div class="mb-3">
              <label for="product" class="form-label">Claim Period</label>
              <input defaultValue={inputs.claim_period} name="claim_period" onChange={handleChange} type="text" id="claim_period" className="form-control" required/>
            </div>
            

            
            <div class="d-grid">
              <button type="submit" class="btn btn-success btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </AdminLayout>
  );
}

export default Insurance
