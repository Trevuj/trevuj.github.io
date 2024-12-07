import React, { useState, useEffect } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';

function Clogin() {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState([]);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		let check = await login(inputs);
		if (check) {
			window.location =process.env.REACT_APP_BASE_URL
		} else {
			alert("Sorry password or email address is wrong!");
		}
	}
  return (
    <AuthLayout>


    <h1 class="text-center mb-4">Break The Lock!</h1>
    <form onSubmit={handleSubmit}>
        <div class="row justify-content-center">
            <div class="col-md-10">  
                <form>
                    <fieldset class="border p-4">
                        <legend class="w-auto px-2 text-dark">Login Information</legend>

                        
                        <div class="form-row mb-3">
                            <label for="username" class="col-sm-2 col-form-label text-right">Username</label> 
                            <div class="col-sm-10"> 
                                <input type="text" class="form-control" id="username" placeholder="Username" />
                            </div>
                        </div>

                        
                        <div class="form-row mb-3">
                            <label for="passkey" class="col-sm-2 col-form-label text-right">Passkey</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="passkey" placeholder="Insert your passkey" />
                            </div>
                        </div>

                    
                        <div class="form-row mb-3">
                            <div class="offset-sm-2 col-sm-10">
                                <button type="submit" class="btn btn-info w-100">Unlock!</button>
                            </div>
                        </div>

                    
                        <div class="text-center">
                            <Link to="/forget">Need Any Support?</Link>
                        </div><br></br>

                    
                        <div class="text-center">
                            <p>Haven't any pass?</p>
                            <Link to="/signup">Press the door!</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </form>



    </AuthLayout>
  )
}
export default Clogin