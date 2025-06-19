import React from 'react';
import SocialLogin from '../components/Socialogin';

const Login = () => {
    return (
               <div>
           <div className="hero bg-base-200 min-h-screen">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
     <h1 className="text-4xl font-bold text-center py-3">Login now!</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div> 
    );
};

export default Login;