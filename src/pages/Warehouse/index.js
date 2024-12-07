import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Warehouse() {
    const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', category: '', product_details: '', insurance_number: '', invoice_number:''});
    const navigate = useNavigate();
    const { id } = useParams();
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/warehouse/${id}`).then(function (response) {
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
                apiurl =`/warehouse/edit/${inputs.id}`;
            } else {
                apiurl =`/warehouse/create`;
            }
  
            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/warehouse')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Warehouse Booking</h1>
        <form onSubmit={handleSubmit}>
        
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="company_name" class="form-label">Company Name</label>
                    <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="product_details" class="form-label">Product Details</label>
                    <input defaultValue={inputs.product_details} name="product_details" onChange={handleChange} type="text" id="product_details" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="category" class="form-label">Product Category</label>
                    <input defaultValue={inputs.category} name="category" onChange={handleChange} type="text" id="category" className="form-control" required />
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="insurance_number" class="form-label">Insurance Number</label>
                    <input defaultValue={inputs.insurance_number} name="insurance_number" onChange={handleChange} type="text" id="insurance_number" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="invoice_number" class="form-label">Invoice Number</label>
                    <input defaultValue={inputs.invoice_number} name="invoice_number" onChange={handleChange} type="text" id="invoice_number" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="totalAmount" class="form-label">Total Amount</label>
                    <input type="number" class="form-control" id="totalAmount" placeholder="Enter total amount"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="tollCost" class="form-label">Toll Cost</label>
                    <input type="number" class="form-control" id="tollCost" placeholder="Enter toll cost"/>
                </div>
                <div class="col-md-6">
                    <label for="tax" class="form-label">Tax</label>
                    <input type="number" class="form-control" id="tax" placeholder="Enter tax amount"/>
                </div>
            </div>
            <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Special Handling Requirements</legend>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="hazardousMaterials"/>
          <label class="form-check-label" for="hazardousMaterials">Hazardous Materials</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="temperatureControlled"/>
          <label class="form-check-label" for="temperatureControlled">Temperature Controlled</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="fragile"/>
          <label class="form-check-label" for="fragile">Fragile</label>
        </div>
      </fieldset>
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Payment Information</legend>
        <div class="mb-3">
          <label for="paymentMethod" class="form-label">Payment Method</label>
          <select id="paymentMethod" class="form-select" required>
            <option value="">Select payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
      </fieldset>
            <div class="row">
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-secondary w-100">Edit</button>
                </div>
            </div>
        </form>
    </div>
    </AdminLayout>
  );
}

export default Warehouse;
