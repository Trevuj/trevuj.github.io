import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Showhistory() {
  const [inputs, setInputs] = useState({ id: '', company_name: '', email: '', shipment_date: '', cargo_type: '', shipment_country:'',warehouse_name:'', cost:'', shipment_status:'', tracking_number: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/history/${id}`).then(function (response) {
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
                apiurl =`/history/edit/${inputs.id}`;
            } else {
                apiurl =`/history/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/history')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
        <h2 class="text-center mb-4">Order History</h2>
        <form>
            <div class="mb-3">
                <label for="companyName" class="form-label">Company Name</label>
                <input type="text" class="form-control" id="companyName" name="company_name" placeholder="Enter company name"/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email"/>
            </div>
            <div class="mb-3">
                <label for="shipmentDate" class="form-label">Shipment Date</label>
                <input type="date" class="form-control" id="shipmentDate" name="shipment_date"/>
            </div>
            <div class="mb-3">
                <label for="cargoType" class="form-label">Cargo Type</label>
                <input type="text" class="form-control" id="cargoType" placeholder="Enter cargo type" name="cargo_type"/>
            </div>
            <div class="mb-3">
                <label for="shipmentCountry" class="form-label">Shipment Country</label>
                <input type="text" class="form-control" id="shipmentCountry" placeholder="Enter shipment country" name="shipment_country"/>
            </div>
            <div class="mb-3">
                <label for="warehouseName" class="form-label">Warehouse Name</label>
                <input type="text" class="form-control" id="warehouseName" placeholder="Enter warehouse name" name="warehouse_name"/>
            </div>
            <div class="mb-3">
                <label for="cost" class="form-label">Cost</label>
                <input type="number" class="form-control" id="cost" placeholder="Enter cost" name="cost"/>
            </div>
            <div class="mb-3">
                <label for="shipmentStatus" class="form-label">Shipment Status</label>
                <select class="form-select" id="shipmentStatus" name="shipment_status">
                    <option value="pending">Pending</option>
                    <option value="in_transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="trackingNumber" class="form-label">Tracking Number</label>
                <input type="text" class="form-control" id="trackingNumber" placeholder="Enter tracking number" name="tracking_number"/>
            </div>
            <button type="submit" class="btn btn-primary">Okay</button>
        </form>
    </div>

    </AdminLayout>
  )
}

export default Showhistory