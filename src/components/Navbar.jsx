import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const NavBar = () => {
  const {user,logout}=useContext(Authcontext)
    const nav=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About Us</Link></li>
    {!user?.email&&<li><Link to='/login'>Login</Link></li>}
    {!user?.email&&<li><Link to='/regi'>Register</Link></li>
}
</>

  const handlelogout=()=>{
    logout()
  }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {nav}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <div className="avatar">
  <div className="w-[40px] rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
    {user?.email&&<button onClick={handlelogout} className="btn btn-error text-white">log-out</button>}
  </div>
</div>
        </div>
    );
};

export default NavBar;