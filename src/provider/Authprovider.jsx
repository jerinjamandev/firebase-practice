import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase.init';

export const Authcontext=createContext();

const Authprovider = ({children}) => {
     const [user,setuser]=useState(null);
        useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);
            setuser(currentuser)
        })
         return()=>unsubscribe();
    },[])

    const logout=()=>{
        return signOut(auth)
    }
    const authinfo={user,logout}

    



    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
