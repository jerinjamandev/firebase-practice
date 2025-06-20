import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../components/Socialogin';
import { auth } from '../firebase.init';

const Login = () => {
  const navigate=useNavigate()
  const handlelogin=(event)=>{
    event.preventDefault()
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password);

    signInWithEmailAndPassword(auth,email,password)
    .then(res=>{console.log(res.user),navigate('/')})
    .catch(error=>{console.log(error.message)})

  }
    return (
               <div>
           <div className="hero bg-base-200 min-h-screen">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
     <h1 className="text-4xl font-bold text-center py-3">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handlelogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div> 
    );
};

export default Login;