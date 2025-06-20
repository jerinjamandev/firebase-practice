import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../components/Socialogin';
import { auth } from '../firebase.init';

const Register = () => {
    const navigate=useNavigate()
    const handlerigster = (event) => {
        event.preventDefault()
         const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name,photo,email,password);

        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{console.log(res.user),navigate('/');})
        .catch(error=>{console.log(error.message);})

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
                    <h1 className="text-4xl font-bold text-center py-3">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handlerigster} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">PhotoUrl</label>
                            <input type="url" name='photo' className="input" placeholder="PhotoUrl" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;