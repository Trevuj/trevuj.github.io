import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Highwayfreight() {
    const [inputs, setInputs] = useState({ id: '', name: '', company: '', vehicle_id: '', arrival_location: '', insurance_number: ''});
    const navigate = useNavigate();
    const { id } = useParams();
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/highwayfreight/${id}`).then(function (response) {
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
                apiurl =`/highwayfreight/edit/${inputs.id}`;
            } else {
                apiurl =`/highwayfreight/create`;
            }
  
            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/highwayfreight')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Highway Freight Booking</h1>
        <form onSubmit={handleSubmit}>
        <div class="row mb-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="company" class="form-label">Company Name</label>
                    <input defaultValue={inputs.company} name="company" onChange={handleChange} type="text" id="company" className="form-control" required />
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="vehicle_id" class="form-label">vehicle ID</label>
                    <input defaultValue={inputs.vehicle_id} name="vehicle_id" onChange={handleChange} type="text" id="vehicle_id" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="departurelocation" class="form-label">Departure Location</label>
                    <input type="text" class="form-control" id="departurelocation" placeholder="Location"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="arrival_location" class="form-label">Arrival Location</label>
                    <input defaultValue={inputs.arrival_location} name="arrival_location" onChange={handleChange} type="text" id="arrival_location" className="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="insurance_number" class="form-label">Insurance Number</label>
                    <input defaultValue={inputs.insurance_number} name="insurance_number" onChange={handleChange} type="text" id="insurance_number" className="form-control" required />
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="pricePerTon" class="form-label">Price per Ton</label>
                    <input type="number" class="form-control" id="pricePerTon" placeholder="Enter price per ton"/>
                </div>
                <div class="col-md-6">
                    <label for="totalAmount" class="form-label">Total Amount</label>
                    <input type="number" class="form-control" id="totalAmount" placeholder="Enter total amount"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productWeight" class="form-label">Product Weight (kg)</label>
                    <input type="number" class="form-control" id="productWeight" placeholder="Enter product weight"/>
                </div>
                <div class="col-md-6">
            <label for="truckType" class="form-label">Truck Type</label>
            <select id="truckType" class="form-select" required>
              <option value="">Select truck type</option>
              <option value="box">Box Truck</option>
              <option value="flatbed">Flatbed</option>
              <option value="tanker">Tanker</option>
              <option value="refrigerated">Refrigerated</option>
              <option value="container">Container</option>
            </select>
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

export default Highwayfreight;
