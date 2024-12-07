import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Airfreight() {
    const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', flight_number: '', arrival_airport_name: '', insurance_number: ''});
    const navigate = useNavigate();
    const { id } = useParams();
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/airfreight/${id}`).then(function (response) {
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
                apiurl =`/airfreight/edit/${inputs.id}`;
            } else {
                apiurl =`/airfreight/create`;
            }
  
            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/airfreight')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
    
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Air Freight Booking</h1>

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
                    <label for="flight_number" class="form-label">Flight Number</label>
                    <input defaultValue={inputs.flight_number} name="flight_number" onChange={handleChange} type="text" id="flight_number" className="form-control" required />
                </div>

                <div class="col-md-6">
                    <label for="arrival_airport_name" class="form-label">Arrival Airport</label>
                   <input defaultValue={inputs.arrival_airport_name} name="arrival_airport_name" onChange={handleChange} type="text" id="arrival_airport_name" className="form-control" required />
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
                    <label for="pricePerCargo" class="form-label">Price per Cargo</label>
                    <input type="number" class="form-control" id="pricePerCargo" placeholder="Enter price per cargo"/>
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
                    <label for="containerSerial" class="form-label">Cargo Serial Number</label>
                    <input type="text" class="form-control" id="containerSerial" placeholder="Enter container serial number"/>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="shippingCost" class="form-label">Shipping Cost</label>
                    <input type="number" class="form-control" id="shippingCost" placeholder="Enter shipping cost"/>
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

export default Airfreight;
