import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Freight() {
  const [inputs, setInputs] = useState({ id: '', email:'', contact_no:'', customer_id: '', address:'',  shipment_type: '', item:'', pickup_location: '', total_qty: '', pickup_time: '', transport_type_id: '', delivery_location: '', delivery_time: ''});
  const [checkReadonly, setcheckReadonly] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const[customer, setCustomer] = useState([]);
  const[transport_type, setTransportType] = useState([]);

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/freights/${id}`).then(function (response) {
      setInputs(response.data.data);
    });
  }

  const getRelational = async () => {
    try {
        const customerResponse = await axios.get(`${process.env.REACT_APP_API_URL}/customer`);
        const TransporttypeResponse = await axios.get(`${process.env.REACT_APP_API_URL}/Transporttype`);
        setCustomer(customerResponse.data.data);
        setTransportType(TransporttypeResponse.data.data);
    } catch (error) {
        console.error("Error fetching relational data", error);
    }
  };

  useEffect(() => {
    if (id) {
      getDatas();
    }
    getRelational();
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
      let apiurl = `/freights/create`;
      
      let response = await axios({
          method: 'post',
          responsiveType: 'json',
          url: `${process.env.REACT_APP_API_URL}${apiurl}`,
          data: inputs
      });
      navigate('/')
    }catch (e) {
      console.log(e);
    }
  }

  const checkCustomer = async (e) => {
    e.preventDefault();

    try {
      let apiurl =`/freights/check_customer`;

      // setcheckReadonly(null);
      // setInputs(values => ({ ...values, ['customer_id']: '' }));
      // setInputs(values => ({ ...values, ['address']: '' }));
      // setInputs(values => ({ ...values, ['shipment_type']: '' }));
      // setInputs(values => ({ ...values, ['item']: '' }));
      // setInputs(values => ({ ...values, ['pickup_location']: '' }));
      // setInputs(values => ({ ...values, ['total_qty']: '' }));
      // setInputs(values => ({ ...values, ['pickup_time']: '' }));
      // setInputs(values => ({ ...values, ['transporttype']: '' }));
      // setInputs(values => ({ ...values, ['delivery_location']: '' }));
      // setInputs(values => ({ ...values, ['delivery_time']: '' }));

      let response = await axios({
        method: 'post',
        responsiveType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });

      if(response.data.data){
        setInputs(response.data.data);
        setcheckReadonly(true);
      }
    }catch (e) {
      console.log(e);
    }
  }
  return (
    <AdminLayout>
      <div class="container my-5">
        <h2 class="text-center mb-4">Shipment Order Form</h2>
        <form onSubmit={handleSubmit}>
          <fieldset class="border p-4 mb-4">
          <h3>Search your Order</h3>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" name="email" onBlur={checkCustomer} onChange={handleChange} placeholder="Enter email address" required />
              </div>

              <div class="col-md-6">
                <label for="contact_no" class="form-label">Phone Number</label>
                <input type="text" class="form-control" name="contact_no" onBlur={checkCustomer} onChange={handleChange} placeholder="Enter phone number" required />
              </div>
            </div>
          </fieldset>

          <fieldset class="border p-4 mb-4">
            <legend class="w-auto px-2">Company Information</legend>
            <div class="row mb-3">
            <div className="col-md-6">
            <label htmlFor="customer_id" className="form-label">Company Name</label>
            {customer.length > 0 && (
                <select className="form-control" id="customer_id" name="customer_id" defaultValue={inputs.company_name} onChange={handleChange}>
                    <option value="">Select Company</option>
                    {customer.map((d, key) => (
                        <option key={key} value={d.id}>{d.company_name}</option>
                    ))}
                </select>
            )}
        </div>

              <div class="col-md-6">
                <label for="address" class="form-label">Company Address</label>
                <input type="text" defaultValue={inputs.address} readOnly={checkReadonly} name="address" onChange={handleChange} class="form-control" id="address" placeholder="Enter company address" required/>
              </div>
            </div>
          </fieldset>

          <fieldset className="border p-4 mb-4">
        <legend className="w-auto px-2">Shipment Details</legend>
        <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="shipment_type" className="form-label">Shipment Type</label>
                <select defaultValue={inputs.shipment_type} onChange={handleChange} name="shipment_type" className="form-control">
                    <option value="">Select One</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Sailing Freight">Sailing Freight</option>
                    <option value="Highway Freight ">Highway Freight</option>
                </select>
            </div>

            <div className="col-md-6">
                <label htmlFor="item" className="form-label">Items</label>
                <input defaultValue={inputs.item} name="item" onChange={handleChange} type="text" id="item" className="form-control"  placeholder="Enter your items" required />
            </div>
          </div>

        <div className="row mb-3">
          <div className="col-md-6">
                <label htmlFor="cargoDescription" className="form-label">Cargo Description</label>
                <input type="text" className="form-control" id="cargoDescription" placeholder="Enter cargo description" required />
            </div>

            <div className="col-md-6">
                <label htmlFor="containerUnits" className="form-label">Number of Containers/Units</label>
                <input type="number" className="form-control" id="containerUnits" placeholder="Enter number of containers/units" required />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="weight" className="form-label">Weight/Volume</label>
                <input type="text" className="form-control" id="weight" placeholder="Enter weight/volume" required />
            </div>
            
            <div className="col-md-6">
                <label htmlFor="dimensions" className="form-label">Dimensions (optional)</label>
                <input type="text" className="form-control" id="dimensions" placeholder="Height x Width x Length" />
            </div>
        </div>
      </fieldset>

          <fieldset class="border p-4 mb-4">
            <legend class="w-auto px-2">Pickup and Delivery Information</legend>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="pickup_location" class="form-label">Pickup Location</label>
                <input defaultValue={inputs.pickup_location} name="pickup_location" onChange={handleChange} type="text" id="pickup_location" className="form-control" required />
              </div>
                <div class="col-md-6">
                  <label for="total_qty" class="form-label">Total Quantity</label>
                  <input defaultValue={inputs.total_qty} name="total_qty" onChange={handleChange} type="text" id="total_qty" className="form-control" required />
                </div>
              </div>
              <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="pickup_time" class="form-label">Pickup Date/Time</label>
                          <input defaultValue={inputs.pickup_time} name="pickup_time" onChange={handleChange} type="datetime-local" id="pickup_time" className="form-control" required />
                            </div>
                            <div className="col-md-6">
            <label htmlFor="transport_type_id" className="form-label">Transport</label>
            {transport_type.length > 0 && (
                <select className="form-control" id="transport_type_id" name="transport_type_id" defaultValue={inputs.transport_type_id} onChange={handleChange}>
                    <option value="">Select Transport</option>
                    {transport_type.map((d, key) => (
                        <option key={key} value={d.id}>{d.name}</option>
                    ))}
                </select>
            )}
        </div>
              </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="delivery_location" class="form-label">Delivery Location</label>
                <input defaultValue={inputs.delivery_location} name="delivery_location" onChange={handleChange} type="text" id="delivery_location" className="form-control" required />
              </div>
              <div class="col-md-6">
                <label for="delivery_time" class="form-label">Delivery Date/Time</label>
                <input defaultValue={inputs.delivery_time} name="delivery_time" onChange={handleChange} type="datetime-local" id="delivery_time" className="form-control" required />
              </div>
            </div>
          </fieldset>
          
          <fieldset class="border p-4 mb-4">
            <legend class="w-auto px-2">Additional Notes and Agreement</legend>
            <div class="mb-3">
              <label for="specialInstructions" class="form-label">Special Instructions (if any)</label>
              <textarea class="form-control" id="specialInstructions" rows="4" placeholder="Enter any special instructions"></textarea>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="agreeTerms" required/>
              <label class="form-check-label" for="agreeTerms">I agree to the terms and conditions</label>
            </div>
          </fieldset>

          <div class="text-center">
            <button type="submit" class="btn btn-success">Submit Order</button>
          </div>
        </form>
      </div>

    </AdminLayout>
  )
}



export default Freight