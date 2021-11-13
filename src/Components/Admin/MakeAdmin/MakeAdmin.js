import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const MakeAdmin = () => {
    const { user, loading } = useAuth();
    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif', position: 'fixed', width: '90%'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>
            </div>
            
        </div>
    );
};

export default MakeAdmin;