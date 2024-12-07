import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Forget() {
  return (
    <AdminLayout>

<div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-sm">
        <h2 class="text-center mb-4">Lost Your Key?</h2>
        <form action="reset_passkey.php" method="POST">
            
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            
            
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            
            
            <div class="mb-3">
                <label for="new_passkey" class="form-label">New Passkey</label>
                <input type="password" class="form-control" id="new_passkey" name="new_passkey" placeholder="Enter new passkey" required/>
            </div>

            
            <div class="mb-3">
                <label for="confirm_passkey" class="form-label">Confirm Passkey</label>
                <input type="password" class="form-control" id="confirm_passkey" name="confirm_passkey" placeholder="Confirm new passkey" required/>
            </div>

            
            <button type="submit" class="btn btn-info w-100">Done</button>
        </form>
    </div>
</div>
    </AdminLayout>
  )
}

export default Forget