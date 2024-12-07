import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
function Vendors() {
  const [inputs, setInputs] = useState({ id: '', name: '', location: '', title: '', vehicle: '', contact_number: '', email: '', photo: ''});
  const navigate = useNavigate();
  const { id } = useParams();

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/vendors/${id}`).then(function (response) {
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
              apiurl =`/vendors/edit/${inputs.id}`;
          } else {
              apiurl =`/vendors/create`;
          }

          let response = await axios({
              method: 'post',
              responsiveType: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs
          });
          navigate('/vendors')
      }
      catch (e) {
          console.log(e);
        }
      }
  return (
    <AdminLayout>
  <div class="container my-5">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" onSubmit={handleSubmit} id="name" placeholder="Enter your name" required/>
      </div>

      <div class="mb-3">
        <label for="designation" class="form-label">Designation</label>
        <input type="text" class="form-control" name="designation" onSubmit={handleSubmit} id="designation" placeholder="Enter your designation" required/>
      </div>

      <div class="mb-3">
        <label for="status" class="form-label">Work Status</label>
        <input type="text" class="form-control" name="status" onSubmit={handleSubmit} id="workStatus" placeholder="Enter your work status" required/>
      </div>

      <div class="mb-3">
        <label for="details" class="form-label">Details</label>
        <textarea class="form-control" id="details" name="details" onSubmit={handleSubmit} rows="3" placeholder="Enter work details" required></textarea>
      </div>

      <div class="mb-3">
        <label for="contact" class="form-label">Contact Number</label>
        <input type="tel" class="form-control" name="contact" onSubmit={handleSubmit} id="contact" placeholder="Enter your contact number" required/>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" name="email" onSubmit={handleSubmit} id="email" placeholder="Enter your email" required/>
      </div>

      
      <div class="mb-3">
        <label for="photo" class="form-label">Upload Photo</label>
        <input type="file" class="form-control" name="photo" onSubmit={handleSubmit} id="photo" accept="image/*" required/>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

    </AdminLayout>
  )
}

export default Vendors