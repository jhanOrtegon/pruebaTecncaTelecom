import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { loginContext } from '../context/auth/loginContext';

const PublicRouters = ({ children }: { children: any }) => {
    const auth = useContext(loginContext)
    console.log(auth);
    return !auth.stateAuth?.logged
        ? children : <Navigate to={'/dashboard/dc'} />
}

export default PublicRouters