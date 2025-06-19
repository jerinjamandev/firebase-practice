import React from 'react';
import SocialLogin from '../components/Socialogin';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
                    <h1 className="text-4xl font-bold text-center py-3">Register now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            <label className="label">PhotoUrl</label>
                            <input type="url" className="input" placeholder="PhotoUrl" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div> 

    );
};

export default Register;