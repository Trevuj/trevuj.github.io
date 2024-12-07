import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Signup() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs);
        navigate('/clogin')

    }
  return (
    <AuthLayout>
    <div class="container mt-5">
        
        <h1 class="text-center mb-4">Create Your Passkey!</h1>

        <div class="row justify-content-center">
            <div class="col-md-6">
            <form onSubmit={handleSubmit}>
                    
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name="name" placeholder="Enter your username" onChange={handleChange}/>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email"onChange={handleChange}/>
                    </div>

                    <div class="mb-3">
                        <label for="passkey" class="form-label">Passkey</label>
                        <input type="password" class="form-control" id="passkey" name="password" placeholder="Enter your passkey"onChange={handleChange}/>

                    </div>

                    <div class="mb-3">
                        <label for="confirmPasskey" class="form-label">Confirm Passkey</label>
                        <input type="password" class="form-control" id="confirmPasskey" name="c_password" placeholder="Confirm your passkey"onChange={handleChange}/>
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-info w-100">Sign Up</button>
                    </div>

                    <div class="text-center">
                    <p>Already have Passkey?</p><Link to="/clogin">Break here!</Link>

                  </div>
                </form>
            </div>
        </div>
    </div>

    </AuthLayout>
  )
}
export default Signup