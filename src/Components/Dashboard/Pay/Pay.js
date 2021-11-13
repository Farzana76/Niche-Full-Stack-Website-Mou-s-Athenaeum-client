import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Pay = () => {
    const { user, loading } = useAuth();

    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
            <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif'}} className="p-3 pb-4 text-center text-light fw-bold">{user.displayName}'s dashboard</h2>
                <h1>Online payment is coming soon!</h1>
            </div>
        </div>
    );
};

export default Pay;