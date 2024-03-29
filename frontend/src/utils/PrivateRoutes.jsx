import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = () => {
    const isAuthenticated = true;

    return (
        isAuthenticated ? <Outlet/> : <Navigate to="/login" replace={true} />
    );
};

export default PrivateRoute;
