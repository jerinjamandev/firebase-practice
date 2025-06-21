import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Private = ({children}) => {
   const {user,loading}=useContext(Authcontext)
   console.log(user,loading);

   if (loading) {
    return <div>loading...</div>
    
   }
   if (!user) {
    return <Navigate to='/login'replace={true}></Navigate>
   }
   return children
};


export default Private;